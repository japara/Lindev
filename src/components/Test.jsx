function test() {
  return (
    <div className=" flex justify-center">
      <div className="w-[846px] h-[160px] rounded-3xl bg-gradient-to-b from-[#ffffff]  to-[#e9efeb] flex justify-evenly items-center">
        <p className="w-[141.6px] text-[24px] font-[400] italic">
          არ ჩამორჩე სიახლეებს
        </p>
        <input
          type="email"
          id="email"
          className="bg-[#7BC7D080] rounded-2xl w-[330px] h-[36px] pl-[10px]"
          placeholder="YOUR E-MAIL ADDRESS"
          required
        ></input>
        <button className="bg-gradient-to-r from-[#3EDAD0] to-[#002241] rounded-full h-[36px] w-[118.2px] text-[14.4px] font-[400] italic text-white">
          გამოწერა
        </button>
      </div>
    </div>
  );
}

export default test;
