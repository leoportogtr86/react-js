import React from "react";
import './Menu.css'

export default props => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav className="nav justify-content-center bg-gray">
              <a href="#" className="nav-link">
                {props.item1}
              </a>
              <a href="#" className="nav-link">
                {props.item2}
              </a>
              <a href="#" className="nav-link">
                {props.item3}
              </a>
              <a href="#" className="nav-link">
                {props.item4}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
