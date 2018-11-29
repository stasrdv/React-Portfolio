import React, { Component } from "react";

export function SocialLinks(props) {
  const directProps = props.props;
  debugger;
  return (
    <div className="col-sm-4">
      <a href={directProps.url} className={`fa ${directProps.faClassName}`} />
    </div>
  );
}
