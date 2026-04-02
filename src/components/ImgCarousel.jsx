import carousel_img1 from "../images/Messenger_creation_0AF23B48-561C-4C2A-80D1-5BFE33E594F4.jpeg";
import carousel_img2 from "../images/Messenger_creation_9521F9A2-61F7-4FFC-9644-7A932673ADC3.jpeg";
import carousel_img3 from "../images/Messenger_creation_B6E9584A-A8F6-4388-B022-7E0ABD29F453.jpeg";
import carousel_img4 from "../images/Picsart_25-12-10_23-42-22-370.jpg";

export default function ImgCarousel() {

  // const carousel_images = [
  //   "images/Messenger_creation_0AF23B48-561C-4C2A-80D1-5BFE33E594F4.jpeg",
  //   "images/Messenger_creation_9521F9A2-61F7-4FFC-9644-7A932673ADC3.jpeg",
  //   "images/Messenger_creation_B6E9584A-A8F6-4388-B022-7E0ABD29F453.jpeg",
  //   "images/Picsart_25-12-10_23-42-22-370.jpg",
  // ]

  const carousel_images = [
    carousel_img1,
    carousel_img3,
    carousel_img4,
    carousel_img2,
    carousel_img1,
    carousel_img3,
    carousel_img4,
    carousel_img2,
    carousel_img1,
    carousel_img3,
    carousel_img4,
    carousel_img2,
    carousel_img1,
    carousel_img3,
    carousel_img4,
    carousel_img2
  ]

  return (
      <section className="bg-surface-container-low py-24" id="gallery">

          <div className="mx-auto">

            <div className="overflow-hidden">

              <div className="animate-scroll gap-6 py-12">

                {
                  carousel_images.map((src, index) => (
                    <div key={index} className="h-[350px] md:h-[850px] flex-shrink-0 w-[100px] md:w-[250px] aspect-[4/5] overflow-hidden">
                      <img 
                        className="transition-all duration-700" 
                        data-alt={`Image ${index + 1}`} 
                        src={src}
                      />
                    </div>
                  ))
                }
                {
                  carousel_images.map((src, index) => (
                    <div key={index} className="h-[350px] md:h-[850px] flex-shrink-0 w-[100px] md:w-[250px] aspect-[4/5] overflow-hidden">
                      <img 
                        className="transition-all duration-700" 
                        data-alt={`Image ${index + 1}`} 
                        src={src}
                      />
                    </div>
                  ))
                }

              </div>

            </div>

            <div className="text-center">
              <p className="text-on-surface-variant font-body italic">Capturing our journey together.</p>
            </div>

          </div>

      </section>
  )
}