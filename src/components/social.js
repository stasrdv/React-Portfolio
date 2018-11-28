import React, { Component } from "react";

export function SocialLinks(props) {
  return (
    <div className="col-sm-4">
      <a href={props.url} className={`fa ${props.faClassName}`} />
    </div>
  );
}
