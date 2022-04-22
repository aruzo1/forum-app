import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IModalsContext } from "../lib/types";
import Fade from "../components/animations/Fade";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const initialValues = { login: false, register: false };

const ModalsContext = createContext<IModalsContext | undefined>(undefined);

export const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState(initialValues);

  const openModal = (name: string) => {
    setModals({ ...modals, [name]: true });
  };
  const closeModal = (name: string) => {
    setModals({ ...modals, [name]: false });
  };

  useEffect(() => {
    // If any modal is opened hide document.body scrollbar
    if (!Object.values(modals).every((m) => !m)) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [modals]);

  return (
    <ModalsContext.Provider value={{ modals, openModal, closeModal }}>
      <Fade show={!Object.values(modals).every((m) => !m)}>
        <div
          className="z-10 fixed flex items-start justify-center w-full h-full py-16 px-4 overflow-y-auto bg-neutral-900/50"
          onClick={() => setModals(initialValues)}
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
