
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { Sparkles } from "lucide-react";

const Footer = () => {
  const navlinks = [
    {
      name: "Refer & Earn",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Resources",
      link: "/resources",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Terms",
      link: "/terms",
    },
    {
      name: "Privacy",
      link: "/privacy",
    },
    {
      name: "Cookies",
      link: "/cookies",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "Support",
      link: "/support",
    },
    {
      name: "Careers",
      link: "/careers",
    },
    {
      name: "Press",
      link: "/press",
    },
    {
      name: "Legal",
      link: "/legal",
    },
    {
      name: "Affiliates",
      link: "/affiliates",
    },
    {
      name: "Mobile App",
      link: "/mobile-app",
    },
    {
      name: "Referal Program",
      link: "/referal-program",
    },
    {
      name: "Referral Benefits",
      link: "/referral-benefits",
    },
    {
      name: "Login",
      link: "/signin",
    },
    {
      name: "Signup",
      link: "/signup",
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-blue-900 to-blue-600 text-white py-6 px-4 shadow-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
            <h1 className="text-xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Francis Xavier
            </h1>
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
          </div>
          <p className="text-sm text-gray-300 mt-1">Innovating the Future</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:justify-center text-sm">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          {[
            ["Facebook", "https://facebook.com"],
            ["Twitter", "https://twitter.com"],
            ["Instagram", "https://instagram.com"],
            ["LinkedIn", "https://linkedin.com"],
          ].map(([name, link], index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-transform transform hover:scale-110"
              aria-label={name}
            >
              {name === "Facebook" && (
                <Facebook className="text-white hover:text-gray-300" />
              )}
              {name === "Twitter" && (
                <Twitter className="text-white hover:text-gray-300" />
              )}
              {name === "Instagram" && (
                <Instagram className="text-white hover:text-gray-300" />
              )}
              {name === "LinkedIn" && (
                <LinkedIn className="text-white hover:text-gray-300" />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-300 mt-6">
        Francis Xavier &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
