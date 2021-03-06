import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from './sign-in/sign-in.component'


import { Routes, Route } from 'react-router-dom'

import './categories.style.scss';

const Shop = () =>{
  return(
    <div>
      <h1>
        This Is Shop
      </h1>
    </div>
  )
}

const App = () =>{
  return(
    <Routes>
      <Route path ='/' element={<Navigation/>}> 
        <Route index element= { <Home /> } />
        <Route path='/shop' element= { <Shop /> } />
        <Route path='/sign-in' element={<SignIn/> } />
      </Route>

    </Routes>
  )
}

export default App;
