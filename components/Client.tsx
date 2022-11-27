import { GetServerSideProps } from "next"
import { servicesVersion } from "typescript"

export default function Client(props){
    return (
        <>
            <tr>
                <td key={props.id} >{props.id}</td>
                <td key={props.id} >{props.lastName}</td>
                <td key={props.id} >{props.name}</td>
                <td key={props.id} >{props.phone}</td>
                <td key={props.id} >{props.email}</td>
                <td key={props.id} >{props.address}</td>
                <td key={props.id} >{props.notes}</td>
            </tr>
        </>
    )
}
