import { FacebookIcon } from "@src/icons/FacebookIcon";
import { InstagramIcon } from "@src/icons/InstagramIcon";
import { SafariIcon } from "@src/icons/SafariIcon";
import { TwitterIcon } from "@src/icons/TwitterIcon";

export default function Footer() {
  return (
    <div className="w-full flex justify-around items-center py-16 px-14 bg-[#F5F5F5]">
      <SafariIcon />
      <div className="flex flex-col">
        <p>About Us</p>
        <p>Contact</p>
        <p>Terms & Conditions</p>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-start items-center gap-2">
          <FacebookIcon />
          <span>Facebook</span>
        </div>
        <div className="flex justify-start items-center gap-2">
          <TwitterIcon />
          <span>Twitter</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <InstagramIcon />
          <span>Instagram</span>
        </div>
      </div>
      <div className="flex flex-col">
        <p>Subcribe to our newsletter</p>
        <div className="border border-solid border-[#ED165F] rounded-md mt-6">
          <input placeholder="Email Address" type="email" className="p-2 bg-inherit"></input>
          <button className="bg-[#ED165F] text-white py-2 px-5">OK</button>
        </div>
      </div>
      <div className="flex flex-col  ml-20">
        <p>497 Evergreen Rd. Roseville,CA 95673</p>
        <p>+44 345 678 903</p>
        <p>adobexd@gmail.com</p>
      </div>
    </div>
  );
}
