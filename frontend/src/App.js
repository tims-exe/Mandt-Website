import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import './App.css';
import Cart from "./pages/Cart";
import { ChakraProvider } from '@chakra-ui/react'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Confirmed from "./components/OrderPlaced";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<LandingPage/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/home" element={<Home/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/confirmed" element={<Confirmed/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
