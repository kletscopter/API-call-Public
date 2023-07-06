import { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";

/*fetch("https://catfact.ninja/fact")
.then((res) => res.json())
.then((data) => {
  console.log(data);
})*/

function App(){
  const [name, setName] = useState("")
  //const [returnName, setReturnName] = useState("")
  const [age, setAge] = useState("")
  const fetchData = () => {
    Axios.get("https://api.agify.io/?name=" + name).then ((res) => { //also possible to use backticks `.....´ -> use of variables inside is possible
      console.log(res.data)
      //setReturnName(res.data.name)
      setAge(res.data.age)
    })
  }
  const changeText = (event) => {
    setName(event.target.value)
  }


  return (
    
     <div className='App'>
      <input placeholder="Ex. Pedro.." onChange={changeText}/>
      <button onClick={fetchData}>Predict Age</button>

      <h1> Predicted Age: {age}</h1>
     </div>
  )

}
export default App;
