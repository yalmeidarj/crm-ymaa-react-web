import { GetServerSideProps } from "next"
import { servicesVersion } from "typescript"
import styles from '../styles/ServiceTable.module.css'
export default function Service(props){
    return (
        <>            
            <tr className={styles.tableRow} >
                <td className={styles.cell} key={props.id}>{props.id}</td>
                <td className={styles.cell} >{props.appointmentDate}</td>
                <td className={styles.cell} >{props.value}</td>
                <td className={styles.cell} >{props.payType}</td>
                <td className={styles.cell} >{props.serviceAddress}</td>
                <td className={styles.cell} >{props.isPaid}</td>
                <td className={styles.cell} >{props.description}</td>
                <td className={styles.cell} >{props.serviceClientId}</td>
            </tr>
        </>
    )
}

