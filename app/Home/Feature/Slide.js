"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './slide.css'
import Image from 'next/image'

import wewe from '@/assets/products/Hammer/F-28.jpg'

export default function EmblaCarousel() {
    const filteredItems = [
        {
            id: 1,
            name: "camera",
            img: wewe,
        },
        {
            id: 2,
            name: "camera",
            img: wewe,
        },
        {
            id: 3,
            name: "camera",
            img: wewe,
        },
        {
            id: 4,
            name: "camera",
            img: wewe,
        },
        {
            id: 5,
            name: "camera",
            img: wewe,
        },
        {
            id: 6,
            name: "camera",
            img: wewe,
        },
        {
            id: 7,
            name: "camera",
            img: wewe,
        },
        {
            id: 8,
            name: "camera",
            img: wewe,
        },
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>

                <div className="embla__container">

                    {filteredItems.map((item) => (
                        <div className="embla__slide" key={item.id}>
                            <Image src={item.img} alt='' height={200} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className="flex justify-center items-center gap-10">
                <button className="embla__prev" onClick={scrollPrev}>
                    Prev
                </button>
                <button className="embla__next" onClick={scrollNext}>
                    Next
                </button>
            </div>
        </div>
    )
}
