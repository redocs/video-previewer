import { Routes, Route } from "react-router-dom";
import './App.scss';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./pages/Create";
import Saved from "./pages/Saved";
import User from "./pages/User";
import Header from "./components/Header";
import { useStateValue } from './state';

function App() {

  const [{ user }] = useStateValue();

  if (!user.email) {
    return <div className="App">
      <Header menu={false} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  }

  return (
    <div className="App">
      <Header menu={true} />
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/create" element={<Create />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
