import { GetServerSideProps } from "next"
import { servicesVersion } from "typescript"
import styles from '../styles/ClientTable.module.css'

export default function Client(props){
    return (
        <>
            <tr className={styles.tableRow} >
                <td className={styles.cell} key={props.id} >{props.id}</td>
                <td className={styles.cell} >{props.lastName}</td>
                <td className={styles.cell} >{props.name}</td>
                <td className={styles.cell} >{props.phone}</td>
                <td className={styles.cell} >{props.email}</td>
                <td className={styles.cell} >{props.address}</td>
                <td className={styles.cell} >{props.notes}</td>
            </tr>
        </>
    )
}
