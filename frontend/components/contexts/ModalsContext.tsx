import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";
import { IModalsContext } from "../../lib/types";
import Fade from "../animations/Fade";

const initialValues: IModalsContext = {
  modals: {
    login: false,
    register: false,
  },
};

const ModalsContext = createContext(initialValues);

export const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState(initialValues.modals);

  const openModal = (name: string) => {
    setModals((prev) => ({ ...prev, [name]: true }));
  };
  const closeModal = (name: string) => {
    setModals((prev) => ({ ...prev, [name]: false }));
  };
  const closeAllModals = () => {
    setModals(initialValues.modals);
  };

  useEffect(() => {
    if (Object.values(modals).every((m) => !m)) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [modals]);

  return (
    <ModalsContext.Provider value={{ modals, openModal, closeModal }}>
      <Fade show={!Object.values(modals).every((m) => !m)}>
        <div
          className="z-10 fixed flex items-start justify-center w-full h-screen py-16 px-4 overflow-y-auto bg-neutral-900/50"
          onClick={closeAllModals}
        >
          <div className="max-w-full" onClick={(e) => e.stopPropagation()}>
            {modals.login && <LoginForm />}
            {modals.register && <RegisterForm />}
          </div>
        </div>
      </Fade>
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = () => useContext(ModalsContext);
