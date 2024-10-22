function About() {
  return (
    <div className="relative flex flex-col mt-[21px] justify-center items-center  text-white bg-gradient-to-r from-[#2662D6] to-[#3DB8B1] w-full h-screen max-w-[1280px] max-h-[500px] rounded-tl-3xl rounded-tr-3xl ">
      <h1 className=" text-[36px] font-bold capitalize">
        Discover one of the best <br />{" "}
        <span className="ml-[60px]">learning platform</span>
      </h1>
      <div className="flex items-center gap-[40px] mt-[40px]">
        <button className="rounded-full border-[1px] border-white max-h-full max-w-full w-[129px] h-[42px] bg-white text-[#2C81C4]">
          Join Now
        </button>
        <button className="rounded-full border-[1px] border-white max-h-full max-w-full w-[129px] h-[42px] bg-transparent text-white">
          Learn More
        </button>
      </div>
      <div className="flex absolute bottom-[-72px] justify-between items-center px-[30px] bg-opacity-80 rounded-3xl bg-[#E9EBEF] bg-opacity-80 max-w-[846px] max-h-[160px] h-full w-full">
        <div className=" flex fustify-center items-center">
          <img
            className="max-w-[50px] max-h-[50px] mr-[8px]"
            src="./paper.svg"
            alt="paper"
          />
          <p className="bg-gradient-to-r from-[#2662D6] to-[#3DB8B1] text-transparent bg-clip-text font-bold text-[20px]">
            პროგრამები
          </p>
        </div>
        <div className=" flex fustify-center items-center">
          <img
            className="max-w-[50px] max-h-[50px] mr-[8px]"
            src="./paper.svg"
            alt="paper"
          />
          <p className="bg-gradient-to-r from-[#2662D6] to-[#3DB8B1] text-transparent bg-clip-text font-bold text-[20px]">
            სიახლეები
          </p>
        </div>
        <div className=" flex fustify-center items-center">
          <img
            className="max-w-[50px] max-h-[50px] mr-[8px]"
            src="./book.svg"
            alt="book"
          />
          <p className="bg-gradient-to-r from-[#2662D6] to-[#3DB8B1] text-transparent bg-clip-text font-bold text-[20px]">
            პორტფოლიო
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
