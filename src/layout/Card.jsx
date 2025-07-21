import React from 'react';
import { Link } from 'react-router-dom';
function Card(props) {
  const { img, title, description, buttonText, columnClass,tour_detail } = props;

  return (
    <div className={columnClass || "col-lg-4 col-md-6 col-sm-12"}>
      <div 
        className="card shadow-sm mb-4 h-100 border-0"
        style={{ borderRadius: "1rem", overflow: "hidden", transition: "transform 0.3s, box-shadow 0.3s" }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,0.10)";
        }}
      >
        {img && (
          <img
            src={img}
            className="card-img-top"
            alt={title}
            style={{ height: "220px", objectFit: "cover" }}
          />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold" style={{ fontFamily: "Segoe UI" }}>{title}</h5>
          <p className="card-text text-muted flex-grow-1" style={{ fontSize: "0.95rem" }}>
            {description}
          </p>
          {buttonText && (
            <Link to={tour_detail} className="btn btn-outline-primary mt-auto w-100">
            {buttonText}
          </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
