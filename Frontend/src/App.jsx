import { Box, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/pages/Navbar";
import HomePage from "./components/pages/HomePage";
import CreatePage from "./components/pages/CreatePage";

function App() {
  const location = useLocation();

  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      transition="background-color 0.3s ease"
    >
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
}

export default App;