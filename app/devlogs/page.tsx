import React from "react";
import BlogCards from "../components/organisms/BlogCards";

const page = () => {
  return (
    <main className="container mx-auto">
      {/* @ts-expect-error Server Component */}
      <BlogCards category="Devlogs" />
    </main>
  );
};

export default page;
