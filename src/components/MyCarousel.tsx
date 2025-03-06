
import { Carousel } from "flowbite-react";

export function MyCarousel() {
    const images = [
        "https://images.unsplash.com/photo-1740938331134-d347f9ee3431?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1741091475787-8cf779895451?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://flowbite.com/docs/images/carousel/carousel-3.svg",
        "https://flowbite.com/docs/images/carousel/carousel-4.svg",
        "https://flowbite.com/docs/images/carousel/carousel-5.svg"
    ]
    return (
        <div className="h-56 sm:h-64 xl:h-[500px]">
            <Carousel pauseOnHover>
                {
                    images.map(image => {
                        return (
                            <div key={image} className="relative h-full w-full overflow-hidden">
                                <img className="object-cover w-full h-full" src={image} alt="carousel" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}
