const allServices = getAllServices()
async function getAllServices() {  
  const res = await fetch('http://127.0.0.1:4343/services')
  const data = await res.json();
  return data.services
};  