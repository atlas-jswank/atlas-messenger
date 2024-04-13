import Mascot from "./assets/mascot.png";

export default function Message() {
  return (
    <div className="message">
      <img className="message-avatar" src={Mascot} />
      <div>
        <div className="message-top">
          <div className="username">Lumi</div>
          <div className="timestamp">12:34 AM</div>
        </div>
        <div className="message-content">
          Praesent massa tortor, facilisis at quam id, tincidunt maximus nunc.
          Nulla eleifend sem ligula, in ultrices urna consectetur ut.
          Suspendisse ac mattis nulla, eu pulvinar turpis.
        </div>
      </div>
    </div>
  );
}
