"use client";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";

import IconMail from "@/public/assets/images/icon-email.svg";
import IconLock from "@/public/assets/images/icon-password.svg";
import { supabase } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { RegisterFormSchema } from "@/lib/schemas";
import { RegisterForm } from "@/lib/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit: SubmitHandler<RegisterForm> = async (formData) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;

      toast.success("Confirmation email sent! Please check your inbox.");
      router.push("/login");
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
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
        label="Create password"
        placeholder="At least .8 characters"
        icon={<IconLock />}
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />
      <Input
        label="Confirm password"
        placeholder="At least .8 characters"
        icon={<IconLock />}
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <span className="body-s text-grey">
        Password must contain at least 8 characters
      </span>
      <Button type="submit" block>
        Register
      </Button>
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
