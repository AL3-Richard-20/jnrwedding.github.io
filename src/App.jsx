import { useEffect, useState, useRef  } from 'react'

import 'animate.css/animate.min.css';

// Components
import TopBar from './components/TopBar'
import Jumbotron from './components/Jumbotron'
import ImgCarousel from './components/ImgCarousel'
import Details from './components/Details'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

import { successAlert } from "./utils/alert";

// successAlert("You are now listed!");

function App() {

  const Bride = 'Joshley'
  const ampersand = '&'
  const Groom = 'Richard'

  const title1 = Bride + ' ' + ampersand + ' ' + Groom;
  const title2 = 'J&R Wedding';

  const wedding_date = '10.10.203n'
  const wedding_date2 = 'October 10, 203n'
  const wedding_day  = 'Saturday'
  const wedding_time = '03:00 PM'

  const address = 'TBA'
  const address_coordinates = ''


  useEffect(() => {
    document.title = title1;
  }, []);


  function useIntersectionObserver(options = { threshold: 0.1, triggerOnce: true }) {

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce) observer.unobserve(entry.target);
        }
      }, options);
  
      if (elementRef.current) observer.observe(elementRef.current);
  
      return () => observer.disconnect();
    }, [options]);
  
    return [elementRef, isVisible];
  }

  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.2 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.2 });

  return (

    <div className="bg-surface font-body text-on-background">
      
      {/* 1. Top Bar (Shared Component - Integrated) */}
      <TopBar title2={ title2 } />

      <main>

        {/*2. Minimal Jumbotron Section */}
        <Jumbotron 
          title1={ title1 } 
          bride={ Bride }
          ampersand={ ampersand }
          groom={ Groom } 
          wedding_date={ wedding_date } />

        {/*3. Image Carousel Section --> */}
        <ImgCarousel 
          ref={ ref } 
          isVisible={ isVisible } />
          
        {/* 4. Wedding Details Section */}
        <Details 
          address={ address } 
          date={ wedding_date2 } 
          day={ wedding_day } 
          time={ wedding_time } 
          ref={ ref2 } 
          isVisible={ isVisible2 } />

        {/* 5. RSVP Section */}
        <RSVP 
          date={ wedding_date2 } 
          ref={ ref3 } 
          isVisible={ isVisible3 } />

      </main>

      <Footer title={ title1 } />

    </div>
  )
}

export default App
