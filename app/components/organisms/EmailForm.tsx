"use client";

import { useState } from "react";

const EmailForm = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e?.preventDefault();
    window.location.href = `mailto:urbanscratcher@gmail.com?subject=${title}&body=${message} - From Joun's Weblog`;
  };

  const titleChangeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(value);
  };

  const messageChangeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(value);
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          name="title"
          placeholder="title"
          className="border"
          onChange={(e) => titleChangeHandler(e)}
        />
        <textarea
          name="text"
          placeholder="message"
          className="border"
          onChange={(e) => messageChangeHandler(e)}
        />
        <button type="submit" className="bg-slate-500 text-slate-50 px-2 py-1">
          Submit
        </button>
      </form>
    </>
  );
};

export default EmailForm;
