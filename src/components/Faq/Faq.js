import React from "react";
import logo from "../../images/logo.png";
import faqImg from "../../images/faq-img.png";
import { Accordion } from "flowbite-react";

const Faq = () => {
  return (
    <div className="bg-lime-100/[.25] pb-8">
      <div className="flex justify-center pt-16">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="" />
      </div>
      <h2 className="text-3xl text-center font-bold text-gray-700 mt-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center mt-5 mb-1 text-gray-400">
        Produce can be called organic if it's certified to have grown on soil
        that had no
      </p>
      <p className="text-center mb-12 text-gray-400">
        prohibited substances applied for three years prior to harvest.
      </p>
      <div className="grid md:grid-cols-2 gap-16 md:w-9/12 mx-auto my-16 items-center">
        <div>
          <img src={faqImg} alt="" />
        </div>
        <div>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>What is meant by organic food?
</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-lime-500 dark:text-gray-400">
                Produce can be called organic if it's certified to have grown on soil that had no prohibited substances applied for three years prior to harvest.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
              What are examples of organic foods?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-lime-500 dark:text-gray-400">
                These products include fruits, vegetables, grains, dairy products such as milk and cheese, and meat.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
              Why eating organic is important?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-lime-500 dark:text-gray-400">
                Eating organic reduces the amount of chemicals in your diet namely persistent pesticides.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
