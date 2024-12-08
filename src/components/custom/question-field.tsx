import React, { ReactNode } from "react";
import QBox from "./q-box";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { questionFormSchema } from "@/validations/onboardingValidationSchema";
import { z } from "zod";
import { Control } from "react-hook-form";
import { PhoneInput } from "./input-phone";
import { Textarea } from "../ui/textarea";
import Combobox from "../ui/combobox";
import InputTriple from "./input-triple";
import InputFile from "./input-file";

type QuestionFormValues = z.infer<typeof questionFormSchema>;

interface QuestionFieldProps {
  children: ReactNode;
  className?: string;
  formControl: Control<QuestionFormValues>;
  fieldName: keyof QuestionFormValues;
  variant?: string;
  label: string;
  placeholder?: string;
}

const QuestionField: React.FC<QuestionFieldProps> = ({
  children,
  className = "",
  formControl,
  fieldName,
  variant = "default",
  label,
  placeholder = "",
}: QuestionFieldProps) => {
  if (variant === "textarea") {
  }

  return (
    <div className={`form-field ${className}`}>
      <QBox />
      <div className="w-full">
        <FormField
          control={formControl}
          name={fieldName}
          render={({ field }) => (
            <FormItem className="form-item">
              <div className="form-label-desc">
                <FormLabel className="form-label">{label}</FormLabel>
                <FormDescription className="form-desc">
                  {children}
                </FormDescription>
              </div>
              <FormControl>
                {variant === "textarea" ? (
                  <Textarea
                    placeholder={placeholder}
                    {...field}
                    value={typeof field.value === "string" ? field.value : ""}
                  />
                ) : variant === "trinput" ? (
                  <InputTriple />
                ) : variant === "location" ? (
                  <div className="flex items-center justify-center gap-4">
                    <Combobox />
                    <Combobox />
                    <Combobox />
                  </div>
                ) : variant === "phone" ? (
                  <PhoneInput />
                ) : variant === "file" ? (
                  <InputFile />
                ) : !variant || variant === "default" ? (
                  <Input
                    placeholder={placeholder}
                    {...field}
                    value={typeof field.value === "string" ? field.value : ""}
                  />
                ) : (
                  <Input
                    placeholder={placeholder}
                    {...field}
                    value={typeof field.value === "string" ? field.value : ""}
                  />
                )}
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default QuestionField;
