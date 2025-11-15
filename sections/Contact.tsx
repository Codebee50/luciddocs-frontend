"use client";

import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";
import Link from "next/link";
import { appConfig } from "@/constants";
import axios from "axios";
import { sendEmail } from "@/utils/utils";
import { toast } from "sonner";
import CircleSpinner from "@/components/loaders/CircleSpinner";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    const html_content = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const result = await sendEmail(
      "onuhudoudo@gmail.com",
      "New Contact Form Submission",
      html_content
    );
    if (result) {
      toast.success("Message sent successfully");
    } else {
      toast.error("Failed to send email");
    }
    setIsLoading(false);
  };

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

        <Link
          href={`mailto:${appConfig.email}`}
          className="flex flex-row items-center sm:mt-10 mt-5 gap-4 cursor-pointer"
        >
          <div className="rounded-full bg-radial from-senary/10 to-quaternary p-4">
            <FiMail className="text-senary" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-white font-medium">Email</h3>
            <p className="text-denary/70 text-sm">{appConfig.email}</p>
          </div>
        </Link>

        <Link
          href="https://calendar.notion.so/meet/kyrianonuh/tb1o53pca"
          className="flex flex-row items-center sm:mt-10 mt-5 gap-4 cursor-pointer"
        >
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
        <form
          className="border border-denary/10 p-6 rounded-lg min-h-[200px] flex flex-col gap-7"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Your Email</label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full outline-none bg-quaternary/30 border border-quaternary/80 rounded-lg py-2 px-4 text-sm text-denary"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Full Name</label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full outline-none bg-quaternary/30 border border-quaternary/80 rounded-lg py-2 px-4 text-sm text-denary"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Message</label>
            <textarea
              placeholder="Write your message here"
              rows={4}
              className="w-full outline-none bg-quaternary/30 border border-quaternary/80 rounded-lg py-3 px-4 text-sm text-denary"
              name="message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-senary text-bg-primary rounded-lg py-2 px-4 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? <CircleSpinner /> : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
