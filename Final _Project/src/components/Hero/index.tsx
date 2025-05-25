import { useLocation } from "react-router";
import "./hero.css";

const pathNames = {
  "": "",
  services: "Services",
  about: "About", // Əgər "about" səhifəniz varsa
  // Digər səhifələriniz üçün də əlavə edə bilərsiniz
};

const Hero = () => {
  const { pathname } = useLocation();
  const pathArr = pathname.split("/");
  const lastName = pathArr[pathArr.length - 1] as keyof typeof pathNames;

  const path = pathNames[lastName];
  const isHomePage = lastName === "";

  return (
    <div className="hero">
      {!isHomePage && <img src="/public/images/concert.jpg" alt="" />} {/* Ana səhifə deyilsə şəkli göstər */}
      <p>{path}</p>
    </div>
  );
};

export default Hero;



