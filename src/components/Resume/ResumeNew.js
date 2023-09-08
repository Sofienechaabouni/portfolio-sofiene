import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/CV-SofieneChaabouni-ap.pdf";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {/* <Row style={{ justifyContent: "center", position: "relative" }}></Row> */}
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <div style={{ flexDirection: "column" }}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6}></Page>
              <Page pageNumber={3} scale={width > 786 ? 1.7 : 0.6}></Page>
            </div>
          </Document>
        </Row>

        {/* <Row style={{ justifyContent: "center", position: "relative" }}></Row> */}
      </Container>
    </div>
  );
}

export default ResumeNew;
