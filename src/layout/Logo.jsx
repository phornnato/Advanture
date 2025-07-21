import React from 'react';

function Logo(props) {
    return (
      <div className="container text-center">
  <img 
    src="img/logo.png" 
    alt="Phorn Logo" 
    className="img-fluid rounded mt-3" 
    style={{ width: "30%" }} 
  />
  <p className=" text-muted" dir="rtl" style={{ fontStyle: "italic", fontSize: "1.1rem" }}>
    "ជីវិតគឺជាការរុក្ខជាតិមួយ ដែលមានតែធម្មជាតិនឹងនាំឲ្យវាលូតលាស់ | “Life is like a plant — only nature can help it grow.”


  </p>
</div>
    );
}

export default Logo;