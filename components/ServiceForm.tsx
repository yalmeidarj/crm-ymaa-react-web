import React, { useState } from 'react';
import styles from '../styles/ClientForm.module.css'
import { BsArrowCounterclockwise } from "react-icons/bs";

export default function ServiceForm() {
    const [appointmentDate, setAppointmentDate] = useState('');
    const [value, setValue] = useState('');
    const [payType, setPayType] = useState('');
    const [serviceAddress, setServiceAddress] = useState('');
    const [isPaid, setIsPaid] = useState('');
    const [description, setDescription] = useState('');
    const [serviceClientId, setServiceClientId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch('http://127.0.0.1:4343/services', {
            method: 'POST',
            body: JSON.stringify({
                appointmentDate: appointmentDate,
                value: value,
                payType: payType,
                serviceAddress: serviceAddress,
                isPaid: isPaid,
                description: description,
                serviceClientId: serviceClientId
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
            <button className={styles.openModalButton} onClick={() => setIsModalOpen(!isModalOpen)}>Registrar Serviço</button>
            {isModalOpen && (
                <div className={styles.wrapper}>
                    <form  className={styles.modalContent} onSubmit={handleSubmit}>
                        <button className={styles.backButton}onClick={() => setIsModalOpen(false)} ><BsArrowCounterclockwise/></button>
                        <label className={styles.formLabel} htmlFor="appointmentDate">Appointment Date</label>
                        <input
                            className={styles.formInput}
                            type="datetime-local"
                            name="appointmentDate"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                        />
                        <label className={styles.formLabel} htmlFor="value">Value</label>
                        <input
                            className={styles.formInput}
                            type="number"
                            name="value"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <label className={styles.formLabel} htmlFor="serviceAddress">Service Address</label>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="serviceAddress"
                            value={serviceAddress}
                            onChange={(e) => setServiceAddress(e.target.value)}
                        />
                        <label className={styles.formLabel} htmlFor="payType">Payment Type</label>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="payType"
                            value={payType}
                            onChange={(e) => setPayType(e.target.value)}
                        />

                        <label className={styles.formLabel} htmlFor="isPaid">Is Paid</label>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="isPaid"
                            value={isPaid}
                            onChange={(e) => setIsPaid(e.target.value)}
                        />
                        <label className={styles.formLabel} htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <label className={styles.formLabel} htmlFor="serviceClientId">Service Client ID</label>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="serviceClientId"
                            value={serviceClientId}
                            onChange={(e) => setServiceClientId(e.target.value)}
                        />
                        <button type="submit">Create Service</button>
                    </form>
                </div>   
)} </>            
  );
};
