import "./team.css";
import Image from "next/image";
import ceo from "@/assets/materials/pfp/ceo.png";
import manager from "@/assets/materials/pfp/manager.png";
import accountant from "@/assets/materials/pfp/accountant.png";
import staff1 from "@/assets/materials/pfp/staff_1.png";
import staff2 from "@/assets/materials/pfp/staff_2.png";
import staff3 from "@/assets/materials/pfp/staff_3.png";

export default function Team() {
    return (
        <section className="flex flex-col justify-start pt-16 items-center ">
            <h1>Our Team</h1>
            <div className=" w-full grid grid-cols-3 gap-8">
                <div className=" flex flex-col justify-center items-center">
                    <Image
                        src={ceo}
                        alt="ceo"
                        className="border-white border-2 rounded-full h-64 w-64"
                    ></Image>
                    <p>David Hsu</p>
                    <p>CEO</p>
                    <p>30+ years in hand tools industry </p>
                </div>

                <div className=" flex flex-col justify-center items-center">
                    <Image
                        src={manager}
                        alt="ceo"
                        className="border-white border-2 rounded-full h-64 w-64"
                    ></Image>
                    <p>Author Yu</p>
                    <p>Engineering Leader</p>
                    <p>I am Author Yu</p>
                </div>

                <div className=" flex flex-col justify-center items-center">
                    <Image
                        src={accountant}
                        alt="ceo"
                        className="border-white border-2 rounded-full h-64 w-64"
                    ></Image>
                    <p>Jenny Hsu</p>
                    <p>Project Manager</p>
                    <p>Eat and sleep</p>
                </div>

                <div className=" flex flex-col justify-center items-center">
                    <Image
                        src={staff1}
                        alt="ceo"
                        className="border-white border-2 rounded-full h-64 w-64"
                    ></Image>
                    <p>A Di Ah</p>
                    <p>Team Leader</p>
                    <p>Auuu</p>
                </div>

                <div className=" flex flex-col justify-center items-center">
                    <Image
                        src={staff2}
                        alt="ceo"
                        className="border-white border-2 rounded-full h-64 w-64"
                    ></Image>
                    <p>A-Bu</p>
                    <p>Staff</p>
                    <p>Abuuuuuuu</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <Image
                        src={staff3}
                        alt="ceo"
                        className="border-white border-2 rounded-full h-64 w-64"
                    ></Image>
                    <p>Poolo</p>
                    <p>Staff</p>
                    <p>Poooooolo</p>
                </div>
            </div>
        </section>
    );
}
