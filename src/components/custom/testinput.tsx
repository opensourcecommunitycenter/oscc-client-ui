import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { questionFormSchema } from "@/validations/onboardingValidationSchema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
const Testinput = () => {
  const form = useForm<z.infer<typeof questionFormSchema>>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      fullName: "",
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
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Full Legal Name</FormLabel>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormControl>
                <Input placeholder="ahmadiqbal@email.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default Testinput;
