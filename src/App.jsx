import PasswordGenerater from "./PasswordGenerater.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white shadow-lg hover:text-blue-700 transition duration-200">
        Tailored Passwords at Your Fingertips
      </h1>

      <PasswordGenerater />
      <h1 className="text-4xl font-semibold text-white">
        <br></br>
        Made With <span className="text-red-500">❤️</span> By Yash Pandey
      </h1>
    </>
  );
}

export default App;
