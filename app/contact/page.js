import "./contact.css";

export default function Contact() {
    return (
        <section className="flex flex-col text-center justify-start pt-16 items-center ">
            <h1>Get In Touch</h1>
            <div className="flex text-center justify-around items-center w-full">
                <div className="p-8">
                    <div className="flex flex-col justify-center items-start gap-2 mb-8">
                        <p>Email: ferrolink@gmail.com</p>
                        <p>Tel: +886 47766093</p>
                        <p>Fax: +886 47766093</p>
                    </div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.6864051315315!2d120.42659447480086!3d24.042121277515438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34694f514896288f%3A0x9ec50566023e74d0!2z6YeR5ZKM6IyC5bel5qWt6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2sau!4v1723794216269!5m2!1sen!2sau"
                        width="400"
                        height="300"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <form
                    action=""
                    className="border-2 border-white w-2/5 p-8 rounded-3xl bg-slate-800"
                >
                    <div className="flex justify-between gap-5 mb-8">
                        <div className="flex flex-col justify-start items-start">
                            <label for="name" className="mb-2">
                                First Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border-2 rounded p-2 text-black bg-slate-500 "
                                required
                            />
                        </div>

                        <div className="flex flex-col justify-start items-start">
                            <label for="name" className="mb-2">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border-2 rounded p-2 text-black bg-slate-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start mb-8">
                        <label for="email" className="mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border-2 rounded p-2 text-black bg-slate-500"
                            required
                        />
                    </div>

                    <div className="flex flex-col justify-start items-start mb-8">
                        <label for="message" className="mb-2">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            className="w-full border-2 rounded p-2 text-black bg-slate-500"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
