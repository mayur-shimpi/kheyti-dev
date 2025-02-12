const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden text-center">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./assets/video-1.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="absolute  inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center px-6">

            </div>
            <h1 className="w-full absolute mx-auto bottom-40 text-white text-3xl md:text-4xl font-light mt-4 leading-2 lg:!leading-[50px] z-10">
                Ushering smallholder farmers to a secure, <br /> <span className="font-semibold">profitable and climate-smart future.</span>
            </h1>
        </section>
    );
};

export default Hero;
