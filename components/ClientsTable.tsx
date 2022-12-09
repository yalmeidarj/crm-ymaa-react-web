import { useState } from 'react';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import styles from '../styles/ServicesTable.module.css'
import ClientForm from './ClientForm';
import ServiceForm from './ServiceForm';
export default function ClientsTable(props) {
  const [clients, setClients] = useState(props.clients);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isUpdateClientFormOpen, setIsUpdateClientFormOpen] = useState(false);
  const itemsPerPage = 10;
  const [id, setId] = useState(props.id)
  const [name, setName] = useState(props.name)
  const [lastName, setLastName] = useState(props.lastName);
  const [phone, setPhone] = useState(props.phone);
  const [email, setEmail] = useState(props.email);
  const [address, setAddress] = useState(props.address);
  const [notes, setNotes] = useState(props.notes);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    const filteredClients = props.clients.filter(client =>
      client.id.toString().includes(event.target.value) ||
      client.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      client.lastName.toLowerCase().includes(event.target.value.toLowerCase()) ||
      client.phone.toString().includes(event.target.value) ||
      client.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
      client.address.toLowerCase().includes(event.target.value.toLowerCase()) ||
      client.notes.toLowerCase().includes(event.target.value.toLowerCase()) 
    );
    setClients(filteredClients);
  };
  const refreshPage = event => {
    console.log('triggered')
    window.location.reload(false);
  }
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  function handleRowClick(clientData) {
    setIsUpdateClientFormOpen(true)
    console.log(clientData)
    setId(clientData.id)
    // setServiceClientId(clientData.serviceClientId)
    setName(clientData.name)
    setLastName(clientData.lastName)
    setPhone(clientData.phone)
    setEmail(clientData.email)
    setAddress(clientData.address)
    setNotes(clientData.notes)
  }

  function TableRow(props) {
    return (
      <tr onClick={() => {
        handleRowClick(props.clientData);
        // setIsUpdateClientFormOpen(isUpdateClientFormOpen);
      }}>
        <td>{props.clientData.id}</td>
        <td>{props.clientData.name} {props.clientData.lastName}</td>
        <td>{props.clientData.email}</td>
        <td>{props.clientData.phone}</td>
        <td>{props.clientData.address}</td>
        <td>{props.clientData.notes}</td>
      </tr>
    );
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clients.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(clients.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div onSubmit={refreshPage}>
      {!isUpdateClientFormOpen && (
        <div className={styles.clientForm}>
          <ClientForm
            formButtonTxt="Registrar Cliente"
          />
        </div>)}
      <div className={styles.wrapper}>
        {!isUpdateClientFormOpen && (
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Buscar Cliente"
          value={searchTerm}
          onChange={handleSearch}
        />)}
         
        {isUpdateClientFormOpen && (
          <div className={styles.updateClientForm}>
            <button className={styles.backButton} onClick={() => setIsUpdateClientFormOpen(!isUpdateClientFormOpen)} ><BsArrowCounterclockwise /></button>
            <ClientForm
                
              formButtonTxt="Atualizar Cliente"
              name={name}
              lastName={lastName}
              phone={phone}
              email={email}
              address={address}
              notes={notes}
            />
            <ServiceForm
              className={styles.serviceExistClient}
              serviceClientId={id}
              clientNameDisplay={name + ' ' + lastName}
            />
          </div>
        )}
        {!isUpdateClientFormOpen && (
          <><div className={styles.pagination}>
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
              <tbody className={styles.tbody}>
              
                {currentItems.map(clientData => (
                  <TableRow onClick={() => {setIsUpdateClientFormOpen(isUpdateClientFormOpen);setOpenFormTxt('Atualizar') }} clientData={clientData} key={clientData.id} />
                ))}

              </tbody>
            </table></>)}
        </div>

    </div>

      
    );
}