import { useEffect } from 'react'

// Components
import TopBar from './components/TopBar'
import Jumbotron from './components/Jumbotron'
import ImgCarousel from './components/ImgCarousel'
import Details from './components/Details'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

function App() {

  const title1 = 'Joshley & Richard';
  const title2 = 'J&R Wedding';

  const wedding_date = '10.10.203n'
  const wedding_date2 = 'October 10, 203n'
  const wedding_day  = 'Saturday'
  const wedding_time = '4:00 PM'

  const address = 'The Grand Willow Ballroom 123 Maple St, Springfield, IL'
  const address_coordinates = ''

  useEffect(() => {
    document.title = title1;
  }, []);

  return (

    <div class="bg-surface font-body text-on-background">
      
      {/* 1. Top Bar (Shared Component - Integrated) */}
      <TopBar title2={ title2 } />

      <main>

        {/*2. Minimal Jumbotron Section */}
        <Jumbotron title1={ title1 } wedding_date={ wedding_date } />

        {/*3. Image Carousel Section --> */}
        <ImgCarousel/>
          
        {/* 4. Wedding Details Section */}
        <Details address={ address } date={ wedding_date2 } day={ wedding_day } time={ wedding_time } />

        {/* 5. RSVP Section */}
        <RSVP date={ wedding_date2 } />

      </main>

      <Footer title={ title1 } />

    </div>
  )
}

export default App
