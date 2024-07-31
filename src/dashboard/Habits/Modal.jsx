import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
            onClick={handleClose}
        >
            <div className="bg-white p-6 rounded-md relative shadow-lg transition-transform transform-gpu duration-300 ease-in-out scale-100">
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
