import React from 'react';

export default () => (
  <div className="contact-form">
    <div className="form-container">
      <form action="" method="post">
        <h1>¿Necesitas Una Pagina Web?</h1>
        <h2>No dudes en contactarnos, solo llena el siguiente formulario</h2>
        <div className="name">
          <label htmlFor="firstName">
            <input type="text" name="firstName" placeholder="Nombre" />
          </label>
          <label htmlFor="lastName">
            <input type="text" name="lastName" placeholder="Apellido" />
          </label>
        </div>
        <label htmlFor="email">
          <input type="text" name="email" placeholder="Correo" />
        </label>
        <label htmlFor="phone">
          <input type="text" name="phone" placeholder="Numero de Telf" />
        </label>
        <label htmlFor="motive">
          <textarea type="text" name="motive" placeholder="Motivo" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
);
