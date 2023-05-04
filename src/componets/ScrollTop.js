import React from "react";
import { Link } from "react-router-dom";
import goto from "../Assets/images/go-to-top.png"

export default function ScrollTop() {
    return (
        <div id="stop" className="scrollTop">
        <span>
          <Link to="#">
            <img
              src={process.env.PUBLIC_URL + "/images/go-to-top.png"}
              alt=""
            />
          </Link>
        </span>
      </div>
    )
}