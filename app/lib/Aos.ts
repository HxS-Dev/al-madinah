import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Aos: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return null;
};

export default Aos;