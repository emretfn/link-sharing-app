"use client";
import { useState, FormEvent } from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";

import IconMail from "@/public/assets/images/icon-email.svg";
import IconLock from "@/public/assets/images/icon-password.svg";
import { supabase } from "@/lib/utils";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
    } else {
      router.push("/dashboard/links");
    }
  };

  return (
    <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
      <Input
        label="Email address"
        placeholder="e.g. alex@email.com"
        icon={<IconMail />}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        type="password"
        icon={<IconLock />}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button block type="submit">
        Login
      </Button>
      <div className="text-center text-grey">
        <span>Don&apos;t have an account? </span>{" "}
        <Link className="text-primary" href="/register">
          Create account
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
