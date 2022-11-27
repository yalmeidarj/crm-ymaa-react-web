import { useState, useEffect } from 'react'
import Client from './Client';
import Pagination from './Pagination';

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
    <div>
      <input type="text" id="myInput" onChange={e=>setQuery(e.target.value.toLowerCase())} placeholder="Procurar..."></input>  
      <table id="myTable">
        <thead>
            <tr className="header">
                <th>id</th>
                <th>name</th>
                <th>lastName</th>
                <th>phone</th>
                <th>email</th>
                <th>address</th>
                <th>notes</th>
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

