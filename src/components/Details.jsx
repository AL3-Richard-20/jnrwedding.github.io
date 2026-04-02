import venue_img from '../images/e51c2a0f-fbbd-452e-984a-3f240cbc1f40.jpg'

export default function Details({ address, date, day, time, ref, isVisible }) {

  const headline = '"A celebration of love in the heart of the city."'

    return (
        <section 
          ref={ref}
          className="py-32 bg-surface" id="details">

          <div 
            className={`max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center animate__animated ${isVisible ? 'animate__fadeInUp' : ''}`}
            style={{ opacity: isVisible ? 1 : 0 }}>

            <div>

              <h2 className="font-headline text-4xl font-bold mb-12 text-on-background">Wedding Details</h2>

              <div className="space-y-12">

                <div className="flex gap-6 items-start">
                    <span className="material-symbols-outlined text-primary text-3xl" data-icon="favorite">favorite</span>
                    <div>
                      <h3 className="font-label text-sm uppercase tracking-widest text-primary mb-2">What</h3>
                      <p className="text-xl text-on-background">The Wedding Celebration of Joshley &amp; Richard</p>
                    </div>
                </div>

                <div className="flex gap-6 items-start">
                    <span className="material-symbols-outlined text-primary text-3xl" data-icon="location_on">location_on</span>
                    <div>
                      <h3 className="font-label text-sm uppercase tracking-widest text-primary mb-2">Where</h3>
                      <p className="text-xl text-on-background leading-relaxed">{ address }</p>
                      <a className="inline-block mt-4 text-sm font-bold border-b border-primary pb-1 text-primary" href="#">View on Map</a>
                    </div>
                </div>

                <div className="flex gap-6 items-start">
                    <span className="material-symbols-outlined text-primary text-3xl" data-icon="calendar_today">calendar_today</span>
                    <div>
                      <h3 className="font-label text-sm uppercase tracking-widest text-primary mb-2">When</h3>
                      <p className="text-xl text-on-background leading-relaxed">{ day }, { date }<br/>Ceremony starts at { time }</p>
                    </div>
                </div>

              </div>

            </div>

            <div className="relative">
              <div className="w-full aspect-square bg-surface-container rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    className="w-full h-full object-cover" 
                    data-alt="Elegant venue interior with high ceilings" 
                    src={ venue_img }/>
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 aspect-video bg-surface-container-lowest p-6 rounded-xl shadow-xl hidden lg:block">
                  <p className="font-headline italic text-on-surface-variant">{ headline }</p>
              </div>
            </div>

          </div>

        </section>
    )
}