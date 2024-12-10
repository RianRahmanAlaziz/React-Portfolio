import "./App.css";
import MainContent from "./layouts/Content/MainContent";
import Sidebar from "./layouts/Content/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
