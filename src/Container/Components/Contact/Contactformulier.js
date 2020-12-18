import React from "react";

export default class Contactformulier extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mvovwbgk"
        method="POST"
      >
       <input type="text" name="naam" placeholder="Naam*"/>
       <input type="email" name="email" placeholder="E-mailadres*" required/>
       <br/>
       <textarea name="message" placeholder="Typ hier je bericht"/>
       <br/>
        
        {status === "SUCCESS" ? <p>Dankjewel! Ik neem zo snel mogelijk contact met je op.</p> : <button>Verzenden</button>}
        {status === "ERROR" && <p>Oeps! Error, probeer het opnieuw.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}