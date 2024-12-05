import React from "react";
import { Input } from "../ui/input";

const InputFile = () => {
  return (
    <Input
      className="bg-quaternary-alt"
      type="file" // Enable file upload
      variant="file"
      placeholder="Select a file"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) {
          console.log("Selected file:", file);
        }
      }}
    />
  );
};

export default InputFile;
