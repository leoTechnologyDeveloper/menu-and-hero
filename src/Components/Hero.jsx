const Hero = () => {
  return (
    <div
      className={`w-full h-screen bg-blue-500  pt-60 flex flex-col gap-5 items-center justify-start
       bg-back1
      bg-center md:bg-top bg-no-repeat bg-cover `}
    >
      <h1 className="text-white font-lobste text-6xl md:text-8xl ">
        THINK CLEAR
      </h1>
      <p className="text-2xl md:text-3xl text-white w-2/3 text-center">
        Marvelous Expeditions for You in One Click !
      </p>
      <button className="hover:bg-blue-800 hover:text-white px-10 py-3 rounded-3xl bg-blue-400 text-white text-2xl">
        See More
      </button>
    </div>
  );
};

export default Hero;
