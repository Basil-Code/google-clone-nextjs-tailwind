import Head from "next/head";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import googleIcon from "../public/google-logo.png";
import { useRef } from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  // const [input, setInput] = useState("");
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    // router.push(`/search/${id}`);
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/googleicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full px-4 py-3 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          {/* Avatar */}
          <Avatar url="/avatar.jpg" />
        </div>
      </header>
      {/* Body */}
      <form className="flex flex-col items-center mt-20 flex-grow w-4/5">
        <Image src={googleIcon} alt="Google Picture" width={300} height={100} />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            className="flex-grow focus:outline-none"
            ref={searchInputRef}
            type="text"
          />
          <MicrophoneIcon className="h-5 ml-2" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={search}>
            {/* &apos; -> means apostrophe which is suggested rule that ruined my life for few hours */}
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
