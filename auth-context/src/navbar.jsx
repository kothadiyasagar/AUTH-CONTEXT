import React, { useContext,useState } from "react";
import { AuthContext } from "./Context/AuthContexProvider";

const Navbar =()=>{
 const {isAuth,token ,toggle, handleLogin}=useContext(AuthContext)
 const [username, setUsername] = useState("");
  const handl =(item)=>{
      toggle(item)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(username);
  };
    return(
      <>
      <div
      style={{color:"white",
      backgroundColor:"black",
      height:"70px",
      display:"flex",
    justifyContent:"space-between",
    padding:"10PX"}}>
         <div style={{ display:"flex"}}>
             <h3 style={{margin:"20px"}}>Home</h3>
             <h3 style={{margin:"20px"}}>About</h3>
             <h3 style={{margin:"20px"}}>Product</h3>
         </div>
         <div>
             <button onClick={()=>{handl(!isAuth)}} style={{backgroundColor:"black",
            color:"white"}}>{isAuth ? "LOGOUT":"LOGIN"}</button>
         </div>
      </div>
      <div style={{margin:"5% 15% "}}>
          { isAuth ? (<form onSubmit={onSubmit}>
          <h3>Login</h3>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="name"
        
      />
      <div>
        <input type="submit" value="SUBMIT" />
      </div>
          </form>):("")}
      </div>
      </>  
    )
}
export default Navbar