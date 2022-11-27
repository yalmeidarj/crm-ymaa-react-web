import { GetServerSideProps } from "next"
import { servicesVersion } from "typescript"

export default function Service(props){
    return (
        <>            
            <tr>
                <td className="listItem" key={props.id}>{props.id}</td>
                <td className="listItem" >{props.appointmentDate}</td>
                <td className="listItem" >{props.value}</td>
                <td className="listItem" >{props.payType}</td>
                <td className="listItem" >{props.serviceAddress}</td>
                <td className="listItem" >{props.isPaid}</td>
                <td className="listItem" >{props.description}</td>
                <td className="listItem" >{props.serviceClientId}</td>
            </tr>
        </>
    )
}

