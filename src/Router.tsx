import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<LinkPage />} />
            <Route path="/detailpage/:linkDetailId" element={<DetailPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default Router;
