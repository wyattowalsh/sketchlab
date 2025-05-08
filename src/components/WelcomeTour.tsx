import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';

const WelcomeTour: React.FC = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to SketchLab</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          <Carousel.Item>
            <h3>Welcome to SketchLab</h3>
            <p>SketchLab is your ultimate p5.js editor.</p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Real-time Sketch Preview</h3>
            <p>Instant canvas updates on code changes.</p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Robust Code Authoring</h3>
            <p>Monaco Editor with TypeScript support, linting, IntelliSense.</p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Project & Asset Management</h3>
            <p>Local file-system integration, drag-and-drop assets, project templates.</p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Extensible Plugin Framework</h3>
            <p>Dynamic plugin loading, UI hooks, and asset pipelines.</p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Seamless Version Control</h3>
            <p>p5.js version switching via npm or CDN.</p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Cross-Platform Packaging</h3>
            <p>Single installer for Windows, macOS, Linux with auto-updates.</p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Offline Documentation</h3>
            <p>Bundled API reference and example galleries.</p>
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeTour;
