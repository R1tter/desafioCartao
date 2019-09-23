import React ,{ Component } from 'react';
import axios from 'axios';
import api from '../../services/api';
import { throwStatement } from '@babel/types';

// const formValid = formErrors =>{
//   let valid = true;

//   Object.values(formErrors).forEach(val => val.length > 0 && (valid = false));

//   return valid;
// }

export default class Form extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: "",
      CPForCNPJ: "",
      email: "",
      debitTax: "",
      creditTax: "",
      aproved: "",
      formErrors: {
        title: "",
        CPForCNPJ: "",
        email: "",
        debitTax: "",
        creditTax: ""
      }
    }
  };

  changeHandler = e => {
    this.setState({ [e.target.className]: e.target.value})

    };
    
  submitHandler = e => {
    
    e.preventDefault(this.state)
    console.log(this.state)
    if(this.state.debitTax >= 3 && this.state.creditTax >= 3){
      this.state.aproved = "Cliente aprovado";
      
    } else {
      this.state.aproved = "Cliente reprovado";
    } 
    console.log(this.state)
    api.post('/clients', this.state)
      
  }

  render() {
    const { title, CPForCNPJ, email, debitTax, creditTax} = this.state
    return (
      <div className="wrapper">
        <div className="client-form">
          <h1>Cadastre o cliente</h1>
          <form onSubmit={this.submitHandler} noValidate>
            <div className="title">
              <label htmlFor="Nome do cliente">Nome do cliente</label>
              <input type="text" className="title" value={title} placeholder="Nome" type="text" name="title" noValidate onChange={this.changeHandler}/>
            </div>
            <div className="CPForCNPJ">
              <label htmlFor="Nome do cliente">CPF ou CNPJ</label>
              <input type="text" className="CPForCNPJ" value={CPForCNPJ} placeholder="CPF/CNPJ" type="text" name="CPForCNPJ" noValidate onChange={this.changeHandler}/>
            </div>
            <div className="email">
              <label htmlFor="Nome do cliente">Email</label>
              <input type="text" className="email" value={email} placeholder="Email" type="email" name="email" noValidate onChange={this.changeHandler}/>
            </div>
            <div className="debitTax">
              <label htmlFor="Nome do cliente">Débito do concorrente</label>
              <input type="text" className="debitTax" value={debitTax} placeholder="Débito Concorrente" type="text" name="debitTax" noValidate onChange={this.changeHandler}/>
            </div>
            <div className="creditTax">
              <label htmlFor="Nome do cliente">Crédito do concorrente</label>
              <input type="text" className="creditTax" value={creditTax} placeholder="Crédito Concorrente" type="text" name="creditTax" noValidate onChange={this.changeHandler}/>
            </div>
            <div className="create-client">
              <button type="submit">Potencial</button>
              <small>Já é cliente?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
};