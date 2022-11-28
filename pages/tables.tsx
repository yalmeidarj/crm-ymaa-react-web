import axios from "axios";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import ServicesTable from "../components/ServicesTable";
import  ClientsTable  from "../components/ClientsTable";
import { api } from "../src/axios";

interface TableProps {
  props: {
    props: {
      services: {},
      clients: {}
    }
  }
}

export default function tables( props:TableProps ) {
  useEffect(() => { 
      props
  });
  
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
      <div className="App">
          <ServicesTable data={props} />  
          {/* <br></br>
          <br></br> */}
          <ClientsTable data={props} />
      </div>
    </>
  // <Login></Login> data={ dataTable} column={column}
  )
}
export const getServerSideProps:GetServerSideProps = async () => {
  const res = await fetch('http://127.0.0.1:4343/services')
  const servicesResponse = await res.json()
  const response = await fetch('http://127.0.0.1:4343/clients')
  const clientsResponse = await response.json()  
  // const [servicesResponse, clientsResponse] =  await Promise.all([
  //   api.get("/services"),
  //   api.get("/clients"),
  // ])

  return {
    props: {
      services: servicesResponse.services,
      clients: clientsResponse.clients
      
    }
  }
}