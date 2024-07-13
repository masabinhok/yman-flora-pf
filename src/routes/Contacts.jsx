import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { doll } from "../assets/image";
import Hero from "../components/Hero";
const Contacts = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Navbar />

      <Hero
        title="Contact me!"
        subtitle="  How would you like to contact me? Fill the form or email me, don't
            be shyyyy!"
        extra=" oooh too excited, I see!"
        imgURL={doll}
      />

      <div className="flex justify-start items-start pb-[96px]  max-w-[1320px] w-full p-5 gap-5 max-md:flex-col">
        <div className="flex-1">
          <form
            className="flex flex-col gap-4 max-w-[800px] w-full font-mono "
            action=""
          >
            <div className="flex gap-2 w-ful">
              <input
                className="w-full rounded-xl bordre-none outline-none p-5"
                type="text"
                placeholder="Your name"
              />
              <input
                className="w-full rounded-xl bordre-none outline-none p-5"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="w-full ">
              <textarea
                className="w-full h-[200px] resize-none rounded-xl border-none outline-none p-5"
                placeholder="Your message "
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-5 bg-slate-100 rounded-xl pointer cursor"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="flex flex-col font-mono py-10 gap-5">
            <div>
              {" "}
              <p>Or you can email me at: </p>
              <span className="underline text-yblue hover:text-green-500">
                ydhero4@gmail.com
              </span>
            </div>
            <div>
              {" "}
              <p>I live here in</p>
              <span className="underline text-yblue hover:text-green-500">
                Brampton, Canada
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img
            className="max-w-[400px] max-md:hidden"
            src={doll}
            alt="i am a smiley"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
