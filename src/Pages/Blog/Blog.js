import React from "react";

const Blog = () => {
  return (
    <section className="h-[800px] flex justify-center items-center">
      <div className=" flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl text-primary">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8">
          Sagittis tempor donec id vestibulum viverra. Neque condimentum primis
          orci at lacus amet bibendum.
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-primary font-bold lg:text-lg">
              What are the different ways to manage a state in a React
              application?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-dark-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-primary font-bold lg:text-lg">
            How does prototypical inheritance work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-dark-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-primary font-bold lg:text-lg">
            What is a unit test? Why should we write unit tests?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-dark-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-primary font-bold lg:text-lg">
            React vs. Angular vs. Vue?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-dark-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
