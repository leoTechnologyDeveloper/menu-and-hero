const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-blue-500  pt-60 flex flex-col gap-5 items-center justify-center md:justify-start
    bg-[linear-gradient(to_right_bottom,rgba(0,0,255,0.2),rgba(0,0,92,0.4)),url('./src/assets/back2.jpg')]  
    md:bg-[linear-gradient(to_right_bottom,rgba(0,0,255,0.2),rgba(0,0,92,0.4)),url('./src/assets/back1.jpg')] bg-center md:bg-top bg-no-repeat bg-cover "
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
