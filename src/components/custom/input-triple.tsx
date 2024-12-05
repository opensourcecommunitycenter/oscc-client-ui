import React from "react";
import { Input } from "../ui/input";

const InputTriple = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <Input
        placeholder="Skills"
        // {...field}
      />
      <Input
        placeholder="Knowledge"
        // {...field}
      />
      <Input
        placeholder="Attributes"
        // {...field}
      />
    </div>
  );
};

export default InputTriple;
