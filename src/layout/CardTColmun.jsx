import React from 'react';

function CardTColmun({ data }) {
return (
    <div >
      <div className="row g-4">

        {/* Left Big Feature Card */}
        <div className="col-md-8">
          <div
            className="position-relative text-white rounded shadow"
            style={{
              backgroundImage: `url(${data.left.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
            }}
          >
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 rounded"></div>
            <div className="position-relative p-4 h-100 d-flex flex-column justify-content-end">
              <div className="small text-uppercase fw-bold">{data.left.category}</div>
              <h2 className="fw-bold">{data.left.title}</h2>
              <div className="small">🖊 {data.left.author}</div>
            </div>
          </div>
        </div>

        {/* Right Column with Two Stacked Cards */}
        <div className="col-md-4 d-flex flex-column gap-4">

          {data.right.map((card, index) => (
            <div
              key={index}
              className="rounded shadow text-white position-relative"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '190px',
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 rounded"></div>
              <div className="position-relative p-3 h-100 d-flex flex-column justify-content-end">
                <div className="small text-uppercase fw-bold">{card.category}</div>
                <h5 className="fw-bold">{card.title}</h5>
                <div className="small">🖊 {card.author}</div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default CardTColmun;