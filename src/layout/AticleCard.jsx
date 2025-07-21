import React from 'react';

function AticleCard(props) {
    const { img, title, desc, logoAticle, nameAritcle } = props;
    const currentDate = new Date().toLocaleDateString('km-KH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    });

return (
<div className="col-lg-4 col-md-6 col-sm-12 mb-4">
  <div className="card shadow-sm h-100 overflow-hidden" style={{ 
    border: 'none', 
    borderRadius: '12px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  }}>
    <div className="overflow-hidden" style={{ height: '200px' }}>
      <img 
        src={img} 
        className="card-img-top w-100 h-100" 
        alt={title} 
        style={{ 
          objectFit: 'cover',
          transition: 'transform 0.5s ease'
        }}
      />
    </div>

    <div className="card-body d-flex flex-column" >
      <h5 className="card-title text-danger">{title}</h5>
      
      <p className="card-text fs-4 fw-bold">{desc}</p>

      <div className="d-flex align-items-center pt-3 border-top">
        <img
          src={logoAticle}
          alt={nameAritcle}
          className="rounded-circle me-3"
          style={{ 
            width: '42px', 
            height: '42px', 
            objectFit: 'cover',
            border: '2px solid #f8f9fa',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        />
        <div className="d-flex flex-column">
          <small className="fw-semibold" style={{ fontSize: '0.85rem' }}>{nameAritcle}</small>
          <small className="text-muted" style={{ fontSize: '0.75rem' }}>
            {currentDate} · <span className="text-primary">Read more</span>
          </small>
        </div>
        <div className="ms-auto">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>);

}

export default AticleCard;