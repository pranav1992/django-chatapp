import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/pages/HomePage.jsx'
import SignUp from './pages/Authentication/sign_up/SignUp.jsx'
import SignIn from './pages/Authentication/sign_in/SignIn.jsx'
import SideBar from './components/SideBar.jsx'

function App() {
  return (
      <div className='App w-screen h-screen bg-gray-200'>
        <BrowserRouter>
            <SideBar/>
            <Routes>
                <Route path=":chatroom?" index element={<HomePage />} />
                <Route path="signin" element={<SignIn />}></Route>
                <Route path="register" element={<SignUp />} ></Route>
            </Routes>
        </BrowserRouter> 
      </div>
  )
}
export default App