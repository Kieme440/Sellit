import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/CreatePage";
import CreatePage from "./pages/CreatePage";
import ProductInfoPage from "./pages/ProductInfoPage";
import NavBar from "./components/NavBar";

function App() {

  return (
    <Box minH={"100vh"}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/' element={<ProductInfoPage />} />
      </Routes>
      <Button>Click</Button>
    </Box>
  );
}

export default App;
