import { GetServerSideProps } from "next"
import { Service } from '../components/Service'

function createService(service) {
    return (
        <Service
            key={service.id}
            id={ service.id }
            appointmentDate={ service.appointmentDate }
            value={ service.value }
            payType={ service.payType }
            serviceAddress={ service.serviceAddress }
            description={ service.description }
            serviceClientId={ service.serviceClientId }
        />
    )
}
export function Table(props)  {
    return (
        <table>
            {props}           
        </table>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://127.0.0.1:4343/services')
    const data = await res.json();

    return {
        props: {
            data
        }
    };
};