import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Box, Container } from "@mui/material";
import { CartProvider } from "../contexts";

export const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <CartProvider>
      <Box>
        <Navbar onSearch={setSearchQuery} />
        <Container>
          <Outlet context={{ searchQuery }} />
        </Container>
      </Box>
    </CartProvider>
  );
};
