import Image from "next/image";

const Welcome = () => {
  return (
    <div className="col-span-full card flex lg:col-span-7 p-0">
      <div className="flex flex-col gap-y-8 justify-between items-center lg:items-start lg:w-7/12 p-8 text-center lg:text-left">
        <h1 className="font-extrabold text-5xl text-brand-400">
          Are you ready to join now?
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever
          since the 1500s.
        </p>
        <button className="button-brand">Join now!</button>
      </div>
      <div className="-z-10 absolute lg:relative w-full lg:w-5/12 h-full">
        <Image
          src="/images/welcome.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-r-md"
        />
        <div className="absolute w-full h-full rounded-r-md bg-neutral-800/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-neutral-800" />
      </div>
    </div>
  );
};

export default Welcome;
