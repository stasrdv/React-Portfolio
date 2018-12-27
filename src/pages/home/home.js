import React from "react";
import "../../styles/css/home.css";

const HomePage = props => {
  const info = props.info;
  return (
    <div className="jumbotron home-page">
      <div className="container">
        <h1 className="display-4">Welcome to my portfolio store</h1>
        <p className="lead">
          The links to Products,and Cart will be available only after login !
        </p>
        <hr className="my-4" />
        {info ? <h3>{info}</h3> : null}
      </div>
    </div>
  );
};
export default HomePage;
