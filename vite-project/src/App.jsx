
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Carousel from './components/Carousel/Carousel'
import Card from './components/Card/Card'



function App() {
  

  return(
    <div className='App'>
      <div>
      <Header/>
      <div>
      <Carousel/>
      </div>
      <div>
      <Card />
      <Card/>
      </div>
      <Footer/>
      </div>

    </div>
   
      
    
    
  )
}

export default App
