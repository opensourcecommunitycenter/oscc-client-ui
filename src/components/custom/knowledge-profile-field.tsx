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
import knowledgeProfileValidationSchema from "@/validations/knowledgeProfileValidationSchema";
import { z } from "zod";
import { Control } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

type QuestionFormValues = z.infer<typeof knowledgeProfileValidationSchema>;

interface KnowledgeProfileFieldProps {
  children: ReactNode;
  className?: string;
  formControl: Control<QuestionFormValues>;
  fieldName: keyof QuestionFormValues;
  variant?: string;
  label: string;
  placeholder?: string;
}

const KnowledgeProfileField: React.FC<KnowledgeProfileFieldProps> = ({
  children,
  className = "",
  formControl,
  fieldName,
  variant = "default",
  label,
}: KnowledgeProfileFieldProps) => {
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
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      All new messages
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Direct messages and mentions
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default KnowledgeProfileField;
