"use client";

import { authClient } from "@/lib/auth-client"; 
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
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, "กรุณากรอกชื่อของคุณ"), 
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง"),
  password: z.string().min(8, "รหัสผ่อนไม่ควรน้อยกว่า 8 ตัวอักษร"),
});

const SignUP01Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (form: z.infer<typeof formSchema>) => {

    await authClient.signUp.email({
        name:form.name, // user display name
        email:form.email, // user email address
        password:form.password, // user password -> min 8 characters by default
        callbackURL: "/login" // A URL to redirect to after the user verifies their email (optional)
    }, {
        onRequest: (ctx) => {
            console.log(ctx.body);
        },
        onSuccess: (ctx) => {
            console.log(ctx.data);
            router.replace("/login");
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
});

  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full flex flex-col items-center">
        
        <p className="mt-4 text-xl font-bold tracking-tight">
          Sign Up to Shadcn UI Blocks
        </p>

        <div className="my-7 w-full flex items-center justify-center overflow-hidden">
          <Separator />
        </div>

        <Form {...form}>
          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="w-full"
                      {...field}
                    />
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
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 w-full">
              Comfirm Sign Up
            </Button>
          </form>
        </Form>

        <div className="mt-5 space-y-5">
          <p className="text-sm text-center">
            you already have an account?
            <Link href="/login" className="ml-1 underline text-muted-foreground">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default SignUP01Page;
