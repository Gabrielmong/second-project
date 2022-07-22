import React from "react";
import "../styles.css";
import pin from "../images/location.png";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card--image">
          <img
            src={props.place.imageUrl}
            className="card--image--cropped"
            alt=""
          ></img>
        </div>
        <div className="card--content">
          <div className="card-link-location">
            <img src={pin} className="card--location--pin" alt="" />
            <p className="card--content--location">{props.place.location}</p>
            <a className="card--content--link" href={props.place.googleMapsUrl} target="__blank">
              View on Google Maps
            </a>
          </div>

          <h3 className="card--content--title">{props.place.title}</h3>
          <p className="card--content--date">
            {props.place.startDate} - {props.place.endDate}
          </p>
          <p className="card--content--description">
            {props.place.description}
          </p>
        </div>
      </div>
    </>
  );
}
