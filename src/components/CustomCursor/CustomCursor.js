import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [mousePositions, setMousePositions] = useState({
    cursor: { x: 0, y: 0 },
    mouse1: { x: 0, y: 0 },
    mouse2: { x: 0, y: 0 },
  });

  const [cursorVisible, setCursorVisible] = useState(true);

  const onMouseMove = (e) => {
    setMousePositions({
      cursor: { x: e.clientX, y: e.clientY },
      mouse1: { x: e.clientX, y: e.clientY },
      mouse2: { x: e.clientX, y: e.clientY },
    });
  };

  useEffect(() => {
    const linkElements = document.querySelectorAll("a");

    const handleLinkMouseEnter = () => setCursorVisible(false);
    const handleLinkMouseLeave = () => setCursorVisible(true);

    linkElements.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkMouseEnter);
      link.addEventListener("mouseleave", handleLinkMouseLeave);
    });

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      linkElements.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkMouseEnter);
        link.removeEventListener("mouseleave", handleLinkMouseLeave);
      });

      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <span
        className="mouse"
        id="cursor"
        style={{
          left: `${mousePositions.cursor.x}px`,
          top: `${mousePositions.cursor.y}px`,
          opacity: cursorVisible ? 1 : 0,
        }}
      ></span>
      <span
        className="mouse"
        id="mouse1"
        style={{
          left: `${mousePositions.mouse1.x}px`,
          top: `${mousePositions.mouse1.y}px`,
          opacity: cursorVisible ? 1 : 0,
        }}
      ></span>
      <span
        className="mouse"
        id="mouse2"
        style={{
          left: `${mousePositions.mouse2.x}px`,
          top: `${mousePositions.mouse2.y}px`,
          opacity: cursorVisible ? 1 : 0,
        }}
      ></span>
    </>
  );
};

export default CustomCursor;
