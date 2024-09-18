import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TechNologies from './components/pages/TechNologies';
import Start from './components/pages/Start';
import Careers from './components/pages/Careers';
import Work from './components/pages/Work';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
const App = ()=>
  {
return(
    <>
       <BrowserRouter >
                 <Navbar/>
       <Routes >
          <Route path="/Technologies" element={<TechNologies/>}></Route>
          <Route path='/Start' element={<Start/>}></Route>     
          <Route path='/Careers' element={<Careers/>}></Route>          
          <Route path='/work' element={<Work/>}></Route>      
          <Route path='/about' element={<About/>}></Route>      
          <Route path='/contact' element={<Contact/>}></Route>      
       </Routes>
       <Footer/>
       </BrowserRouter>
    </>
)
}
export default App;