import { Spinner } from "flowbite-react";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spinner color="success" aria-label="Success spinner example" />
    </div>
  );
};

export default Loading;
