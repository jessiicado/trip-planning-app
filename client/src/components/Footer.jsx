import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import github from "../assets/github-mark.png";

const Footer = () => {
  return (
    <div className="m-0 p-0 border pt-10">
      <NavLink to="/" className="items-center flex justify-center mb-10">
        <img alt="Plannd logo" className="h-16 sm:h-20" src={logo} />
      </NavLink>
      <div className="flex flex-rows items-center justify-center">
        <ul>
          <li>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" width="36" height="36" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center pt-10 gap-y-5">
        <NavLink to="/faq">Support & FAQ</NavLink>
        <NavLink to="/terms">Terms</NavLink>
        <NavLink to="/privacy">Privacy</NavLink>
      </div>
    </div>
  );
};

export default Footer;
