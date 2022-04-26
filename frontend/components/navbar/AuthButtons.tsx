import { useModals } from "contexts/Modals";

const AuthButtons = () => {
  const { openModal } = useModals()!;

  return (
    <div className="flex gap-x-2">
      <button className="btn-border" onClick={() => openModal("login")}>
        Login
      </button>
      <button className="btn-brand" onClick={() => openModal("register")}>
        Register
      </button>
    </div>
  );
};

export default AuthButtons;
