import React, { useState } from "react";
import Popup from "reactjs-popup";
import AuthWrapper from "./AuthWrapper";

const AuthModal = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button
        type="button"
        className="button"
        onClick={() => setOpen((o) => !o)}
      >
        Login
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <AuthWrapper closeModal={closeModal} />
        </div>
      </Popup>
    </div>
  );
};

export default AuthModal;
