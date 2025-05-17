import { useLocation } from "react-router"
import "./hero.css"

 const pathNames = {
        "": "Home",
        "services": "Services"
    }

const Hero = () => {
    const { pathname } = useLocation();
    const pathArr = pathname.split("/");
    const lastName = pathArr[pathArr.length - 1] as keyof typeof pathNames;

    const path = pathNames[lastName]

  return (
    <div className='hero'>
        <img src="/images/concert.jpg" alt="" />
        <p>
            {path}
        </p>
    </div>
  )
}

export default Hero