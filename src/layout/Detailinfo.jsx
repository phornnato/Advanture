import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaTelegramPlane } from 'react-icons/fa';

function Detailinfo({ img, name, role, description, phone, email, telegram }) {
  return (
    <div className="card shadow-lg border-0 rounded-4 p-4 d-flex flex-column flex-md-row align-items-center bg-white">
      {/* Image Section */}
      <div className="text-center">
        <img
          src={img}
          alt={name}
          className="rounded-circle"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            border: '4px solid #0d6efd'
          }}
        />
      </div>

      {/* Info Section */}
      <div className="ms-md-4 mt-4 mt-md-0 text-center text-md-start flex-grow-1">
        <h4 className="fw-bold mb-1">{name}</h4>
        <p className="text-muted mb-2">{role}</p>
        <p className="mb-3">{description}</p>

        <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-md-start">
          <a href={`tel:${phone}`} className="btn btn-outline-primary">
            <FaPhoneAlt className="me-2" /> Call
          </a>
          <a href={`mailto:${email}`} className="btn btn-outline-secondary">
            <FaEnvelope className="me-2" /> Email
          </a>
          <a
            href={`https://t.me/${telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info"
          >
            <FaTelegramPlane className="me-2" /> Telegram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Detailinfo;
