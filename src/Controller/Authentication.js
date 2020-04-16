import react ,{Component}from "react"
import { resolve } from "dns";
import { reject } from "q";
class Authentication extends Component {
   constructor(props){
      super(props);

   }
   storedUser(user){
       localStorage.setItem('user',user);
   }
   Login(e){
    
   return new Promise((resolve,reject)=>{
    var data = new FormData(e.target);
    data={"email":data.get('email'),"password":data.get("password")}
    data = JSON.stringify(data);
    console.log(data)
    fetch("https://rentappbackend20200409152311.azurewebsites.net/Auth/apiUser/Login",{method:"POST",
               body: data,
               headers:{
                   "Content-Type":"application/json"}
     }).then(response=> response.json()).then(data=>{
         resolve(data);


     }).catch(err=>{
         reject(err);

     })





   })

   }




}
export default Authentication;