import Component2 from "./componets/Component2"
import Componet1 from "./componets/Componet1"
import Navbar from "./componets/Navbar"
import ComponetBig from "./containers/ComponetBig"
import { StyleG } from "./styles/Style"



function App (){
  return(
    <StyleG>
     <Navbar/> 
     <Componet1/>
     <ComponetBig/>
    </StyleG>
  )
} 
export default App