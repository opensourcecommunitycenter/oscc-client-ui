import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { questionFormSchema } from "@/validations/onboardingValidationSchema";
import { Input } from "../ui/input";

interface InputName {
  fullName: string;
  groupName: string;
  contactNumber: string;
}

interface QuestionInput {
  name: keyof InputName;
  label: string;
  description: string;
  placeholder?: string;
  // variant: string;
  // stack: string;
}

const QuestionInput: React.FC<QuestionInput> = ({
  name,
  label,
  description,
  placeholder,
}: QuestionInput) => {
  // let variantType = "";
  // let stackValue = "";

  // // variant handle
  // if (variant === "secondary") {
  //   variantType = "variant";
  // }

  // // stack handle
  // if (stack === "secondary") {
  //   stackValue = "stack";
  // }
  const questionForm = useForm<z.infer<typeof questionFormSchema>>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      fullName: "",
      groupName: "",
      contactNumber: "",
    },
  });
  return (
    <div className="flex justify-center items-start gap-8 border-b">
      <div
        className={
          "w-24 aspect-square flex items-center justify-center bg-question text-question-foreground text-5xl font-serif rounded-xl font-light"
        }
      >
        Q
      </div>
      <div className="w-full">
        <FormField
          control={questionForm.control}
          name={`${name}`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormDescription>{description}</FormDescription>
              <FormControl>
                <Input
                  className="bg-[#ECECEC]"
                  placeholder={placeholder || ""}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default QuestionInput;
