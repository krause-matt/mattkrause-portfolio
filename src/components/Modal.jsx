import "./modal.scss";

export default function Modal() {
  return (
    <div className="modal">
      <div className="popup">
        <div className="message">
          Thanks for reaching out! I will reply to your message shortly.
        </div>
        <button className="button">Close</button>
      </div>
    </div>
  );
}
