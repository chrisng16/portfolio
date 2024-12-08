"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Icons } from "./Icons";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { RecaptchaResponse } from "@/app/api/recaptcha/route";

const FormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .max(200, {
      message: "Message must be less than 200 characters.",
    })
    .min(10, {
      message: "Message must be more than 10 characters.",
    }),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
    reValidateMode: "onBlur",
  });

  const verifyWithRecaptcha = async () => {
    if (!executeRecaptcha) {
      return { success: false, message: "Recaptcha not available" };
    }

    const responseToken = await executeRecaptcha("inquirySubmit");
    const res = await fetch("/api/recaptcha", {
      method: "POST",
      body: JSON.stringify({ responseToken }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();

    return result as RecaptchaResponse;
  };

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const verified = await verifyWithRecaptcha();
      if (!verified.success) {
        throw new Error(verified.message);
      }
      setIsLoading(true);
      const res = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      if (res.status !== 200) {
        throw new Error(`Response status: ${res.status}`);
      }
      const result = await res.json();
      console.log(result);
      toast({
        title: "Inquiry Submitted",
        description: result.message,
      });
      form.reset();
      setIsLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to Submit Inquiry",
        description: (error as Error).message,
      });
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto h-auto max-h-screen w-full max-w-xl rounded border border-black/20 bg-transparent p-6 shadow-lg backdrop-blur dark:border-white/20 dark:bg-black/30">
      <h2 className="mx-auto text-center text-2xl md:text-3xl">Contact Form</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center space-y-6"
        >
          <div className="flex w-full items-start gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="border-black/30 dark:border-white/30"
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="border-black/30 dark:border-white/30"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="border-black/30 dark:border-white/30"
                    placeholder="Message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isLoading || !form?.formState.isValid}
            className="min-w-16"
          >
            {isLoading ? <Icons.LoadingSpinner /> : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default ContactForm;
