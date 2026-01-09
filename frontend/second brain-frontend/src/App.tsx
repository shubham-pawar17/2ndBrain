import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { DashBoard } from "./pages/dashboard";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/Signup";

function App(){
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/signin" element={<SignIn/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/dashboard" element={<DashBoard/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
}
export default App;