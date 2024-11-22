"use client";

import { useNavigate } from "react-router-dom";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import logo from "../Images/SK_BLU.svg";

export function FooterPart() {
  const navigate = useNavigate();

  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/" // Keep as is for external link
              src={logo}
              alt="Logo"
              name="SKAdventures"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Footer.Link onClick={() => navigate("/services")}>Services</Footer.Link>
                <Footer.Link onClick={() => navigate("/rentals")}>Rentals</Footer.Link>
                <Footer.Link onClick={() => navigate("/pawana-camping")}> Pawana Camping</Footer.Link>
                <Footer.Link onClick={() => navigate("/Panshet-camping")}> Panshet Camping</Footer.Link>

              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Stay Connected" />
              <Footer.LinkGroup col>
              <Footer.Link href="https://www.youtube.com/@SK.Adventures" target="_blank" rel="noopener noreferrer">YouTube</Footer.Link>
                <Footer.Link href="https://www.instagram.com/_skadventures" target="_blank" rel="noopener noreferrer">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link onClick={() => navigate("/cancellation-policy")} >Cancellation Policy</Footer.Link>
                <Footer.Link onClick={() => navigate("/terms-conditions")} >Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="/" by="SKAdventures™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rounded-full">
            <div className="duration-200 rounded-full transform hover:scale-110">
              <Footer.Icon href="https://www.instagram.com/_skadventures" target="_blank" rel="noopener noreferrer" icon={BsInstagram} />
            </div>
            <div className="duration-200 rounded-full transform hover:scale-110">
              <Footer.Icon href="https://www.youtube.com/@SK.Adventures" target="_blank" rel="noopener noreferrer" icon={BsYoutube} />
            </div>
            <div className="duration-200 rounded-full transform hover:scale-110">
              <Footer.Icon href="https://www.facebook.com/skadventures91" target="_blank" rel="noopener noreferrer" icon={BsFacebook} />
            </div>
            {/* <div className="duration-200 rounded-full transform hover:scale-110">
              <Footer.Icon href="#" icon={BsGithub} />
            </div> */}
          </div>
        </div>
      </div>
    </Footer>
  );
}
 