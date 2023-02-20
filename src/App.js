import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainBody from "./components/MainBody/MainBody";
import UserContextProvider from "./context/UserContext";
function App() {
  return (
    <main>
      <UserContextProvider>
        <Navbar />
        <MainBody />
      </UserContextProvider>
    </main>
  );
}

export default App;
