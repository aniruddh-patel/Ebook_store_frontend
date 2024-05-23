
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as pdfjsLib from 'pdfjs-dist/webpack';
import '../components/css/Preview.css';
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;


// const Flipbook = ({ pdfUrl }) => {
const Flipbook = () => {
  const location = useLocation();
  const { pdfUrl } = location.state;
  const [numPages, setNumPages] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const canvasRefs = useRef([]);
  const flipbookRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      setNumPages(pdf.numPages);

      const pagesArray = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        pagesArray.push(page);
      }
      setPages(pagesArray);
    };

    loadPdf();
  }, [pdfUrl]);

  useEffect(() => {
    const renderPage = async (page, canvas) => {
      const viewport = page.getViewport({ scale: 1.5 });
      const context = canvas.getContext('2d');

      // Reset the transformation matrix to the identity matrix
      context.setTransform(1, 0, 0, 1, 0, 0);

      // Clear the canvas before rendering
      context.clearRect(0, 0, canvas.width, canvas.height);

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    };

    const renderCurrentPages = () => {
      const startIndex = currentPage * 2;
      const endIndex = startIndex + 2;
      const pagesToRender = pages.slice(startIndex, endIndex);

      pagesToRender.forEach((page, index) => {
        const canvas = canvasRefs.current[index];
        if (canvas && page) {
          renderPage(page, canvas);
        }
      });
    };

    renderCurrentPages();
  }, [pages, currentPage]);

  const nextPage = () => {
    if ((currentPage + 1) * 2 < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (flipbookRef.current.requestFullscreen) {
        flipbookRef.current.requestFullscreen();
      } else if (flipbookRef.current.mozRequestFullScreen) { // Firefox
        flipbookRef.current.mozRequestFullScreen();
      } else if (flipbookRef.current.webkitRequestFullscreen) { // Chrome, Safari, Opera
        flipbookRef.current.webkitRequestFullscreen();
      } else if (flipbookRef.current.msRequestFullscreen) { // IE/Edge
        flipbookRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="flipbook-container" ref={flipbookRef}>
      <button className="nav-button left-button" onClick={prevPage} disabled={currentPage === 0}>Previous</button>
      <div className="flipbook">
        <canvas ref={el => canvasRefs.current[0] = el} />
        <canvas ref={el => canvasRefs.current[1] = el} />
      </div>
      <button className="nav-button right-button" onClick={nextPage} disabled={(currentPage + 1) * 2 >= numPages}>Next</button>
      <button className="fullscreen-button" onClick={toggleFullScreen}>
        <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand} />
      </button>
    </div>
  );
};

export default Flipbook;