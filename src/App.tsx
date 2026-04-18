import './index.css'
import Hello from './components/test'
import Navbar from './components/navbar'
import CoffeeCarousel from './components/cofffeeCarousel'

function App() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Navbar/>
      <main>
        <div className="bg-amber-100 text-amber-900 rounded-lg shadow-md p-6 m-6">
          <Hello/>
          <CoffeeCarousel/>
        </div>
      </main>
    </div>
  )
}

export default App
