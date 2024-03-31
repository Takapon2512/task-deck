import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
