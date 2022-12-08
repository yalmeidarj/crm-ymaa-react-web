import { useState } from 'react';
import styles from '../styles/ServicesTable.module.css'
import ClientForm from './ClientForm';
export default function ClientsTable(props) {
  const [clients, setClients] = useState(props.clients);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    const filteredClients = props.clients.filter(client =>
      client.id.toString().includes(event.target.value) ||
      client.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      client.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
      client.phone.toString().includes(event.target.value)
    );
    setClients(filteredClients);
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };



  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clients.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(clients.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
    return (
      <div>
        <div className={styles.clientForm}>
          <ClientForm />
        </div>  
        <div className={styles.wrapper}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Buscar Cliente"
          value={searchTerm}
          onChange={handleSearch}
        />          
        <div className={styles.pagination}>
          {pageNumbers.map(number => (
            <button key={number} onClick={() => handlePageChange(number)}>
              {number}
            </button>
          ))}
        </div>          
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr >
                <th className={styles.tableHeader}>ID</th>
                <th className={styles.tableHeader}>Nome</th>
                <th className={styles.tableHeader}>Email</th>
                <th className={styles.tableHeader}>Telefone</th>
                <th className={styles.tableHeader}>Endereço</th>
                <th className={styles.tableHeader}>Outros</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map(client => (
                <tr  key={client.id}>
                  <td className={styles.cell}>{client.id}</td>
                  <td className={styles.cell}>{client.name} {client.lastName}</td>
                  <td className={styles.cell}>{client.email}</td>
                  <td className={styles.cell}>{client.phone}</td>
                  <td className={styles.cell}>{client.address}</td>
                  <td className={styles.notesCell}>{client.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      
    );
}