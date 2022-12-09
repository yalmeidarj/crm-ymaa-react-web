// import { useState, useEffect } from 'react'
// import  Service  from './Service';
// import styles from '../styles/ServiceTable.module.css'
// import AddServiceButton from './AddServiceButton';
// interface serviceElement {
//     services: {
//       id: number;
//       appointmentDate: Date;
//       value: number;
//       payType: string;-
//       serviceAddress: string;
//       isPaid: string;
//       description: string;
//       serviceClientId: number;
//     }
// }

// interface ServicesProps {
//   data: serviceElement
// }

// function createService(service){
//     return (
//         <Service
//             key={service.id}
//             id={service.id}
//             appointmentDate={service.appointmentDate}
//             value={service.value}
//             payType={service.payType}
//             serviceAddress={service.serviceAddress }
//             isPaid={service.isPaid}
//             description={service.description}
//             serviceClientId={service.serviceClientId}
//         />
//     )
// }

// export default function ServicesTable( data:ServicesProps ) {
//   useEffect(() => {
//     data
//   });
//   const service = data.data.services;
//   const [query, setQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [search, setSearch] = useState('')

//   const lastRowIndex = currentPage * rowsPerPage;
//   const firstRowIndex = lastRowIndex - rowsPerPage;
//   const pageOnDisplay = service.slice(firstRowIndex, lastRowIndex);
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.actionsBar}>
//         <input className={styles.searchBar} type="text" id="myInput" onChange={e=>setQuery(e.target.value.toLowerCase())} placeholder="Procurar Serviço..."></input>
//         <AddServiceButton/ >
//       </div>

//       <table className={styles.table} id="table">
//         <thead className={styles.tableHead}>
//           <tr className={styles.tableHeader}>
//                 <th className={styles.cell} >id</th>
//                 <th className={styles.cell} >appointmentDate</th>
//                 <th className={styles.cell} >value</th>
//                 <th className={styles.cell} >payType</th>
//                 <th className={styles.cell} >serviceAddress</th>
//                 <th className={styles.cell} >isPaid?</th>
//                 <th className={styles.cell} >description</th>
//                 <th className={styles.cell} >serviceClientId</th>
//             </tr>
//         </thead>
//         <tbody className={styles.list}>

//           {pageOnDisplay.filter(service =>
//           {
//               return service.serviceAddress.toLowerCase().includes(query) ||
//               service.payType.toLowerCase().includes(query) ||
//               service.isPaid.toLowerCase().includes(query) ||
//               service.serviceClientId.toString().includes(query) ||
//               service.value.toString().includes(query) ||
//               service.id.toString().includes(query) ||
//               service.description.toLowerCase().includes(query)
//           }
//           ).map(createService)}
//         </tbody>
//       </table>
//     </div>
//   )
// }
import styles from '../styles/ServicesTable.module.css'
import { useState } from 'react';
import ServiceForm from './ServiceForm';
export default function ServicesTable(props) {
  const [services, setServices] = useState(props.services);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    const filteredServices = props.services.filter(service =>
      service.id.toString().includes(event.target.value) ||
      service.appointmentDate.includes(event.target.value) ||
      service.value.toString().includes(event.target.value) ||
      service.payType.toLowerCase().includes(event.target.value) ||
      service.serviceAddress.toLowerCase().includes(event.target.value.toLowerCase()) ||
      service.isPaid.toLowerCase().includes(event.target.value.toLowerCase()) ||
      service.description.toLowerCase().includes(event.target.value.toLowerCase()) ||
      service.serviceClientId.toString().includes(event.target.value.toLowerCase()) 
    );
    setServices(filteredServices);
  };


  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(services.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {/* <div className={styles.clientForm}>
        <ServiceForm />
      </div>        */}
      <div className={styles.wrapper}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Buscar Serviço"
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
            <tr>
              <th className={styles.tableHeader}>ID Serviço</th>
              <th className={styles.tableHeader}>Id do Cliente</th>
              <th className={styles.tableHeader}>Data e Hora</th>
              <th className={styles.tableHeader}>Tipo de pagamento</th>
              <th className={styles.tableHeader}>Preço</th>
              <th className={styles.tableHeader}>Endereço do serviço</th>
              {/* <th className={styles.tableHeader}>isPaid</th> */}
              <th className={styles.tableHeader}>description</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(service => (
              <tr key={service.id}>
                <td className={styles.cell} >{service.id}</td>
                <td className={styles.cell} >{service.serviceClientId}</td>
                <td className={styles.cell} >{service.appointmentDate}</td>
                <td className={styles.cell} >{service.payType}</td>
                <td className={styles.cell} >{service.value}</td>
                <td className={styles.cell} >{service.serviceAddress}</td>
                {/* <td className={styles.cell} >{service.isPaid}</td> */}
                <td className={styles.cell} >{service.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );  

}
