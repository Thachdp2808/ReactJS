import { FacebookIcon } from "@src/icons/FacebookIcon";
import { InstagramIcon } from "@src/icons/InstagramIcon";
import { SafariIcon } from "@src/icons/SafariIcon";
import { TwitterIcon } from "@src/icons/TwitterIcon";

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-around px-14 bg-primary-4  mt-4 py-10 md:flex-row md:items-center md:py-16 md:px-2">
      <SafariIcon />
      <div className="flex flex-col mt-2 md:mt-0">
        <p>About Us</p>
        <p>Contact</p>
        <p>Terms & Conditions</p>
      </div>
      <div className="flex flex-col mt-2 md:mt-0">
        <div className="flex justify-start items-center gap-2">
          <FacebookIcon />
          <span>Facebook</span>
        </div>
        <div className="flex justify-start items-center gap-2">
          <TwitterIcon />
          <span>Twitter</span>
        </div>
        <div className="flex justify-start items-center gap-2">
          <InstagramIcon />
          <span>Instagram</span>
        </div>
      </div>
      <div className="flex flex-col mt-2 md:mt-0 ">
        <p>Subcribe to our newsletter</p>
        <div className="border border-solid border-primary-1 rounded-md mt-6 flex">
          <input
            placeholder="Email Address"
            type="email"
            className="p-2 bg-inherit flex-grow"
          />
          <button className="bg-primary-1 text-white py-2 px-5 ">OK</button>
        </div>
      </div>
      <div className="flex flex-col mt-2 md:mt-0 md:ml-20">
        <p>497 Evergreen Rd. Roseville,CA 95673</p>
        <p>+44 345 678 903</p>
        <p>adobexd@gmail.com</p>
      </div>
    </div>
  );
}
