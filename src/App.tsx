import './index.css'
import Hello from './components/test'
import Navbar from './components/sections/Navbar'
import MenuSection from './components/sections/MenuSection'
import EngagementSection from './components/sections/EngagementSection'
import SocialProofSection from './components/sections/SocialProofSection'
import CallToActionSection from './components/sections/CallToActionSection'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="bg-amber-50 min-h-screen" id="top">
      <Navbar/>
      <main className="px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-100 text-amber-900 rounded-lg shadow-md p-4 sm:p-6 m-2 sm:m-4 lg:m-6">
          <div id="stories">
            <Hello/>
          </div>
          <div id="coffee">
            <MenuSection/>
          </div>
          <div id="equipment">
            <EngagementSection/>
          </div>
          <div id="store">
            <SocialProofSection/>
            <CallToActionSection/>
            <Footer/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
