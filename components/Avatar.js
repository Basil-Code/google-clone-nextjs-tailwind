import Image from "next/image";

function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      className={`h-9 rounded-full cursor-pointer transition transform hover:scale-110 ${className}`}
      src={url}
      alt="profile pic"
    />
  );
}
export default Avatar;
