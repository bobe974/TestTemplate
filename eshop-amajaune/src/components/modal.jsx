import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
  <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
    >
      ✕
    </button>
    {title && <h2 className="flex justify-center text-xl font-semibold mb-4">{title}</h2>}
    <div>{children}</div>
  </div>
</div>

  );
};

export default Modal;
