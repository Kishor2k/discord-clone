import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <section id="header " className="bg-discord-blue">
      <div className="wrapper py-6 ">
        {/* mobile nav */}
        <header className="lg:hidden flex justify-between items-center gap-6 h-6 z-40">
          <div className="w-32">
            <img src={Logo} alt="Hello" />
          </div>

          <button className="btn-sm bg-white ml-auto">Login</button>
          <div>
            <AiOutlineMenu size={40} className="text-white cursor-pointer" />
          </div>
        </header>

        {/* desktop nav */}

        <header className="hidden lg:flex justify-between z-50">
          <div className="w-32">
            <img src={Logo} alt="" />
          </div>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="nav-link">
                Download
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Nitro
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Discover
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Safety
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Careers
              </a>
            </li>
          </ul>
          <button className="btn-sm bg-white">Login</button>
        </header>
      </div>
    </section>
  );
};

export default Header;
