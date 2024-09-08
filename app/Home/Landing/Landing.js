export default function Landing() {
    return (
        <section className="flex justify-between items-center">
            <div className="">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/WaxRspBkblE?si=IgGzwA2FVl-eT4KO&autoplay=1&mute=1&loop=1&controls=0&rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
            <div className="">
                <h1 className="text-4xl leading-loose">
                    Tools Built to Last
                    <br />
                    Performance You Can Trust
                </h1>
            </div>
        </section>
    );
}
