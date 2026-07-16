"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiMenu,
  FiHome,
  FiBookOpen,
  FiInfo,
  FiLogIn,
  FiLogOut,
  FiPlus,
} from "react-icons/fi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import { BsFillGearFill } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

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
            {session && (
              <>
                <li>
                  <Link href="/add-courses">
                    <FiPlus /> Add Courses
                  </Link>
                </li>
                <li>
                  <Link href="/manage-courses">
                    <BsFillGearFill /> Manage Courses
                  </Link>
                </li>
              </>
            )}
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
          {session && (
            <>
              <li>
                <Link href="/add-courses">
                  <FiPlus /> Add Courses
                </Link>
              </li>
              <li>
                <Link href="/manage-courses">
                  <BsFillGearFill /> Manage Courses
                </Link>
              </li>
            </>
          )}
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
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-primary mr-4"></span>
        ) : session ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-2"
            >
              <div className="w-10 rounded-full bg-base-300">
                <Image
                  width={60}
                  height={60}
                  src={session.user.image || "/default-avatar.png"}
                  alt={session.user.name || "User Avatar"}
                  className="object-cover"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-content/5"
            >
              <li className="px-4 py-2 font-bold text-xs truncate max-w-full text-base-content/60">
                {session.user.email}
              </li>
              <div className="divider my-0.5"></div>
              <li>
                <button
                  onClick={handleSignOut}
                  className="text-error font-medium"
                >
                  <FiLogOut /> Log out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className="btn btn-ghost hidden sm:flex items-center gap-2"
            >
              <FiLogIn className="h-4 w-4" /> Log in
            </Link>
            <Link href="/signup" className="btn btn-primary">
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
