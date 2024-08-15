"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { toast } from "sonner"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { submitMail } from "@/app/actions/send-email";

export const contactSchema = z.object({
  subject: z.string().min(2, {
    message: "You must provide a subject for this email",
  }),
  name: z.string().min(2, {
    message: "Whom should we address this email to as a follow-up?",
  }),
  email: z.string().email({
    message: "Please provide a valid email address",
  }),
  quantity: z.number().min(4, {message: "There must be a quantity"}),
  minerals: z
    .array(z.string())
    .refine((value) => value.some((mineral) => mineral), {
      message: "Please select at least one mineral",
    }),
  message: z.string().min(2, {
    message: "We would like to hear from you what you have to say",
  }),
});

const minerals = [
  {
    id: "Gold",
    label: "Gold",
  },
  {
    id: "Coal",
    label: "Coal",
  },
  {
    id: "Tin",
    label: "Tin",
  },
  {
    id: "Limestone",
    label: "Limestone",
  },
  {
    id: "Iron Ore",
    label: "Iron Ore",
  },
  {
    id: "Lead",
    label: "Lead",
  },
  {
    id: "Zinc",
    label: "Zinc",
  },
  {
    id: "Bauxite",
    label: "Bauxite",
  },
  {
    id: "Gypsum",
    label: "Gypsum",
  },
  {
    id: "Marble",
    label: "Marble",
  },
  {
    id: "Granite",
    label: "Granite",
  },
  {
    id: "Kaolin",
    label: "Kaolin",
  },
  {
    id: "Tantalite",
    label: "Tantalite",
  },
  {
    id: "Columbite",
    label: "Columbite",
  },
  {
    id: "Barite",
    label: "Barite",
  },
  {
    id: "Dolomite",
    label: "Dolomite",
  },
  {
    id: "Salt",
    label: "Salt",
  },
  {
    id: "Phosphate",
    label: "Phosphate",
  },
  {
    id: "Uranium",
    label: "Uranium",
  },
  {
    id: "Bitumen",
    label: "Bitumen",
  },
  {
    id: "Clay",
    label: "Clay",
  },
];

export default function ContactForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      minerals: ["Gold", "Tin"],
      quantity: 4,
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const res = await submitMail(values);

    if (res.data.code === 200) {
      form.reset();
      toast("Email was sent successfully.")
    }

    console.log(res);
  }

  return (
    <section className="w-screen py-24">
      <h1 className="mb-6 font-bold text-4xl container mx-auto">GET IN TOUCH</h1>

      <div className="container mx-auto grid grid-col-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="What is your name" {...field} />
                    </FormControl>
                    <FormDescription>Addressee Identifier.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="I want to enquire" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="4" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="minerals"
                render={({ field }) => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Minerals</FormLabel>
                      <FormDescription>
                        Select the items you want to get further information
                        about.
                      </FormDescription>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {minerals.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="minerals"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="I am enquiring to gain further insight as to how the exportation process works..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full lg:max-w-1/2" type="submit">
                Send Enquiry
              </Button>
            </form>
          </Form>
        </div>

        <div className="h-fit flex flex-col items-start space-y-2 border-dark border rounded-lg p-2.5">
          <li className="pt-6 flex items-center space-x-2.5 hover:text-lime-600 duration-300 ease-in-out">
            <FaLocationArrow className="w-4 h-4 flex-none" />
            <span className="block text-sm">
              Walure Building, Plot 75, Block 3B, Ogunnusi Rd, Grammar School
              Bus Stop, Ojodu Berger, Lagos, Nigeria.
            </span>
          </li>
          <li className="pt-6 flex items-center space-x-2.5 hover:text-lime-600 duration-300 ease-in-out">
            <FaPhone className="w-4 h-4 flex-none" />
            <span className="block text-sm">+234-810 909 5909</span>
          </li>
          <li className="pt-6 flex items-center space-x-2.5 hover:text-lime-600 duration-300 ease-in-out">
            <MdEmail className="w-4 h-4 flex-none" />
            <span className="block text-sm">consult@pureearth.com.ng</span>
          </li>
        </div>
      </div>
    </section>
  );
}
