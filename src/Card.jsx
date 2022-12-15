import { NavLink } from "react-router-dom";
//import web from "../src/images/about1.webp";
const Card = (props) => {
  return (
    <>
     
        <div className="col-md-4 col-10 mx-auto">
           
          <div className="card h-100">
            <img className="card-img-top img-size" src={props.imgsrc} alt="Card cap"/>
            <div className="card-body card_equal">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
               {props.text}
              </p>
              <NavLink to ="" className="btn btn-primary">
                Get Started
              </NavLink>
            </div>
            </div>
          </div>
     
    </>
  );
};

export default Card;
