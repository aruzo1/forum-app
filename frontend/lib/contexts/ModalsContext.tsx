import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { motion } from "framer-motion";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";
import { IModalsContext } from "../types";
import { fade, scaleFade } from "../animations";

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
      document.body.style.overflow = "overlay";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [modals]);

  return (
    <ModalsContext.Provider value={{ modals, openModal, closeModal }}>
      {!Object.values(modals).every((m) => !m) && (
        <motion.div
          className="z-10 fixed flex items-start justify-center w-full h-screen py-16 px-4 overflow-y-auto bg-neutral-900/50"
          onClick={closeAllModals}
          {...fade}
        >
          <motion.div
            className="max-w-full"
            onClick={(e) => e.stopPropagation()}
            {...scaleFade}
          >
            {modals.login && <LoginForm />}
            {modals.register && <RegisterForm />}
          </motion.div>
        </motion.div>
      )}
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = () => useContext(ModalsContext);
