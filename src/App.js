import { useEffect } from "react";
import Home from "./Component/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])

  return (
    <div>
      <Home/>
      
    </div>
  );
}

export default App;
