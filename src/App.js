import './App.css';
import Buttons from './Buttons';
import Maps from './components/Maps';
import UsersApi from './components/UsersApi';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import { Link, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Buttons /> */}
      {/* <UsersApi /> */}
      {/* <Maps /> */}
      {/* for the routing exercise */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        </Routes>

      </ul>

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


