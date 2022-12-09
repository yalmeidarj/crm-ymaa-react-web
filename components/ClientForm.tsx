import React, { useState } from 'react';
import styles from '../styles/ClientForm.module.css'
import { BsArrowCounterclockwise } from "react-icons/bs";


export default function ClientForm(props) {
  const [name, setName] = useState(props.name);
  const [lastName, setLastName] = useState(props.lastName);
  const [phone, setPhone] = useState(props.phone);
  const [email, setEmail] = useState(props.email);
  const [address, setAddress] = useState(props.address);
  const [notes, setNotes] = useState(props.notes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFormTxt, setOpenFormTxt] = useState(props.formButtonTxt);


    
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
            {!isModalOpen && (
                <button className={styles.openModalButton} onClick={() => setIsModalOpen(!isModalOpen)}>{openFormTxt}</button>)}
            {isModalOpen && (
                <div className={styles.wrapper}>
                    
                    <form className={styles.modalContent} onSubmit={handleSubmit}>
                        <button className={styles.backButton}onClick={() => setIsModalOpen(false)} ><BsArrowCounterclockwise/></button>
                        <label htmlFor="name" className={styles.formLabel}>Nome</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.formInput} />
                        <label htmlFor="lastName" className={styles.formLabel}>Sobrenome</label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className={styles.formInput} />
                        <label htmlFor="phone" className={styles.formLabel}>Telefone</label>
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
                        <label htmlFor="address" className={styles.formLabel}>Endereço</label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className={styles.formInput} />
                        <label htmlFor="notes" className={styles.formLabel}>Outros</label>
                        <textarea
                            className={styles.textarea}
                            name="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)} />
                        <div className={styles.formButton}>
                            <button className={styles.serviceFormButton} type="submit">{openFormTxt}</button>
                        </div>
                    </form>
                </div>
)} </>            
  );
};
