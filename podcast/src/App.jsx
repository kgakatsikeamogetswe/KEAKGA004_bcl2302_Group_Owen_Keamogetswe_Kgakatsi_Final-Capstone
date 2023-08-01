import LandingPage from './components/Landing page'
import Header from './components/Header'
import Preview from './components/Preview';
import {Routes, Route} from 'react-router-dom'

export default function App() {
    return(
        <>
        <Header/>
        <Routes>
        <Route path='/' element ={<LandingPage/>} />
        <Route path = 'preview-shows' element={<Preview/>} />
        </Routes>
         
        </> 
    )
}