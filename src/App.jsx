import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Xutton from "./components/xutton";

function App() {
  return (
    <>
      <nav>
        <Sidebar/>
      </nav>
      <main>
        <Main/>
      </main>
    </>
  );
}

export default App;
