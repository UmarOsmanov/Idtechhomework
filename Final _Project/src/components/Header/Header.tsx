import { useNavigate } from "react-router";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const toPage = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <div className="header">
      <div className="logo">
        <img className="logo_img" src="/src/assets/logo.png" alt="" />
      </div>

      <ul className="header_menu">
        <li onClick={toPage("/")}>HOME</li>
        <li onClick={toPage("/pages")}>PAGES</li>
        <li onClick={toPage("services")}>SERVICES</li>
        <li onClick={toPage("event")}>EVENT</li>
        <li onClick={toPage("blog")}>BLOG</li>
        <li onClick={toPage("contact")}>CONTACT</li>
      </ul>

      <div className="header_other">
        <img src="/src/assets/search.png" alt="" />
        <img src="/src/assets/quote.png" alt="" />
      </div>

      <div className="buy">
        <button className="buy_btn">
          Buy Ticket
          <img className="buy_icon" src="/src/assets/arrow_right.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
