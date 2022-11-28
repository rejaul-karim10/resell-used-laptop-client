import React from "react";

const Blog = () => {
  return (
    <section className="h-[800px] flex justify-center items-center">
      <div className=" flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl text-primary">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8">Most important question</p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-primary font-bold lg:text-lg">
              What are the different ways to manage a state in a React
              application?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-dark-400">
            In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.The state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. The code within them executes and "dissapears" once the execution is finished.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-primary font-bold lg:text-lg">
              How does prototypical inheritance work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-dark-400">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-primary font-bold lg:text-lg">
              What is a unit test? Why should we write unit tests?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-dark-400">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-primary font-bold lg:text-lg">
              React vs. Angular vs. Vue?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-dark-400">
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
