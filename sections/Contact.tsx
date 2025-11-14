import React from "react";
import { FiMail } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";
import Link from "next/link";
import { appConfig } from "@/constants";
const Contact = () => {
  return (
    <div
      className="section-container grid sm:grid-cols-2 gap-10 pt-10 scroll-mt-[70px]"
      id="contact"
    >
      <div className="flex flex-col gap-2">
        <h1 className="sm:text-4xl text-2xl font-clash gradient-text font-medium">
          Get in Touch
        </h1>
        <p className="text-denary/70 text-sm">
          Please fill out the form below and we&apos;ll get back to you as soon
          as possible.
        </p>

        <Link href={`mailto:${appConfig.email}`} className="flex flex-row items-center sm:mt-10 mt-5 gap-4 cursor-pointer">
          <div className="rounded-full bg-radial from-senary/10 to-quaternary p-4">
            <FiMail className="text-senary" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-white font-medium">Email</h3>
            <p className="text-denary/70 text-sm">{appConfig.email}</p>
          </div>
        </Link>

        <Link href="https://calendar.notion.so/meet/kyrianonuh/tb1o53pca" className="flex flex-row items-center sm:mt-10 mt-5 gap-4 cursor-pointer">
          <div className="rounded-full bg-radial from-senary/10 to-quaternary p-4">
            <LuVideo className="text-senary" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-white font-medium">Book a Demo</h3>
            <p className="text-denary/70 text-sm max-w-[200px] line-clamp-1 text-ellipsis">
              https://calendar.notion.so/meet/kyrianonuh/tb1o53pca
            </p>
          </div>
        </Link>
      </div>

      <div>
        <form className="bg-radial  from-quaternary/30  to-senary/5 p-6 rounded-lg min-h-[200px] flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Your Email</label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full outline-none bg-quaternary/30 border border-quaternary/80 rounded-lg py-2 px-4 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Full Name</label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full outline-none bg-quaternary/30 border border-quaternary/80 rounded-lg py-2 px-4 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Message</label>
            <textarea
              placeholder="Write your message here"
              rows={4}
              className="w-full outline-none bg-quaternary/30 border border-quaternary/80 rounded-lg py-3 px-4 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-senary text-bg-primary rounded-lg py-2 px-4 text-sm cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
