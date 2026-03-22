export default function TopBar({ title2 }){

    return (
        <header class="sticky top-0 z-50 glass-header border-b border-outline-variant/15 px-6 lg:px-40 py-4">
            <div class="max-w-[1200px] mx-auto flex items-center justify-between">
                <div class="flex items-center gap-4 text-on-background">
                    {/* <div class="size-6 text-primary">
                    <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fill-rule="evenodd"></path>
                        <path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fill-rule="evenodd"></path>
                    </svg>
                    </div> */}
                    <h2 class="text-on-background text-xl font-headline font-bold leading-tight tracking-tight">{ title2 }</h2>
                </div>
                <div class="flex flex-1 justify-end items-center gap-10">
                    <nav class="hidden md:flex items-center gap-10">
                        <a class="text-on-background text-sm font-medium tracking-wide hover:text-primary transition-colors" href="#story">Our Story</a>
                        <a class="text-on-background text-sm font-medium tracking-wide hover:text-primary transition-colors" href="#gallery">Gallery</a>
                        <a class="text-on-background text-sm font-medium tracking-wide hover:text-primary transition-colors" href="#details">Details</a>
                    </nav>
                    <button class="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-primary text-on-primary text-sm font-bold tracking-wider uppercase transition-all hover:opacity-90 active:scale-95 shadow-sm">
                        RSVP
                    </button>
                </div>
            </div>
        </header>
    )
}