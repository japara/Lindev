function Header() {
  return (
    <header className="flex justify-evenly items-center w-full h-full">
      <div className=" font-bold text-[24px] text-[#2764D6] ">LINDEV</div>
      <div className=" text-[20px] font-normal text-[#000000]">
        <nav>
          <ul className="  flex items-center gap-[25px]">
            <li className="hover:font-bold cursor-pointer">კურსები</li>
            <li className="hover:font-bold cursor-pointer">ჩვენს შესახებ</li>
            <li className="hover:font-bold cursor-pointer">ბლოგი</li>
            <li className="hover:font-bold cursor-pointer">სიახლეები</li>
            <li className="hover:font-bold cursor-pointer">კონტაქტი</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
