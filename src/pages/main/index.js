import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import'./styles.css';

export default class Main extends Component {
  state = {
    clients: [],
    clientInfo: {},
    page: 1,
  }

  componentDidMount(){
    this.loadClients();
  }

  loadClients = async (page = 1) => {
    const response = await api.get(`/clients?page=${page}`);

    const { docs, ...clientInfo } = response.data;

    this.setState({ clients: docs, clientInfo, page });
  };
  prevPage = () => {
    const { page, clientInfo } = this.state

    if(page === 1) return;

    const pageNumber = page - 1;

    this.loadClients(pageNumber);
  }

  nextPage = () => {
    const { page,clientInfo } = this.state

    if(page === clientInfo.pages) return;

    const pageNumber = page + 1;
    this.loadClients(pageNumber);
  }

  render(){
    const { clients, page, clientInfo } = this.state;

    return (
      <div className="client-list">
        {clients.map(client =>(
          <article key={client._id}>
            <strong>{client.title}</strong>
            <p>{client.CPForCNPJ}</p>
            <p>{client.email}</p>
            <Link to={`/clients/${client._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
            <button disabled={ page === 1 } onClick={this.prevPage}>Anterior</button>
            <button disabled={ page === clientInfo.pages } onClick={this.nextPage}>Próxima</button>
        </div>
      </div>
    )
  }
}