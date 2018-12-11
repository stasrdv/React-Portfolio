import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SocialLinks } from "./social";
import { CartLink } from "./cartLink";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "../../styles/css/vertical-navbar.css";
import T from "i18n-react";

export class VerticalNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuTranslated: false };
    this.toggleTranslate = this.toggleTranslate.bind(this);
  }

  translateMenu() {
    T.setTexts({
      Home: {
        heb: "דף הבית",
        en: "Home"
      },
      Products: {
        heb: "רשימת מוצרים",
        en: "Products"
      },
      Contact: {
        heb: "צור קשר",
        en: "Contact"
      },
      About: {
        heb: "אודות",
        en: "About"
      }
    });
  }

  toggleTranslate() {
    this.setState({ isMenuTranslated: !this.state.isMenuTranslated });
  }

  render() {
    const itemsInCart = this.props.pros.cartItems
      ? this.props.pros.cartItems.length
      : 0;

    const translateSuffix = this.state.isMenuTranslated ? "heb" : "en";
    this.translateMenu();
    return (
      <SideNav
        className="verticalNavbar"
        onSelect={selected => {
          const route = selected;
          this.props.history.push(route);
        }}
      >
        <SideNav.Toggle />
        <NavItem>
          <div className="navbar-brand">
            <img
              className="img-responsive"
              src="https://avatars0.githubusercontent.com/u/15888139?s=460&v=4"
              width="auto"
              height="100"
            />
          </div>
        </NavItem>
        <NavItem className="translate" onClick={this.toggleTranslate}>
          {translateSuffix.toUpperCase()}
          <NavIcon>
            <i className="fa fa-language" style={{ fontSize: "1.75em" }} />
          </NavIcon>
        </NavItem>
        <NavItem>
          {!this.props.pros.isUserLoggedIn ? (
            <button
              type="button"
              className="btn btn-success .btm-md login"
              onClick={() => this.props.logIn()}
            >
              Log In
            </button>
          ) : null}
        </NavItem>

        <NavItem>
          {this.props.pros.isUserLoggedIn ? (
            <CartLink itemsInCart={itemsInCart} />
          ) : null}
        </NavItem>
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="/">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>{T.translate(`Home.${translateSuffix}`)}</NavText>
          </NavItem>
          <NavItem eventKey="/products">
            <Link className="nav-link" to="/products" />
            <NavIcon>
              <i className="fa fa-list" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>{T.translate(`Products.${translateSuffix}`)}</NavText>
          </NavItem>

          <NavItem eventKey="/contact">
            <NavIcon>
              <i className="fa fa-envelope-o" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>{T.translate(`Contact.${translateSuffix}`)}</NavText>
          </NavItem>

          <NavItem eventKey="/about">
            <NavIcon>
              <i className="fa fa-info" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>{T.translate(`About.${translateSuffix}`)}</NavText>
          </NavItem>
        </SideNav.Nav>

        <div className="row social">
          {socialMediaData.map(socialMediaObj => (
            <SocialLinks
              key={socialMediaObj.faClassName}
              props={socialMediaObj}
            />
          ))}
        </div>
      </SideNav>
    );
  }
}
const socialMediaData = [
  { url: "https://www.facebook.com/stas.rdv", faClassName: "fa-facebook" },
  { url: "https://www.instagram.com/stasrdv", faClassName: "fa-instagram" },
  {
    url: "https://www.linkedin.com/in/stas-rudevitsky-124805113",
    faClassName: "fa-linkedin"
  }
];
