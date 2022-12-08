import { GetServerSideProps } from 'next';
import { useState } from 'react';
import ServicesTable from '../components/ServicesTable';
import ClientsTable from '../components/ClientsTable';


export default function t(props) {
  const [tableChoice, setTableChoice] = useState('clients');
  const handleTableChoiceChange = event => {
    setTableChoice(event.target.value);
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="tableChoice"
          value="clients"
          checked={tableChoice === 'clients'}
          onChange={handleTableChoiceChange}
        />
        {ClientsTable}
      </label>
      <label>
        <input
          type="radio"
          name="tableChoice"
          value="services"
          checked={tableChoice === 'services'}
          onChange={handleTableChoiceChange}
        />
        {ServicesTable}
      </label>
      {tableChoice === 'clients' && <ClientsTable clients={props.clients} />}
      {tableChoice === 'services' && <ServicesTable services={props.services} />}
    </div>
  );
}
export const getServerSideProps:GetServerSideProps = async () => {
  const response = await fetch('http://127.0.0.1:4343/services')
  const servicesResponse = await response.json()
  const res = await fetch('http://127.0.0.1:4343/clients')
  const clientsResponse = await res.json()  

  return {
    props: {
      services: servicesResponse.services,
      clients: clientsResponse.clients
      
    }
  }
}