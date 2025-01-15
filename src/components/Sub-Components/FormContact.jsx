import React, { useState } from 'react';
import formclasses from './FormContact.module.css';

const Input = (props) => {
  return (
    <div className={formclasses.controls}>
      <input
        autoComplete="off"
        spellCheck="false"
        className={formclasses.control}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value} // Valor dinámico
        onChange={props.onChange} // Maneja cambios en el formulario
        name={props.name} // Asegura que se identifique por su nombre
      />
      <div id="spinner" className={formclasses.spinner}></div>
    </div>
  );
};

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = () => {
    const phone = '56958355769'; // Número de WhatsApp (sin + ni espacios)
    const message = `Hola, mi nombre es ${formData.name}. Mi correo es ${formData.email}. Mensaje: ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña
  };

  return (
    <form
      className={formclasses['login-form']}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={formclasses.inputdiv}>
        {/* Campo para Nombre */}
        <Input
          placeholder="Nombre"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {/* Campo para Correo */}
        <Input
          placeholder="Correo"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* Campo para Mensaje */}
        <textarea
          className={`${formclasses.control} ${formclasses['login-form__textarea']}`}
          placeholder="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      {/* Botón para enviar a WhatsApp */}
      <button
        className={formclasses.control}
        type="button"
        onClick={handleWhatsAppSend}
      >
        Enviar a WhatsApp
      </button>
    </form>
  );
};

export default FormContact;
