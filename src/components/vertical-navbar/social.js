import React from "react";

export function SocialLinks(props) {
  return (
    <div className="col-sm-3">
      <a href={props.url} className={`fa ${props.faClassName}`} />
    </div>
  );
}
