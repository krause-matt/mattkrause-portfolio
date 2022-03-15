import "./modal.scss";

export default function Modal({ modal, setModal }) {
  return (
    <div className={modal ? "modal active" : "modal"}>
      <div className="popup" id="modal-popup">
        <div className="message" id="modal-message">
          Thanks for reaching out! I will reply to your message as soon as I
          can.
        </div>
        <button className="button" onClick={() => setModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
