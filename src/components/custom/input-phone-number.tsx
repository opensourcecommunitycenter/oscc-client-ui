import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

const InputPhoneNumber = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[30%]">
        <Select>
          <SelectTrigger className="custom-input">
            <SelectValue
              className="placeholder:text-muted-foreground"
              placeholder="Country Code"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem className="custom-input" value="est">
                +91
              </SelectItem>
              <SelectItem className="custom-input" value="cst">
                +92
              </SelectItem>
              <SelectItem className="custom-input" value="cst">
                +93
              </SelectItem>
              <SelectItem className="custom-input" value="cst">
                +880
              </SelectItem>
              <SelectItem className="custom-input" value="cst">
                +94
              </SelectItem>
              <SelectItem className="custom-input" value="cst">
                +44
              </SelectItem>
              <SelectItem className="custom-input" value="mst">
                +1
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Input placeholder="1234567890" />
    </div>
  );
};

export default InputPhoneNumber;
