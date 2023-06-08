import React from "react";
import BlogCards from "../components/organisms/BlogCards";

const page = () => {
  return (
    <main className="container mx-auto">
      {/* @ts-expect-error Server Component */}
      <BlogCards category="Projects" />
    </main>
  );
};

export default page;
