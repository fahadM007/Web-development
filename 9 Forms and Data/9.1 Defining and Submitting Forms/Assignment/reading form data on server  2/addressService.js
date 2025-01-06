let storedData = {
  
};

const getStoredData = () => {
  return storedData;
}


const setStoredData = (body) => 
{
  storedData = body;
}


export {getStoredData,setStoredData}