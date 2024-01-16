
function fetchData() {
    return new Promise((resolve, reject) => {
     
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
      
        resolve(data);
       
      }, 2000); 
    });
  }
  

  function processData(data) {
    return new Promise((resolve, reject) => {
     
      setTimeout(() => {
        data.modifiedMessage = "Data processed successfully!";
        
        resolve(data);
       
      }, 2000); 
    });
  }
  
 
  console.log("Start");
  
  fetchData()
    .then((result) => {
   
      console.log(result.message);
      
      return processData(result);
    })
    .then((processedData) => {
   
      console.log(processedData.modifiedMessage);
    })
    .catch((error) => {
     
      console.error(error.message);
    })
    .finally(() => {
      
      console.log("Complete");
    });
  
  console.log("End");
  