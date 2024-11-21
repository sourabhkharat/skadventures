import { Outlet } from "react-router-dom"; // Used for nested routes
import { NavBar } from "./NavBar";
import {FooterPart} from "./Footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-20">
        <Outlet /> 
      </main>
      <FooterPart/>
    </div>
  );
}
