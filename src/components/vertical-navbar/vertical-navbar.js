import React from "react";
import { Link } from "react-router-dom";
import { SocialLinks } from "./social";
import { BannerImage } from "./banner";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "../../styles/css/vertical-navbar.css";
import T from "i18n-react";

export class VerticalNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuTranslated: false };
    this.toggleTranslate = this.toggleTranslate.bind(this);
  }

  toggleTranslate() {
    this.setState({ isMenuTranslated: !this.state.isMenuTranslated });
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
  render() {
    const translateSuffix = this.state.isMenuTranslated ? "heb" : "en";
    const itemsInCart = this.props.cartItems.length;
    const isDisplayed = this.props.isUserLoggedIn;

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
        {/* Banner Image */}
        <NavItem>
          <BannerImage />
        </NavItem>

        {/* Translate element */}
        <NavItem className="translate" onClick={this.toggleTranslate}>
          {translateSuffix.toUpperCase()}
          <NavIcon>
            <i className="fa fa-language" />
          </NavIcon>
        </NavItem>
        {/* Log In button */}
        {!isDisplayed && (
          <NavItem>
            <button
              type="button"
              className="btn btn-success .btm-md login"
              onClick={() => this.props.logIn()}
            >
              Log In
            </button>
          </NavItem>
        )}

        {/* Cart */}
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="/cart">
            <NavIcon>
              <span className="fa-stack fa-1x cart-icon">
                <i className="fa fa-cart-plus" aria-hidden="true" />
                <strong className="fa-stack-1x cart-text">{itemsInCart}</strong>
              </span>
            </NavIcon>
          </NavItem>
          {/* Home */}
          <NavItem eventKey="/">
            <NavIcon>
              <i className="fa fa-fw fa-home" />
            </NavIcon>
            <NavText>{T.translate(`Home.${translateSuffix}`)}</NavText>
          </NavItem>
          {/* Products */}
          <NavItem eventKey="/products">
            <Link className="nav-link" to="/products" />
            <NavIcon>
              <i className="fa fa-list" />
            </NavIcon>
            <NavText>{T.translate(`Products.${translateSuffix}`)}</NavText>
          </NavItem>
          {/* Contact */}
          <NavItem eventKey="/contact">
            <NavIcon>
              <i className="fa fa-envelope-o" />
            </NavIcon>
            <NavText>{T.translate(`Contact.${translateSuffix}`)}</NavText>
          </NavItem>
          {/* About */}
          <NavItem eventKey="/about">
            <NavIcon>
              <i className="fa fa-info" />
            </NavIcon>
            <NavText>{T.translate(`About.${translateSuffix}`)}</NavText>
          </NavItem>
        </SideNav.Nav>
        {/* Social media */}
        <div className="row social">
          {socialMediaData.map(socialMediaObj => (
            <SocialLinks key={socialMediaObj.faClassName} {...socialMediaObj} />
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
