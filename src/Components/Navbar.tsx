import Link from "next/link";
import { BsFillGearFill } from "react-icons/bs";
import {
  FiMenu,
  FiHome,
  FiBookOpen,
  FiInfo,
  FiLogIn,
  FiPlus,
} from "react-icons/fi";
import { RiCustomerServiceFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiMenu className="h-6 w-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">
                <FiHome /> Home
              </Link>
            </li>
            <li>
              <Link href="/courses">
                <FiBookOpen /> Courses
              </Link>
            </li>
            <li>
              <Link href="/add-courses">
                <FiPlus />
                Add Courses
              </Link>
            </li>
            <li>
              <Link href="/manage-courses">
                <BsFillGearFill />
                manage Courses
              </Link>
            </li>
            <li>
              <Link href="/support">
                <RiCustomerServiceFill /> Help / Support
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <FiInfo /> About Us
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="text-3xl font-bold flex items-center gap-2 text-primary"
        >
          Skillzone
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <Link href="/">
              <FiHome className="mb-0.5" /> Home
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <FiBookOpen className="mb-0.5" /> Courses
            </Link>
          </li>
          <li>
            <Link href="/add-courses">
              <FiPlus />
              Add Courses
            </Link>
          </li>
          <li>
            <Link href="/manage-courses">
              <BsFillGearFill />
              manage Courses
            </Link>
          </li>
          <li>
            <Link href="/support">
              <RiCustomerServiceFill /> Help / Support
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <FiInfo className="mb-0.5" /> About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Link
          href="/login"
          className="btn btn-ghost hidden sm:flex items-center gap-2"
        >
          <FiLogIn className="h-4 w-4" /> Log in
        </Link>
        <Link href="/signup" className="btn btn-primary">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
