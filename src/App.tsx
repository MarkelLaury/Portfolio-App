import React from "react";
import { useLocation, Outlet } from "react-router";
import { useLayoutEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DictionaryProvider } from "./context/DictionaryContext";
import AppBar from "./UI/AppBar";
import Footer from "./UI/Footer";
function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <DictionaryProvider>
      <div className="app">
        <AppBar />
        <Container className="App" fluid>
          <Outlet />
        </Container>
        <Footer/>
      </div>
    </DictionaryProvider>
  );
}

export default App;
