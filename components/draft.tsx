// interface HomeProps {

// interface Service {
//     id:              number;
//     appointmentDate: Date;
//     value:           number;
//     payType:         string;
//     serviceAddress:  string;
//     isPaid:          string;
//     description:     null;
//     serviceClientId: number;
// }

// interface HomeProps {
//   services: {
//     id: number;
//     appointmentDate: Date;
//     value: number;
//     payType: string;
//     serviceAddress: string;
//     isPaid: string;
//     description: null;
//     serviceClientId: number;
//   }
// }


//   const column = [
//     {heading: 'Serviço ID'},
//     {heading: 'Descrição serviço'},
//     {heading: 'Valor'},
//     {heading: 'Cliente ID'},
//     {heading: 'Nome'},
//     {heading: 'Endereço'},
//     {heading: 'PGTO Concluído?'},
//     {heading: 'Comentários'},
//   ]



// service: {
//   id: number,
//   appointmentDate: Date,
//   value: number,
//   payType: string,
//   serviceAddress: string,
//   isPaid: string,
//   description: null,
//   serviceClientId: number,
//   }) {




        {/* <table>
          <thead>
            <tr>
              <td>Serviço ID</td>
              <td>Descrição serviço</td>
              <td>Valor</td>
              <td>Cliente ID</td>
              <td>Nome</td>
              <td>Endereço</td>
              <td>PGTO Concluído?</td>
              <td>Comentários</td>
              props.services.keys(data).map(key => data[key])
              {props.services.map((item, index) => <TableHeadItem item={ item} />)}
            </tr>
          </thead>
          <thead>
            <tr>
              <td>Serviço ID</td>
              <td>Descrição serviço</td>
              <td>Valor</td>
              <td>Cliente ID</td>
              <td>Nome</td>
              <td>Endereço</td>
              <td>PGTO Concluído?</td>
              <td>Comentários</td>  
            </tr>
          </thead>
        </table> */}
        {/*<tr>
          <td>props.services.id</td>
          <td>props.services.appointmentDate</td>
          <td>props.services.value</td>
          <td>props.services.payType</td>
          <td>props.services.serviceAddress</td>
          <td>props.services.isPaid</td>   
          <td>props.services.description</td>
          <td>props.services.serviceClientId</td>          
          <td>{props.services.id}</td>
          <td>{props.services.appointmentDate}</td>
          <td>{props.services.value}</td>
          <td>{props.services.payType}</td>
          <td>{props.services.serviceAddress}</td>
          <td>{props.services.isPaid}</td>   
          <td>{props.services.description}</td>
          <td>{props.services.serviceClientId}</td> 
        </tr>

      </table> */}




  // const services = props;
//   return (
//   fetch('http://127.0.0.1:4343/services')
//     .then((response) => response.text())
//     .then((data) => {
//       return {
//         props: {
//           services: Object.keys(data.services).forEach(function(key, index) {
//             return <div>{ data.services[key] }</div>
//           })
//         }
//       }
//     })
    
//   )
  
// }


                    <td key={index}>{item.id}</td>
                    <td key={index}>{item.appointmentDate}</td>
                    <td key={index}>{item.value}</td>
                    <td key={index}>{item.payType}</td>
                    <td key={index}>{item.serviceAddress}</td>
                    <td key={index}>{item.isPaid}</td>
                    <td key={index}>{item.description}</td>
                    <td key={index}>{item.serviceClientId}</td>  