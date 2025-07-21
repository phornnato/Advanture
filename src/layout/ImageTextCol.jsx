import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function ImageTextCol({ img, title, desc, location, footerText, onBook, buy}) {
  return (
    <div className="card mb-4"  >
      <div className="row g-0 align-items-center">
        {/* Image Section */}
        <div className="col-md-4 d-flex justify-content-center align-items-center">
  <img
    src={img}
    alt={title}
    style={{
      width: '100%',
      maxHeight: '220px',
      objectFit: 'cover',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}
  />
</div>


        {/* Text Section */}
        <div className="col-md-8">
          <div className="card-body d-flex flex-column h-100">
            <h5 className="card-title">{title}</h5>
            {location && (
              <p className="text-muted mb-2">
               
                {location}
              </p>
            )}
            <p className="card-text flex-grow-1">{desc}</p>
            
            <div className="d-flex justify-content-between align-items-center mt-3">
              {footerText && (
                <small className="text-muted">{footerText}</small>
              )}
              <button 
                className="btn btn-primary btn-sm"
                onClick={onBook}
              >
               {buy}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageTextCol;
