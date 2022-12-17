import './App.css';
import Buttons from './Buttons';

function App() {
  return (
    <div className="App">

      <Buttons />

    </div>
  );
}

export default App;


/*import React , {useState}from 'react'

const Input =({label ,id ,handelChange , name ,type}) =>(
    <>
    <label htmlFor={'id'}>{label}</label>
    <input type={type ||'text'} id={id} name={name|| id} onChange={handelChange}/>
    <br />
        </>
)

 function Forms() {
    const [name , setName ] = useState('' ) ;
    const [Weight , setWeight ] = useState();

    function handelChange(e){
        setName(e.target.value) ;
    }

    function handelChangeWeight(e){
        setWeight(e.target.value) ;
    }


  return (
   <>
   <p> Name : {'name'}</p>
   <p>Weight : {'Weight'}</p>
   <input label="Name : " id='name' handelChange={handelChange}/>
   <input label="Weight : " id='name' handelChangeWeight={handelChangeWeight}/>
   </>
  )
}
export default Forms*/


