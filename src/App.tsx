import { useState} from 'react';
import './App.css'
import About from "./about";


const data: string[] =["a","b","c"]
function App() {
  //const [count, setCount] = useState(0)
  const [state, setState] = useState<string>("test");

  return(
    <div className='main'>
      <h1>hello react</h1>
      <h1>{state}</h1>
      <About/>
      {
        data.map((item, idx) => {
          if(item === "a")
          return <h1 key={idx}>AAA</h1>;
          else
          return <h4 key={idx}>{item}</h4>;
        })
      }
    <div className='state'>
      {state}
    </div>
    <button className='button' onClick={() => {
      setState("Halo")
    }}>hi</button>
    </div>
    
  )
  }
export default App
