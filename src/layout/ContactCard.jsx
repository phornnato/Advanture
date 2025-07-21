import React from 'react';

function ContactCard({ name, image, phone, facebook, telegram, mapSrc }) {
  return (
    <div className="card shadow-lg p-4 d-flex flex-column align-items-center gap-4 border-0 rounded-4">

      {/* Profile Image with Blue Border */}
      <div className="border border-3 border-primary rounded-circle p-1" style={{ width: '160px', height: '160px' }}>
        <img 
          src={image} 
          alt={name} 
          className="rounded-circle w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Name Section */}
      <h3 className="fw-bold text-primary text-center">{name}</h3>

      {/* Contact Info Section */}
      <div className="w-100 d-flex flex-column gap-3 px-2">

        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-telephone-fill text-primary"></i>
          <a href={`tel:${phone}`} className="text-dark text-decoration-none fw-medium">
            {phone}
          </a>
        </div>

        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-facebook text-primary"></i>
          <a href={facebook} target="_blank" rel="noreferrer" className="text-dark text-decoration-none fw-medium">
            Facebook Page
          </a>
        </div>

        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-telegram text-primary"></i>
          <a href={telegram} target="_blank" rel="noreferrer" className="text-dark text-decoration-none fw-medium">
            Message on Telegram
          </a>
        </div>

      </div>

      {/* Embedded Map */}
      <div className="w-100 mt-3 rounded overflow-hidden shadow-sm">
        <iframe
          src={mapSrc}
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactCard;
