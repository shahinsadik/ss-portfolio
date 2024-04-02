"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AosWrapper = ({children}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div>
          {children}
        </div>
    );
};

export default AosWrapper;