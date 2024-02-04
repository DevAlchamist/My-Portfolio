import Image from "next/image";
import React from "react";
import img1 from "../../Image/1702226533098.jpg";
import Projects from "../Components/Projects";
import Skill from "../Components/Skill";

const HomePage = () => {
  return (
    <div>
      <div className="h-full bg-gray-200 p-8">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div class="p-16">
            <div class="p-8 bg-white shadow mt-24">
              <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="grid grid-cols-3 text-center md:order-first mt-20 md:mt-0"></div>
                <div class="relative">
                  <div class="w-52 h-52 bg-indigo-100 border border-gray-300 overflow-hidden mx-auto rounded-full dark:shadow-gray-600 shadow-xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                    <Image src={img1} alt="" className=""></Image>
                  </div>
                </div>
              </div>
              <div class="mt-[150px] text-center pb-12">
                <h1 class="text-4xl font-medium text-gray-700">
                  Shubhanshu Nayak,
                  <span class="font-light text-gray-500">18</span>
                </h1>
                <p class="font-light text-gray-600 mt-3">Delhi, India</p>
                <p class="mt-8 text-gray-500">
                  Full stack Developer | M.E.R.N Developer
                </p>
                <p class="mt-2 text-gray-500">Self Taught</p>
              </div>
              <div class="pt-12 border-t flex flex-col justify-center">
                <p class="text-gray-600 text-center font-light lg:px-16">
                  Hello! I am Shubhanshu Nayak, a skilled Full Stack developer
                  proficient in React.js, Express.js, Node.js, MongoDB etc. I
                  excel in creating clean, responsive designs and am dedicated
                  to delivering seamless user experiences. Lets innovate
                  together in this ever-evolving landscape
                </p>
                <div className="flex justify-center items-center">
                  <a
                    target="_blank"
                    href="https://twitter.com/irl_introvert06"
                    class="text-indigo-500 py-2 px-4 drop-shadow-xl font-medium mt-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/shubhanshu-nayak-9332562a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    class="text-indigo-500 py-2 px-4 drop-shadow-xl font-medium mt-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="40"
                      height="40"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0078d4"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                      ></path>
                      <path
                        d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/DevAlchamist"
                    class="text-indigo-500 py-2 px-4 drop-shadow-xl font-medium mt-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="40"
                      height="40"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="pt-12 border-t flex flex-col justify-center">
                <Projects />
              </div>
              <div class="pt-12 border-t flex flex-col justify-center">
                <Skill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
