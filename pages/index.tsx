import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css'
// import 'primeflex/primeflex.css'
import styles from '../styles/Home.module.css'


export default function Home() {
 
  return (
    <div>
      <Button label="Secondary" className="p-button-raised p-button-secondary" />
      <p>Hello Home</p>
    </div>
  )
}
