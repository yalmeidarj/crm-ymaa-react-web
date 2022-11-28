import { useState, useEffect } from 'react'
import  Service  from './Service';
import styles from '../styles/ServiceTable.module.css'
import AddServiceButton from './AddServiceButton';
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
    <div className={styles.wrapper}>
      <div className={styles.actionsBar}>
        <input className={styles.searchBar} type="text" id="myInput" onChange={e=>setQuery(e.target.value.toLowerCase())} placeholder="Procurar Serviço..."></input>
        <AddServiceButton/ >
      </div>

      <table className={styles.table} id="table">
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeader}>
                <th className={styles.cell} >id</th>
                <th className={styles.cell} >appointmentDate</th>
                <th className={styles.cell} >value</th>
                <th className={styles.cell} >payType</th>
                <th className={styles.cell} >serviceAddress</th>
                <th className={styles.cell} >isPaid?</th>
                <th className={styles.cell} >description</th>
                <th className={styles.cell} >serviceClientId</th>
            </tr>
        </thead>
        <tbody className={styles.list}>

          {service.filter(service =>
          {
              return service.serviceAddress.toLowerCase().includes(query) ||
              service.payType.toLowerCase().includes(query) ||
              service.isPaid.toLowerCase().includes(query) ||
              service.serviceClientId.toString().includes(query) ||
              service.value.toString().includes(query) ||
              service.id.toString().includes(query) ||
              service.description.toLowerCase().includes(query)
          }
          ).map(createService)}
        </tbody>
      </table>
    </div>
  )    
}

