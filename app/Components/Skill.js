import React from "react";

const Skill = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              What I know
            </h1>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Frontend
              </h2>
              <div className="flex flex-wrap gap-2">
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-red-400 rounded">
                  React
                </div>
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg rounded">
                  Next js
                </div>
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-blue-400 rounded">
                  HTML/CSS
                </div>
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-green-400 rounded">
                  Javascript
                </div>
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-pink-400 rounded">
                  Tailwind css
                </div>
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-teal-400 rounded">
                  Bootstrap
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Backend
              </h2>
              <div className="flex flex-wrap gap-2">
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-green-400 rounded">
                  Nodejs
                </div>
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-pink-400 rounded">
                  Express js
                </div>
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-teal-400 rounded">
                  Authentication
                </div>
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-yellow-400 rounded">
                  Authorization
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Database & Deployment
              </h2>
              <div className="flex flex-wrap gap-2">
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-teal-400 rounded">
                  MongoDB
                </div>
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-pink-400 rounded">
                  Github
                </div>
                <div className="w-fit p-1 border text-base bg-slate-200 shadow-lg border-yellow-400 rounded">
                  Vercel
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
