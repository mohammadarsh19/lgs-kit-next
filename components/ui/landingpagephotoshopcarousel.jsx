"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const images = [
    "/gallery/photoshop1.jpeg",
    "/gallery/photoshop2.jpeg",
    "/gallery/photoshop3.jpeg",
    "/gallery/photoshop4.jpeg",
    "/gallery/photoshop5.jpeg",
    "/gallery/photoshop6.jpeg",
    "/gallery/photoshop7.jpeg",
    "/gallery/photoshop8.jpeg",
    "/gallery/photoshop9.jpeg",
    "/gallery/photoshop10.jpeg",
    "/gallery/photoshop11.jpeg",
];

export default function LandingPageCarousel() {
    return (
            <Carousel
                opts={{
                    loop: true,
                    dragFree: true,
                }}
                plugins={[
                    AutoScroll({
                        speed: 1,
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,
                    }),
                ]}
                className="mx-auto w-full max-w-6xl" >
                <CarouselContent className="w-40 md:w-auto pl-4 h-43 md:h-auto">
                    {images.map((src, i) => (
                        <CarouselItem
                            key={i}
                            className="basis-full md:basis-1/3 lg:basis-1/5"
                        >
                            <div className="md:relative h-45 md:h-75 w-full overflow-hidden rounded-2xl shadow-md">
                                <Image
                                    src={src}
                                    alt="Photoshop preview"
                                    width={200}
                                    height={200}
                                    priority={i === 0}
                                    className="object-cover"
                                    quality={40}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
    );
}
