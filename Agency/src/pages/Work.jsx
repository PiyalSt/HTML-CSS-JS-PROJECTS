import React from "react";
import Title from "../components/Title";
import { NavLink } from "react-router";
import taskManage from "../assets/task-management.png";
import saasLangding from "../assets/saas-langding.png";
import appDesign from "../assets/app-design.png";
import langdingPage from "../assets/langding-page.png";
import dashBoard from "../assets/dashboard.png";
import webApp from "../assets/web-app.png";

const Work = () => {
  return (
    <>
      <div id="Workpage" className="bg-[#F3F3F3]">
        <div id="wrapper">
          <div>
            <div className="flex justify-center pt-40">
              <div className="text-center w-2xl">
                <Title
                  title={"Our Recent Work"}
                  subTitle={
                    "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."
                  }
                />
              </div>
            </div>

            <div className="mt-12 flex justify-between">
              <NavLink
                className={({ isActive }) =>
                  `font-inter font-bold text-lg group-hover:text-white duration-300 ${isActive ? "text-primary" : "text-textColor"}`
                }
                to={"/"}
              >
                All
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-inter font-bold text-lg group-hover:text-white duration-300 ${isActive ? "text-primary" : "text-textColor"}`
                }
                to={"/mobile"}
              >
                Mobile Design
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-inter font-bold text-lg group-hover:text-white duration-300 ${isActive ? "text-primary" : "text-textColor"}`
                }
                to={"/web-design"}
              >
                Web design
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-inter font-bold text-lg group-hover:text-white duration-300 ${isActive ? "text-primary" : "text-textColor"}`
                }
                to={"/branding"}
              >
                Branding
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-inter font-bold text-lg group-hover:text-white duration-300 ${isActive ? "text-primary" : "text-textColor"}`
                }
                to={"/illustration"}
              >
                Illustration
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-inter font-bold text-lg group-hover:text-white duration-300 ${isActive ? "text-primary" : "text-textColor"}`
                }
                to={"/digital"}
              >
                Digital Marketing
              </NavLink>
            </div>

            <div className="py-20 flex flex-wrap justify-center lg:justify-between gap-12">
              <div className="p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300">
                <div className="flex justify-center">
                  <img src={taskManage} alt="" />
                </div>

                <div className="mt-10 flex flex-col gap-5 text-center">
                  <h4 className="font-inter font-bold text-2xl text-secondary">
                    Task Management App
                  </h4>
                  <p className="font-inter font-normal text-base text-textColor">
                    This is a task management application that can help you be more 
                  </p>
                </div>
              </div>
              <div className="p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300">
                <div className="flex justify-center">
                  <img src={saasLangding} alt="" />
                </div>

                <div className="mt-10 flex flex-col gap-5 text-center">
                  <h4 className="font-inter font-bold text-2xl text-secondary">
                    Task Management App
                  </h4>
                  <p className="font-inter font-normal text-base text-textColor">
                    This is a task management application that can help you be more 
                  </p>
                </div>
              </div>
              <div className="p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300">
                <div className="flex justify-center">
                  <img src={appDesign} alt="" />
                </div>

                <div className="mt-10 flex flex-col gap-5 text-center">
                  <h4 className="font-inter font-bold text-2xl text-secondary">
                    Task Management App
                  </h4>
                  <p className="font-inter font-normal text-base text-textColor">
                    This is a task management application that can help you be more 
                  </p>
                </div>
              </div>
              <div className="p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300">
                <div className="flex justify-center">
                  <img src={langdingPage} alt="" />
                </div>

                <div className="mt-10 flex flex-col gap-5 text-center">
                  <h4 className="font-inter font-bold text-2xl text-secondary">
                    Task Management App
                  </h4>
                  <p className="font-inter font-normal text-base text-textColor">
                    This is a task management application that can help you be more 
                  </p>
                </div>
              </div>
              <div className="p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300">
                <div className="flex justify-center">
                  <img src={dashBoard} alt="" />
                </div>

                <div className="mt-10 flex flex-col gap-5 text-center">
                  <h4 className="font-inter font-bold text-2xl text-secondary">
                    Task Management App
                  </h4>
                  <p className="font-inter font-normal text-base text-textColor">
                    This is a task management application that can help you be more 
                  </p>
                </div>
              </div>
              <div className="p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300">
                <div className="flex justify-center">
                  <img src={webApp} alt="" />
                </div>

                <div className="mt-10 flex flex-col gap-5 text-center">
                  <h4 className="font-inter font-bold text-2xl text-secondary">
                    Task Management App
                  </h4>
                  <p className="font-inter font-normal text-base text-textColor">
                    This is a task management application that can help you be more 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
