import { Login } from '../components/Login'
import styles from '../styles/Login.module.css'
import Userfront from '@userfront/react'

Userfront.init("demo1234");

const LoginForm = Userfront.build({
  toolId: "alnkkd"
});

export default function App() {
  return (

    <LoginForm />

    // <Login></Login> 
  )
}