import cnc_image from '@/assets/materials/cnc2.png'

import Image from 'next/image'

export default function Introduction() {
    return (
        <section className=" flex flex-col justify-center items-center">
            <h1 className="">Born to be Perfect</h1>
            <div className="flex justify-around items-center">
                <p className="w-1/2">As a leading manufacturer, we harness the power of advanced CNC techniques to create tools that set industry standards for accuracy and reliability. Our commitment to quality is unwavering, ensuring each tool we produce not only meets but exceeds the expectations of professionals and enthusiasts alike. With a focus on innovation and durability, Ferrolink is dedicated to providing you with the finest hand tools that perform flawlessly, no matter the task at hand. Join us in shaping the future of craftsmanship with tools engineered for excellence.</p>
                <Image src={cnc_image} height={250} alt='none' />
            </div>
        </section>
    )
}