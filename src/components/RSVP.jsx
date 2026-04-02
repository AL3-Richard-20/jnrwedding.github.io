export default function RSVP({ date, ref, isVisible }){

    return (
        <section 
            ref={ref}
            className="py-32 bg-surface-container-low" id="rsvp">

            <div 
                className={ `max-w-[700px] mx-auto px-6 text-center animate__animated ${isVisible ? 'animate__fadeInUp' : ''}` }
                style={{ opacity: isVisible ? 1 : 0 }}>

                <h2 className="font-headline text-4xl font-bold mb-4 text-on-background">Will You Join Us?</h2>
                <p className="text-on-surface-variant mb-16">Please let us know your plans by { date }.</p>

                <form className="bg-surface-container-lowest p-10 md:p-16 rounded-2xl shadow-sm space-y-8 text-left">
                <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant ml-1">Full Name</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all" placeholder="Your name" type="text"/>
                </div>
                <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant ml-1">Email Address</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all" placeholder="email@example.com" type="email"/>
                </div>
                <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant ml-1">Guest Count</label>
                    <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all">
                        <option value="1">Just Me</option>
                        <option value="2">Me + 1 Guest</option>
                        <option value="3">3 Guests Total</option>
                        <option value="4">4 Guests Total</option>
                    </select>
                </div>

                <div className="pt-6">
                    <button className="w-full bg-primary text-on-primary py-5 rounded-lg font-bold uppercase tracking-widest transition-all hover:bg-primary-dim hover:shadow-lg active:scale-[0.98]" type="submit">
                        Confirm Attendance
                    </button>
                </div>
                </form>
                
            </div>

        </section>
    )
}