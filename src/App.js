import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import Display from "./adminsitration/Display"
import Addmember from './adminsitration/Addmember';
import EditData from './adminsitration/EditData'


function App() {

  //   useEffect(function(){

//     //window.open('https://schema.getpostman.com/json/collection/v2.0.0/collection.json')
//     window.open('https://homexp.in/service/emicalculator')
//   },[])
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route  element={<Display/>} path="/display" />
      <Route  element={<Addmember/>} path="/addmember" />
      <Route  element={<EditData />} path="/editdata" />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
