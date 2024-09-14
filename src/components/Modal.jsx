import ReactDOM from 'react-dom';

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg max-w-sm">
        {children}
        <button className="mt-4 p-2 bg-pink-500 w-full mx-auto text-white rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById('portal-root') // You need a div with this ID in your HTML
  );
}

export default Modal;
