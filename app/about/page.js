import Image from 'next/image'
import x from '@/assets/materials/company_photo.png'

export default function About() {
    return (
        <section className="flex flex-col justify-start pt-16 items-center">
            <h1>About Us</h1>
            <div className="flex justify-between gap-8 items-center px-8">
                <p className= ''>
                    Welcome to Ferrolink, your trusted partner in precision-crafted hand tools. At Ferrolink, we pride ourselves on combining innovation, durability, and ergonomic design to deliver top-quality tools for professionals and DIY enthusiasts alike. Our commitment to excellence ensures that every tool we produce meets the highest standards of performance and reliability, empowering you to tackle any project with confidence. Explore our diverse range of hand tools and experience the Ferrolink difference today.
                </p>
                <Image
                    src={x}
                    alt='factory'
                    width={350}
                    className=""
                />
            </div>
        </section>
    )
}