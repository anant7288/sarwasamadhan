import React,{useContext,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context as AuthContext } from  './context/AuthContext';




        
        
function App() {
  
  const {checkLogin} = useContext(AuthContext);
    
  useEffect(() => {
   
    checkLogin();
  },[]);
 
          
  
  
  return (
      
    <div className="App">
      
      
    </div>
     
  );
}

export default App;
