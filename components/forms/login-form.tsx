"use client";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";

import IconMail from "@/public/assets/images/icon-email.svg";
import IconLock from "@/public/assets/images/icon-password.svg";
import { supabase } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/lib/schemas";
import { LoginForm } from "@/lib/types";

const LoginForm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginForm> = async (formData) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;

      router.push("/dashboard/links");
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email address"
        placeholder="e.g. alex@email.com"
        icon={<IconMail />}
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        type="password"
        icon={<IconLock />}
        {...register("password")}
        error={errors.password?.message}
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
