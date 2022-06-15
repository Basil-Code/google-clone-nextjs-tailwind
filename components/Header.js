import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import googleIcon from "../public/google-logo.png";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const inputSearchRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = inputSearchRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          className="cursor-pointer"
          src={googleIcon}
          alt="Google Picture"
          width={95}
          height={32}
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow h-12 px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-2xl items-center">
          <input
            ref={inputSearchRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            pattern="[^\s]+"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition transform hover:scale-125"
            onClick={() => (inputSearchRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 " />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden={true} type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar className="sm:ml-auto h-10" url="/avatar.jpg" />
      </div>

      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
}
export default Header;
