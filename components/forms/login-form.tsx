import React from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";

import IconMail from "@/public/assets/images/icon-email.svg";
import IconLock from "@/public/assets/images/icon-password.svg";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-y-6">
      <Input
        label="Email address"
        placeholder="e.g. alex@email.com"
        icon={<IconMail />}
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        type="password"
        icon={<IconLock />}
      />
      <Button block>Login</Button>
      <div className="text-center text-grey">
        <span>Don't have an account?</span>{" "}
        <Link className="text-primary" href="/register">
          Create account
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
