import { useState, useEffect } from 'react'
import  Service  from './Service';

interface serviceElement {  
    services: {
      id: number;
      appointmentDate: Date;
      value: number;
      payType: string;
      serviceAddress: string;
      isPaid: string;
      description: string;
      serviceClientId: number;
    }
}

interface ServicesProps {
  data: serviceElement
}

function createService(service){    
    return (
        <Service
            key={service.id}
            id={service.id}
            appointmentDate={service.appointmentDate}
            value={service.value}
            payType={service.payType}
            serviceAddress={service.serviceAddress }
            isPaid={service.isPaid}
            description={service.description}
            serviceClientId={service.serviceClientId}
        />
    )
}

export default function ServicesTable( data:ServicesProps ) {
  useEffect(() => { 
    data
  });
  const service = data.data.services;
  const [query, setQuery] = useState("");

  return (
    <div>
      <input type="text" id="myInput" onChange={e=>setQuery(e.target.value.toLowerCase())} placeholder="Procurar..."></input>
      <table id="myTable">
        <thead>
            <tr className="header">
                <th>id</th>
                <th>appointmentDate</th>
                <th>value</th>
                <th>payType</th>
                <th>serviceAddress</th>
                <th>description</th>
                <th>serviceClientId</th>
            </tr>
        </thead>
        <tbody className="list">
          {service.filter(service =>
          {
              return service.serviceAddress.toLowerCase().includes(query) ||
              service.payType.toLowerCase().includes(query) ||
              service.isPaid.toLowerCase().includes(query) ||
              service.serviceClientId.toString().includes(query) ||
              service.value.toString().includes(query) ||
              service.description.toLowerCase().includes(query)
          }
          ).map(createService)}
        </tbody>
      </table>
    </div>
  )    
}

