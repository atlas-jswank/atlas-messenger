import ContentTopBar from "./ContentTopBar";
import MessageInput from "./MessageInput";
import MessagesPanel from "./MessagesPanel";

export default function ContentPanel() {
  return (
    <div className="content-panel">
      <ContentTopBar />
      <MessagesPanel />
      <MessageInput />
    </div>
  );
}
