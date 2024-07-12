import React from "react";
import logo from "../assets/pic/logo2.png";

export default function Footer() {
  return (
    <>
      <section className="relative overflow-hidden py-10 bg-pink-800">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-4 inline-flex items-center">
                  <img
                    src={logo}
                    alt=""
                    style={{ width: "40px", height: "46px" }}
                  />
                  <span className="ml-4 text-lg text-slate-50 font-bold">
                    AllSeasonProperties
                  </span>
                </div>
                <div>
                  <p className="mb-4 text-base text-slate-50">
                    Contact Us <br />
                    Toll Free - 1800 41 99099 <br />
                    9:30 AM to 6:30 PM (Mon-Sun) <br /> <br />
                    Email - feedback@allseasonproperties.com
                  </p>
                  <p className="text-sm text-slate-50">
                    &copy; Copyright 2024. All Rights Reserved by
                    AllSeasonProperties.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-slate-50">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-base font-medium text-slate-50 hover:text-slate-400"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-base font-medium text-slate-50 hover:text-gray-700"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-slate-50">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-base font-medium text-slate-50 hover:text-gray-700"
                      href="#"
                    >
                      Account
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-base font-medium text-slate-50 hover:text-gray-700"
                      href="#"
                    >
                      Help
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base font-medium text-slate-50 hover:text-gray-700"
                      href="#"
                    >
                      Customer Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-slate-50">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-base font-medium text-slate-50 hover:text-gray-700"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-base font-medium text-slate-50 hover:text-gray-700"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base font-medium text-slate-50 hover:text-gray-700"
                      href="#"
                    >
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
