import React, { useState } from 'react';
import styles from '../styles/ClientForm.module.css'
import { BsArrowCounterclockwise } from "react-icons/bs";

export default function ClientForm(props) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:4343/clients', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                lastName: lastName,
                phone: phone,
                email: email,
                address: address,
                notes: notes
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((e) => setName(''))
            .then((e) => setLastName(''))
            .then((e) => setPhone(''))
            .then((e) => setEmail(''))
            .then((e) => setAddress(''))
            .then((e) => setNotes(''))
            .then((e) => setIsModalOpen(false))
            .catch(error => {
                console.error(error)
            })
    }
    // setName(" ")
    

    return (
        <>
            <button className={styles.openModalButton}onClick={() => setIsModalOpen(!isModalOpen)}>Registrar Cliente</button>
            {isModalOpen && (
                <div className={styles.wrapper}>
                    
                    <form className={styles.modalContent} onSubmit={handleSubmit}>
                        <button className={styles.backButton}onClick={() => setIsModalOpen(false)} ><BsArrowCounterclockwise/></button>
                        <label htmlFor="name" className={styles.formLabel}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.formInput} />
                        <label htmlFor="lastName" className={styles.formLabel}>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className={styles.formInput} />
                        <label htmlFor="phone" className={styles.formLabel}>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={styles.formInput} />
                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.formInput} />
                        <label htmlFor="address" className={styles.formLabel}>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className={styles.formInput} />
                        <label htmlFor="notes" className={styles.formLabel}>Notes</label>
                        <textarea
                            className={styles.textarea}
                            name="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)} />
                        
                        <button className={styles.formButton} type="submit">Registrar Cliente</button>
                    </form>
                </div>
)} </>            
  );
};
