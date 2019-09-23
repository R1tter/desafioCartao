import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';
export default class Product extends Component {
  state = {
    product: {},
    client: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

     const response = await api.get(`/clients/${id}`)

     this.setState({ client: response.data });
  }

  render() {
    const { client } = this.state;

    return (
      <div className="client-info">
        <h1>{client.title}</h1>
        <p>{client.CPForCNPJ}</p>
        <p>{client.email}</p>
        <p>Taxa do concorrente: {client.debitTax}</p>
        <p>Taxa do concorrente: {client.creditTax}</p>
        <p>Status do cliente: {client.aproved}</p>
        <strong>Cadastro {client.createdAt}</strong>
      </div>
    )
  }
}