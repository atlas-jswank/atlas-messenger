import "./App.css";
import ChannelBar from "./ChannelBar";
import ContentPanel from "./ContentPanel";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <ChannelBar />
        <ContentPanel />
      </div>
    </>
  );
}

export default App;
