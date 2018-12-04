import React, { Component } from "react";

export function SocialLinks(props) {
  const directProps = props.props;
  return (
    <div className="col-sm-3">
      <a href={directProps.url} className={`fa ${directProps.faClassName}`} />
    </div>
  );
}
