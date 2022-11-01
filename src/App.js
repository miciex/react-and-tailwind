import './App.css'
import MainPage from './pages/mainPage/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './pages/errorPage/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path='/' />
        <Route element={<MainPage />} path='/contact' />
        <Route element={<MainPage />} path='/projects' />
        <Route element={<MainPage />} path='/story' />
        <Route element={<MainPage />} path='/settings' />
        <Route element={<ErrorPage />} path='*' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
