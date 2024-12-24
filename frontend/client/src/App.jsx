import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/pages/HomePage.jsx'
import About from './pages/misleneous/About.jsx'
import ConcertHome from './pages/misleneous/ConsertHome.jsx'
import City from './pages/misleneous/City.jsx'
import Trending from './pages/misleneous/Trending.jsx'
import SignUp from './pages/Authentication/sign_up/SignUp.jsx'
import SignIn from './pages/Authentication/sign_in/SignIn.jsx'


function App() {
  return (
      <div className='App w-screen h-screen bg-gray-200'>
        <BrowserRouter>
            {/* <Header/  > */}
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='about' element={<About />}></Route>
                
                <Route path="signin" element={<SignIn />}></Route>
                <Route path="register" element={<SignUp />} ></Route>
              

                <Route path="concerts">
                  <Route index element={<ConcertHome />} />
                  <Route path="m/:k?/:city" element={<City />} />
                  <Route path="trending" element={<Trending />} />
                </Route>
            </Routes>
           
        </BrowserRouter> 
      </div>
  )
}
export default App
