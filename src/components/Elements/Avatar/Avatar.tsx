import Image from "next/image";

const Avatar = () => {
  return (
  <div className="absolute xl:max-w-none w-full h-full border rounded-full">
    <Image src={"/ava 3.png"} fill alt="Avatar" className='object-cover border rounded-2xl'/>
  </div>
  )
};

export default Avatar;
