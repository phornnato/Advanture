import React from 'react';
import ContactCard from '../layout/ContactCard';

function Contact(props) {
    return (
        <div>
           <ContactCard
            name="Phorn Travel Guide"
            image="img/admin/phorn.png"
            phone="+855 97 4303 668"
            facebook="https://www.facebook.com/phorn.ahpoji?mibextid=ZbWKwL"
            telegram="https://t.me/+855974303668"
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.871191968608!2d104.9256365748171!3d11.556474788643769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0xeac5420f72706db0!2z4Z6c4Z634Z6Y4Z624Z6T4Z6v4Z6A4Z6a4Z624Z6H4Z-S4Z6Z!5e0!3m2!1skm!2skh!4v1753068148449!5m2!1skm!2skh"
            />

        </div>
    );
}

export default Contact;