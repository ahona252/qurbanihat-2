"use client";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "keep-react";





const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  }

  return (
    <div className="border-b px-2 bg-gray-200">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src="/icon.webp"
            alt="logo"
            loading="eager"
            width={60}
            height={60}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-2xl">QurbaniHat</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/animals"}>All Animals</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center text-sm gap-5">
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <button className="bg-blue-950 text-white rounded-2xl p-2.5">Register</button>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">LogOut</Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;