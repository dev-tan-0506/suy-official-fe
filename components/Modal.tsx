"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  title?: string;
  children: React.ReactNode;
  idModal: string;
  width: string;
};

const Modal: React.FC<ModalProps> = ({ title, children, idModal, width }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    handleOnClose();
  }, [mounted])

  const handleOnClose = () => {
    const elementToMove = document.getElementById(idModal);
    if (elementToMove) {
      elementToMove.classList.add("hidden");
      elementToMove.classList.remove("block");
    }
  };

  return mounted ? ReactDOM.createPortal(
    <div id={idModal}>
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
        onClick={handleOnClose}
      />
      <div
        className={
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border shadow-lg rounded-md bg-white " +
          "w-[" +
          width +
          "]"
        }
      >
        <div className="mt-6 text-center">
          <i
            className="fa-solid fa-xmark absolute right-2.5 top-1.5 py-2.5 px-3.25 rounded-full bg-[#16182308] cursor-pointer"
            onClick={handleOnClose}
          ></i>
          {title && (
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {title}
            </h3>
          )}
          <div className="mt-2 px-7 py-3">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  ) : null;
};

export default Modal;