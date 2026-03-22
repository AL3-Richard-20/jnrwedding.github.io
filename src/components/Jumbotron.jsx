export default function Jumbotron({ title1, wedding_date }){

    const jb_headtag = 'The Union of'
    const jb_footer  = 'Save the Date'

    const background_img = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFFkTT3_FBascI9P_8O-O_bXeaxWGge2ixgBRkUm-kyG266xcQiFcaQsralNT9OQY-res895fiZEcRzF6p0Tf3NynLXkMkiPuXG3vDoOfvT7uK3vMTXB_Rb_SO6emwCYleKdk7f_9xRWf_fK6iGHctebIl5rH88dykGcuOX5jtSOAQ0n3wSaB6tbKhB-YWaROB8_-GBCWAnROs8GTBGlH2MUuG0TDAmKubnzxDSQ9oY9Zw-Mvu0aP5WYkfv15_HoC_t2lZMjXR2Yo'

    return (
        <section className="relative h-[870px] flex items-center justify-center overflow-hidden bg-surface">
            <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20 grayscale" 
                data-alt="Faded elegant floral wedding background texture" 
                style={{ backgroundImage: `url(${background_img})` }} >
            </div>
            <div className="relative z-10 text-center px-6">
                <p className="font-label text-sm uppercase tracking-[0.3em] text-primary mb-6">{ jb_headtag }</p>
                <h1 className="font-headline text-6xl md:text-8xl font-black text-on-background mb-8 leading-tight">
                { title1 }
                </h1>
                <p className="font-headline italic text-2xl text-on-surface-variant mb-12">{ jb_footer } • { wedding_date }</p>
            </div>
        </section>
    )
}