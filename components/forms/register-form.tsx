"use client";
import { useState, FormEvent } from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";

import IconMail from "@/public/assets/images/icon-email.svg";
import IconLock from "@/public/assets/images/icon-password.svg";
import { supabase } from "@/lib/utils";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirm) {
      console.log("Passwords do not match");
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log("error", error);
    } else {
      router.push("/login");
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
        label="Create password"
        placeholder="At least .8 characters"
        icon={<IconLock />}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        label="Confirm password"
        placeholder="At least .8 characters"
        icon={<IconLock />}
        type="password"
        onChange={(e) => setConfirm(e.target.value)}
      />
      <span className="body-s text-grey">
        Password must contain at least 8 characters
      </span>
      <Button block>Login</Button>
      <div className="text-center text-grey">
        <span>Already have an account?</span>{" "}
        <Link className="text-primary" href="/login">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
