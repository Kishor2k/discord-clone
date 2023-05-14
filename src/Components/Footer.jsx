import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/logo.svg";
import Dropdown from "./Dropdown";
const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="wrapper pt-16 py-8">
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-6 pb-8 border-b border-b-discord-blue">
          <div className="space-y-4 col-span-2">
            <Dropdown />
            <ul className="flex gap-4 text-xl">
              <FaTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaFacebook className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />

              <FaTiktok className="cursor-pointer" />
            </ul>
          </div>
          {/* col */}
          <div className="space-y-4">
            <p className="text-discord-blue">Product</p>
            <ul className="grid gap-2">
              <li>
                <a href="" className="nav-link">
                  Download
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Nitro
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Status
                </a>
              </li>
            </ul>
          </div>
          {/* col */}
          <div className="space-y-4">
            <p className="text-discord-blue">Company</p>
            <ul className="grid gap-2">
              <li>
                <a href="" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Jobs
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Brand
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Newsroom
                </a>
              </li>
            </ul>
          </div>
          {/* col */}
          <div className="space-y-4">
            <p className="text-discord-blue">Resources</p>
            <ul className="grid gap-2">
              <li>
                <a href="" className="nav-link">
                  College
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Support
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Safety
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Feedback
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Build
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  StreamKit
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Creators
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Community
                </a>
              </li>
            </ul>
          </div>
          {/* col */}
          <div className="space-y-4">
            <p className="text-discord-blue">Policies</p>
            <ul className="grid gap-2">
              <li>
                <a href="" className="nav-link">
                  Terms
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Privacy
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Cookie Settings
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Acknowledgements
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Licenses
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Moderation
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Company Information
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between py-8">
          <img src={Logo} alt="" width={150} />
          <button className="btn-sm bg-discord-blue hover:bg-discord-blue-hover">
            Sign up
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
