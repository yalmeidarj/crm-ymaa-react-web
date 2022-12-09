import React, { useState } from 'react';
import styles from '../styles/ClientForm.module.css'
import { BsArrowCounterclockwise } from "react-icons/bs";

export default function ServiceForm(props) {
    const [appointmentDate, setAppointmentDate] = useState(props.appointmentDate);
    const [value, setValue] = useState(props.value);
    const [payType, setPayType] = useState(props.payType);
    const [serviceAddress, setServiceAddress] = useState(props.serviceAddress);
    const [isPaid, setIsPaid] = useState(props.isPaid);
    const [description, setDescription] = useState(props.description);
    const [serviceClientId, setServiceClientId] = useState(props.serviceClientId);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clientNameDisplay, setClientNameDisplay] = useState(props.clientNameDisplay);
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:4343/services', {
            method: 'POST',
            body: JSON.stringify({
                appointmentDate: appointmentDate,
                value: value,
                payType: payType,
                serviceAddress: serviceAddress,
                isPaid: isPaid,
                description: description,
                serviceClientId: 
                    serviceClientId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((e) => console.log(serviceAddress))
            .then((e) => setAppointmentDate(''))
            .then((e) => setValue(''))
            .then((e) => setPayType(''))
            .then((e) => setServiceAddress(''))
            .then((e) => setIsPaid(''))
            .then((e) => setDescription(''))
            .then((e) => setServiceClientId(''))
            .then((e) => setIsModalOpen(false))
            
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <>  
            {!isModalOpen && (
                <button className={styles.openModalButton} onClick={() => setIsModalOpen(!isModalOpen)}>Registrar Serviço</button>)}
            {isModalOpen && (
                <div className={styles.wrapper}>
                    <form  className={styles.modalContent} onSubmit={handleSubmit}>
                        <button className={styles.backButton}onClick={() => setIsModalOpen(false)} ><BsArrowCounterclockwise/></button>
                        <label className={styles.formLabel} htmlFor="serviceClientId">Número de ID do Cliente: <span>{clientNameDisplay}</span></label>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="serviceClientId"
                            value={serviceClientId}
                            onChange={(e) => setServiceClientId(e.target.value)}
                        />                        
                        <label className={styles.formLabel} htmlFor="appointmentDate">Data e Horário</label>
                        <input
                            className={styles.formInput}
                            type="datetime-local"
                            name="appointmentDate"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                        />
                        <label className={styles.formLabel} htmlFor="value">Preço</label>
                        <input
                            className={styles.formInput}
                            type="number"
                            name="value"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <label className={styles.formLabel} htmlFor="serviceAddress">Endereço do Serviço</label>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="serviceAddress"
                            value={serviceAddress}
                            onChange={(e) => setServiceAddress(e.target.value)}
                        />
                        <label className={styles.formLabel} htmlFor="payType">Tipo de Pagamento</label>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="payType"
                            value={payType}
                            onChange={(e) => setPayType(e.target.value)}
                        />

                        <label className={styles.formLabel} htmlFor="isPaid">já pago?</label>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="isPaid"
                            value={isPaid}
                            onChange={(e) => setIsPaid(e.target.value)}
                        />
                        <label className={styles.formLabel} htmlFor="description">Mais informações</label>
                        <textarea
                            className={styles.textarea}
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div className={styles.formButton}>
                            <button className={styles.serviceFormButton} type="submit">Criar Serviço</button>
                        </div>
                    </form>
                </div>   
)} </>            
  );
};
