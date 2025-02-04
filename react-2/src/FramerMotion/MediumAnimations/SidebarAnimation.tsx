import { motion } from "framer-motion";
import SidebarLogo from "../../assets/react.svg";
import { FaArrowAltCircleLeft, FaHome, FaSnapchat } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";
import { useState } from "react";

const VariantsSidebar = {
    open: {x: 0},
    closed: {x: "-100%"},
}

const SidebarAnimation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div>
      {/* Start Sidebar */}
      <motion.div 
      variants={VariantsSidebar}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3 }}
      className="bg-blue-950 fixed top-0 left-0 text-white w-[35%] py-5 px-2 min-h-screen ">
        <h2 className="flex items-center justify-between text-3xl">
          <span className="flex items-center">
            <img src={SidebarLogo} alt="" />
            <a href="/" className=" ">
              Sidebar
            </a>
          </span>
          <span>
            <FaArrowAltCircleLeft onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-4xl hover:text-teal-700" />
          </span>
        </h2>
        <hr className="mt-4" />
        <input
          className="border-1 border-solid border-white block w-full
            mt-5 p-2 rounded-1xl focus:outline-0 focus:caret-red-600"
          type="search"
          name="search"
          id="search"
          placeholder="Search ..."
        />
        <ul className="mt-6">
          <li>
            <a
              href=""
              className="flex p-4 mb-3 text-2xl rounded hover:bg-[#2196F3] gap-5 items-center"
            >
              <FaHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex p-4 mb-3 text-2xl rounded hover:bg-[#2196F3] gap-5 items-center"
            >
              <IoBookmarkSharp />
              <span>Bookmarks</span>
            </a>
          </li>
          <li className="flex justify-between p-4 items-center rounded hover:bg-[#2196F3]">
            <a
              href=""
              className="flex mb-3 text-2xl  gap-5 items-center"
            >
              <FaSnapchat />
              <span>Notifications</span>
            </a>
            <span className="text-3xl mb-2">{'>'}</span>
          </li>
        </ul>
      </motion.div>
      {/* End Sidebar */}
      <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-blue-700 font-bold outline-0 border-1 border-white border-solid text-white p-3 cursor-pointer"
      >Show Navbar</button>
    </div>
  );
};

export default SidebarAnimation;
