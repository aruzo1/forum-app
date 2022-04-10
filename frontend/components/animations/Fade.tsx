import { Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

const Fade = ({ children, show }: { children: ReactNode; show: boolean }) => {
  return (
    <Transition
      as={Fragment}
      show={show}
      enter="transition-opacity"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
};

export default Fade;
