import React, { Component } from 'react';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handlerForm = this.handlerForm.bind(this);
  }

  componentDidMount() {
    const container = document.getElementsByName('action');
    const form = document.getElementsByClassName('contact-form')[0];
    form.addEventListener('click', (e) => e.stopPropagation());
    Object.keys(container).forEach((div) => {
      container[div].addEventListener('click', () => this.handlerForm());
    });
  }

  handlerForm() {
    this.setState((e) => {
      if (e.active) {
        window.removeEventListener('click', () => this.handlerForm());
        return { active: false };
      }
      return { active: true };
    });
  }

  render() {
    const { state: { active } } = this;
    if (active) {
      window.onclick = () => this.handlerForm();
    } else {
      window.onclick = null;
    }
    return (
      <div className={`contact-form ${active ? 'active' : 'close'}`}>
        <div className="close-form" name="action">
          <p>Contáctanos</p>
        </div>
        <div className="form-container">
          <form action="" method="post">
            <button type="button" name="action">X</button>
            <h1>¿Necesitas una página web?</h1>
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
  }
}
