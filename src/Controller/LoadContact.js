import React from "react";
 class LoadContact{
   constructor(){



   }

   query(){

    var tableHistoryList=[];
    return new Promise((resolve, reject)=>{
        fetch('https://rentappbackend20200409152311.azurewebsites.net/api/apiUser', {
            method: 'GET'
         })
         .then((response) => response.json())
         .then((responseJson) => {
             var parseList = JSON.parse(responseJson)
             for(var i =0;i<parseList.length;i++){
                 tableHistoryList.push(parseList[i])
              }

              resolve( tableHistoryList)

              
             
         })
         .catch((error) => {
            console.error(error);
            resolve(false);
         });

    })
    
    

   }

}
export default LoadContact;