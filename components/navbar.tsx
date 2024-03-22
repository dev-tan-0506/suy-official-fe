'use client'

import InputSearch from "./InputSearch";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const toggleModal = (idModal: string, action: string) => {
    const elementToMove = document.querySelector(idModal);
    if (elementToMove) {
      if (action === 'show') {
        elementToMove.classList.remove('hidden');
        elementToMove.classList.add('block');
      } else {
        elementToMove.classList.add('hidden');
        elementToMove.classList.remove('block');
      }
    }
  }

  const handleOpenRegisterModal = () => {
  }
  const handleOpenLoginModal = () => {
    toggleModal('#login-modal', 'show');
  }
  return (
    <nav className="flex justify-between px-[30px] py-[15px] border border-solid border-[#e8ebed] items-center">
      <div className="flex">
        <div></div>
        <strong>Suy Official</strong>
      </div>
      <div>
        <InputSearch />
      </div>
      <div className="flex gap-[10px]">
        <button className="font-medium p-[5px] rounded-full" onClick={handleOpenLoginModal}>Đăng nhập</button>
        <button className="font-medium py-[5px] px-[20px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white" onClick={handleOpenRegisterModal}>Đăng ký</button>
      </div>
      <LoginModal></LoginModal>
    </nav>
  );
}
