import React from "react";
import BlogCards from "../components/organisms/BlogCards";

const page = () => {
  return (
    <main className="container mx-auto">
      <h1>Projects</h1>
      {/* @ts-expect-error Server Component */}
      <BlogCards />
    </main>
  );
};

export default page;
