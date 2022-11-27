// components/Layout.js
import Head from 'next/head'
import { MyNav } from './MyNav';


export function Layout({ children }) {
    
    return (
        <div>
        <Head>
        <title>Ymaa</title> 
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossOrigin="anonymous"
/>
        
        </Head>
        <MyNav />
        <section >
            {children}
        </section>    
        </div>
    );
 
}