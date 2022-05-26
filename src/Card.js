import React from "react"


export default function Card(props){
    return(
        <div className="card-container">
            <img className="card-container-img" src={props.img}/>
            <div className="card-container-details">
                <div className="card-container-details-location-mapUrl">
                    <span className="card-container-details-location"><i className="fa-solid fa-location-dot"></i>{props.location}</span>
                    <a className="card-container-details-mapUrl" href={props.mapUrl}>View on Google Maps</a>
                </div>
                <h2 className="card-container-details-title">{props.title}</h2>
                <h3 className="card-container-details-date">{props.startDate} - {props.endDate}</h3>
                <p className="card-container-details-description">{props.description}</p>
            </div>
        </div>
    )
}