import React from 'react'
import Header from './components/Header'
import  AddMovie  from './components/AddMovie'
import UpdateMovie from './components/UpdateMovie'
import Home from './pages/Home'
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import { useState, useEffect} from 'react';


 const App = () => {
  const[isLoggedIn,setLoggedIn] = useState(false);

  useEffect(() =>{
    const userToken = localStorage.getItem('userToken');
    if(userToken){
      setLoggedIn(true);
    }
  },[]);


  return (
    // <div className='container'
   
    // >
    //   <MovieList/>
    //   <MovieCard/>
    //   <AddMovie/>
    //   <UpdateMovie/>
        
    // </div>
    <div className='app'>
    <BrowserRouter>
      <Header/>
      <div className='container'>
          <Routes>
          {/* <Route path='/movies' Component={MovieList}></Route> */}
          {/* <Route path='/movies' Component={MovieCard}></Route> */}
          <Route path='/movies' Component={Home}></Route>
          <Route path="*" element={<Navigate to="/movies" replace />} />
          <Route path='/addmovie' Component={AddMovie}></Route>
          
          <Route path='/update/:id' Component={UpdateMovie}></Route>
          </Routes>
      </div>
     
     {/* <Footer/> */}
     </BrowserRouter>
      
    </div>
  )
}
export default App