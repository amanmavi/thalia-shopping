import React, { useState } from "react";
import AuthModal from "../auth/Modal";

const LoginArea = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div
      className="flex gap-2 cursor-pointer border-x-2 laptop:px-4 px-1 py-1 hover:bg-slate-200 "
      onClick={() => setModalIsOpen(true)}
    >
      <img
        src="/icons/user.png"
        alt="user"
        className="laptop:w-8 w-6  object-contain"
      />
      <AuthModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default LoginArea;
