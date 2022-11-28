import { useState, useEffect } from 'react'
import Client from './Client';
import Pagination from './Pagination';
import styles from '../styles/ClientTable.module.css'
import AddServiceButton from './AddServiceButton';
interface clientElement {
    clients: {
        id:       number;
        name:     string;
        lastName: string;
        phone:    string;
        email:    string;
        address:  string;
        notes:    string;
    }    
}

interface ClientsProps {
  data: clientElement
}

function createClient(client){    
    return (
        <Client
            key={client.phone}
            id={client.id}
            name={client.name}
            lastName={client.lastName}
            phone={client.phone}
            email={client.email }
            address={client.address}
            notes={client.notes}
        />
    )
}

export default function ClientsTable( data: ClientsProps ) {
  useEffect(() => { 
    data
  });

  const client = data.data.clients;
  const [query, setQuery] = useState("");
  return (
    <div className={styles.wrapper}>
      <div className={styles.actionsBar}>
        <input className={styles.searchBar} type="text" id="myInput" onChange={e=>setQuery(e.target.value.toLowerCase())} placeholder="Procurar Cliente..."></input>
        <AddServiceButton/ >
      </div>      
      <table className={styles.table} id="table">
        <thead className={styles.tableHead}>
            <tr className={styles.tableHeader}>
                <th className={styles.cell} >id</th>
                <th className={styles.cell} >name</th>
                <th className={styles.cell} >lastName</th>
                <th className={styles.cell} >phone</th>
                <th className={styles.cell} >email</th>
                <th className={styles.cell} >address</th>
                <th className={styles.cell} >notes</th>
            </tr>
        </thead>
        <tbody className="list">
           {/* <Pagination
            totalPages={totalPages}
            currentPage={page}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />             */}
          {client.filter(client => 
            {
                return client.name.toLowerCase().includes(query) ||
                client.lastName.toLowerCase().includes(query) ||
                client.phone.toLowerCase().includes(query) ||
                client.id.toString().includes(query) ||
                client.address.toLowerCase().includes(query) ||
                client.email.toLowerCase().includes(query) ||
                client.notes.toLowerCase().includes(query)
              } 

            ).map(createClient)}
        </tbody>   
      </table>
      </div>
  )
        

}

