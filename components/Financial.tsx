import axios from "axios";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import styles from '../styles/Financial.module.css';

interface TableProps {
  props: {
    props: {
      services: {},
      clients: {}
    }
  }
}

export default function Financial( props ) {
//   useEffect(() => { 
//       props
//   });
  
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(10);

  // const handlePrevPage = (prevPage: number) => {
  //   setPage((prevPage) => prevPage - 1);
  // };

  // const handleNextPage = (nextPage: number) => {
  //   console.log(nextPage);
  //   setPage((nextPage) => nextPage + 1);
  // };

  return (
    <>
      <div className={styles.wrapper}>  
        <div className={styles.container}>
            <div className={styles.cardHeader}>
                <p className={styles.headerValueUp}>56228,421.67 <span className={styles.headerArrowUp}> &#x2BAD;</span></p>
                <p>
                <span className="#">Closed: March 15, 7:59 PM EDT</span>
                <span className={styles.lossGain}>+2.96 (1.58%)</span>
                
                </p>
            </div>
            <div className={styles.cardSmall}>
                <p className={styles.name}>American Funds AMCAP Fund® Class A</p>
                <p><span>AMCPX:US</span> <span className={styles.smallText}> NASDAQ GM </span></p>
                <p>
                <span className="big-value-up">31.5300</span>
                <span className="xsmall-text">USD</span>
                <span className="loss-gain">+2.96 (1.58%)</span>
                <span className="arrow-up"> &#x2BAD;</span>
                </p>
            </div>
            <div className={styles.cardSmall}>
                <p className="name">American Funds AMCAP Fund® Class A</p>
                <p>MUTF: AMCPX</p>
                <p>
                <span className="big-value-up">188.66</span>
                <span>USD</span>
                <span className="loss-gain">+2.96 (1.58%)</span>
                <span className="arrow-up"> &#x2BAD;</span>
                </p>
            </div>
            <div className="card-small">
                <p className="name">American Funds AMCAP Fund® Class A</p>
                <p>MUTF: AMCPX</p>
                <p>
                <span className="big-value-down">188.66</span>
                <span>USD</span>
                <span className="loss-gain">+2.9601 (1.58%)</span>
                <span className="arrow-down"> &#x2BAF;</span>
                </p>
            </div>
            <div className="card-small">
                <p className="name">American Funds AMCAP Fund® Class A</p>
                <p>MUTF: AMCPX</p>
                <p>
                <span className="big-value-up">188.66</span>
                <span>USD</span>
                <span className="loss-gain">+2.96 (1.58%)</span>
                <span className="arrow-up"> &#x2BAD;</span>
                </p>
            </div>
            <div className="card-small">
                <p className="name">American Funds AMCAP Fund® Class A</p>
                <p>MUTF: AMCPX</p>
                <p>
                <span className="big-value-up">188.66</span>
                <span>USD</span>
                <span className="loss-gain">+2.96 (1.58%)</span>
                <span className="arrow-up"> &#x2BAD;</span>
                </p>
            </div>
            <div className="card-small">
                <p className="name">American Funds AMCAP Fund® Class A</p>
                <p>MUTF: AMCPX</p>
                <p>
                <span className="big-value-up">188.66</span>
                <span>USD</span>
                <span className="loss-gain">+2.96 (1.58%)</span>
                <span className="arrow-up"> &#x2BAD;</span>
                </p>
            </div>
            <div className="card-small">
                <p className="name">American Funds AMCAP Fund® Class A</p>
                <p>MUTF: AMCPX</p>
                <p>
                <span className="big-value-up">188.66</span>
                <span>USD</span>
                <span className="loss-gain">+2.96 (1.58%)</span>
                <span className="arrow-up"> &#x2BAD;</span>
                </p>
            </div>
            <div className="card-small">
                <div className="icon-medium">
                <i className="fas fa-plus fa-3x"></i>
                </div>
            </div>

        </div>
    </div>
      </>
  )
}
// export const getServerSideProps:GetServerSideProps = async () => {
//   const res = await fetch('http://127.0.0.1:4343/services')
//   const servicesResponse = await res.json()
//   const response = await fetch('http://127.0.0.1:4343/clients')
//   const clientsResponse = await response.json()  


//   return {
//     props: {
//       services: servicesResponse.services,
//       clients: clientsResponse.clients
      
//     }
//   }
// }