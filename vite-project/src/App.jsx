
import './App.css'

import { Routes, Route, Outlet, Link, useParams, BrowserRouter} from "react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './views/Home/Home'




 function App() {
  

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          

        </Route>

      </Routes>
    </BrowserRouter>
    
   
      
    
    
  )
}

export default App
