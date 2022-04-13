import Image from "next/image";
import { useModals } from "../contexts/ModalsContext";

const Welcome = () => {
  const { openModal } = useModals();

  return (
    <div className="col-span-full lg:col-span-7 flex card p-0">
      <div className="flex flex-col gap-y-8 justify-between items-center lg:items-start lg:w-7/12 p-8 text-center lg:text-left">
        <h1 className="font-semibold text-5xl">
          Are you ready to{" "}
          <span className="underline decoration-brand-400 text-brand-400">
            join now?
          </span>
        </h1>
        <p className="text-neutral-200">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          ever since the 1500s.
        </p>
        <button className="btn-brand" onClick={() => openModal!("register")}>
          Join now!
        </button>
      </div>
      <div className="-z-10 absolute lg:relative w-full lg:w-5/12 h-full">
        <Image
          src="/images/welcome.jpg"
          alt="Welcome image"
          layout="fill"
          objectFit="cover"
          className="rounded-md lg:rounded-l-none"
          priority
        />
        <div className="absolute w-full h-full rounded-md lg:rounded-l-none bg-neutral-800/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-neutral-800" />
      </div>
    </div>
  );
};

export default Welcome;
