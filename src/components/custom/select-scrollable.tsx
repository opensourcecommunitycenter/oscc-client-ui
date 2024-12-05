import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectScrollable = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <Select>
        <SelectTrigger className="custom-input">
          <SelectValue
            className="placeholder:text-muted-foreground"
            placeholder="Select Country"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem className="custom-input" value="est">
              India
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Pakistan
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Afghanistan
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Bangladesh
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Sri Lanka
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              United Kingdom
            </SelectItem>
            <SelectItem className="custom-input" value="mst">
              United States
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="custom-input">
          <SelectValue
            className="placeholder:text-muted-foreground"
            placeholder="Select State"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem className="custom-input" value="est">
              Karnataka
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Uttar Pradesh
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Rajistan
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Punjab
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Sindh
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Kashmir
            </SelectItem>
            <SelectItem className="custom-input" value="mst">
              Texas
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="custom-input">
          <SelectValue
            className="placeholder:text-muted-foreground"
            placeholder="Select City"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem className="custom-input" value="est">
              Delhi
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              London
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Karachi
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              New York
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Colombo
            </SelectItem>
            <SelectItem className="custom-input" value="cst">
              Dhaka
            </SelectItem>
            <SelectItem className="custom-input" value="mst">
              Kabul
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default SelectScrollable;
