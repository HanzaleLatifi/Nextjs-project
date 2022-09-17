import { useAuth, useAuthActions } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";

function Header() {
  const { user } = useAuth();
  const dispatch=useAuthActions();
  return (
    <header className="w-full shadow-lg mb-8">
      <nav className="flex px-8 py-2">
        <ul className="flex gap-x-4">
          <li>
            <Link href="/">
              <a className="block p-2">صفحه اصلی</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a className="block p-2">بلاگ</a>
            </Link>
          </li>
        </ul>

        <div className="mr-auto flex gap-x-4">
          {user ? (
            <>
            
             <Link href="/profile">
              <a className="block p-2">پروفایل</a>
            </Link>
            <button onClick={()=>dispatch({type:"LOGOUT"})}>خروج</button>
            </>
           
          ) : (
            <>
              <Link href="/signup">
                <a className="block p-2">ثبت نام</a>
              </Link>
              <Link href="/login">
                <a className="block p-2">ورود</a>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
