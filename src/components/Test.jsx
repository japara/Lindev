import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nezfhkg", // Service ID
        "template_pn3rshk", //  EmailJS template ID
        form.current,
        "wFzPi2R76_p2XCZ28" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div className="flex w-screen h-[302px] mt-[250px] mb-[-100px] justify-evenly items-center bg-gradient-to-r from-[#2662D6] to-[#3DB8B1] ml-[-112px] relative">
      <div className="w-[846px] h-[160px] rounded-3xl bg-gradient-to-b from-[#E9EBEFCC] to-[#FFFFFFCC] flex justify-evenly items-center absolute top-[-80px]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex justify-evenly items-center w-full"
        >
          <p className="w-[141.6px] text-[24px] font-[400] italic">
            არ ჩამორჩე სიახლეებს
          </p>
          <input
            type="email"
            name="user_email"
            className="bg-[#7BC7D080] rounded-2xl w-[330px] h-[36px] pl-[10px]"
            placeholder="YOUR E-MAIL ADDRESS"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#3EDAD0] to-[#002241] rounded-full h-[36px] w-[118.2px] text-[14.4px] font-[400] italic text-white"
          >
            გამოწერა
          </button>
        </form>
      </div>
      <div className="flex justify-evenly items-top gap-[137px]"></div>
    </div>
  );
}

export default Email;
