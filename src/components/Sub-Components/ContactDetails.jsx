import React from 'react';
import FormContact from './FormContact'; // Tu componente de formulario
import contactdetailclasses from './ContactDetails.module.css';
import { PushpinTwoTone } from '@ant-design/icons';

const ContactDetails = () => {
  return (
    <div className={contactdetailclasses['contact-details__wrapper']}>
      {/* Formulario */}
   

      {/* Sección de Contactos */}
      <div className={contactdetailclasses['contact-info-section']}>
        {/* Dirección y Contactos Generales */}
        <ul className={contactdetailclasses['contact-details__lists']}>
          <li>
            <h4>Dirección</h4>
            <p>
              Eleuterio Ramirez
              <br /> 757
              <br /> Santiago, Chile
            </p>
          </li>
          <li>
            <h4>Contactos Generales</h4>
            <p>
              T – +56 9 5835 5769 <br />
              gorillaworkoutspa@gmail.com
            </p>
          </li>
        </ul>

        {/* Instagram */}
        <div className={contactdetailclasses['instagram-section']}>
          <h4>Instagram</h4>
          <a
            href="https://www.instagram.com/gorillaworkout.cl?igsh=MTZhZ2E0YnVkZnJqdA=="
            target="_blank"
            rel="noopener noreferrer"
            className={contactdetailclasses['contact-link']}
          >
            <PushpinTwoTone twoToneColor="#f97316" style={{ fontSize: '1.5rem' }} />
            <span style={{ marginLeft: '0.5rem' }}>¡Clickea aquí para nuestro Instagram!</span>
          </a>
        </div>

        {/* Clase de Prueba Gratis */}
        <div className={contactdetailclasses['trial-class-section']}>
          <h4>¡Clase de Prueba Gratis!</h4>
          <p>¿Quieres probar nuestras clases? ¡Es completamente gratis!</p>
          <a
            href="https://www.tulinkdeclaseprueba.com"
            target="_blank"
            rel="noopener noreferrer"
            className={contactdetailclasses['contact-link']}
          >
            <PushpinTwoTone twoToneColor="#f97316" style={{ fontSize: '1.5rem' }} />
            <span style={{ marginLeft: '0.5rem' }}>Regístrate aquí para tu clase de prueba</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
