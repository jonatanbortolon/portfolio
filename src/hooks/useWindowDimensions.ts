import { useState, useEffect } from "react";

function useWindowDimensions() {
  const [dimensions, setDimensions] = useState(() => {
    const { innerWidth: width, innerHeight: height } = window;

    return { width, height };
  });

  useEffect(() => {
    function handleResize() {
      setDimensions(() => {
        const { innerWidth: width, innerHeight: height } = window;

        return { width, height };
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimensions;
}

export default useWindowDimensions;
