import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const [screenWidth, setScreenWidth] = useState(false);
  
    const handleResize = () => {
      if (window.innerWidth>720) {
        setScreenWidth(false);
      }else{
        setScreenWidth(true);
      }
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); 
  return (
    <footer className="footer py-4" style={{ backgroundColor: "#34469D" }}>
      <div className="container pt-2">
        <div className="row" style={{ justifyContent: "space-between" }}>
      
          <div className={`col-md-4 d-flex  justify-content-center ${screenWidth?"order-md-1":"order-md-2"}`}>
            <div className="m-2">
              <span style={{ fontSize: "18px", color: "white" }}>  Мы в соцсетях: {" "}</span>
          
            <a href="https://api.whatsapp.com/send?phone=%2B996555313663&data=ARDQq5TElWUo73yV5p5X4xaIo9cn3U7wqSzbskPm2MEYZzHRpYWxqVI8kZ01hVjI-hnULcCc_LA8ZG1k51re4nkOjcHaF5cMBtotE1aBwgbqov7HTXXIN1xeeLeEnmfDJoSlrLGGmmMr6EgXqlE8mQXQrQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2K4r0K6g6ZLHb2SHjOUQELd1ixl8_1SsVCa_FznBgvoPIz4soiveuiTl0" target="_blank" rel="noopener noreferrer" className="text-light mx-1 footerIcons">
              <FaWhatsapp style={{ fontSize: "27px",color: "#43C553",backgroundColor:"#fff",borderRadius:"8%",padding:"2px" }} />
            </a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-light mx-1 footerIcons">
              <FaTelegram style={{ fontSize: "27px",color: "#26A0DF",backgroundColor:"#fff",borderRadius:"8%",padding:"2px", }} />
            </a>
            <a href="https://www.instagram.com/fablab.bishkek" target="_blank" rel="noopener noreferrer" className="text-light mx-1 footerIcons">
              <FaInstagram style={{ fontSize: "27px",color: "#EB01A2",backgroundColor:"#fff",borderRadius:"8%",padding:"2px" }} />
            </a>
            </div>
           
          </div>
          <div className={`col-md-8 d-flex   ${screenWidth?"order-md-2 justify-content-center":"order-md-1 align-items-center"}`}>
            <div className="text-center footerCopyright" style={{ color: "white" }}>
              © 2023 FAB LAB
{" "}
              <span style={{ fontSize: "18px", color: "white" }}> Все права защищены.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;