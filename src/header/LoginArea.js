import React, { useState } from "react";
import AuthModal from "../auth/Modal";

const LoginArea = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div
      className="flex gap-2 cursor-pointer border-x-2 px-4 py-1 hover:bg-slate-200 "
      onClick={() => setModalIsOpen(true)}
    >
      <p>Login</p>
      <img src="./icons/user.png" alt="user" className="w-8 object-contain" />
      <AuthModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default LoginArea;
