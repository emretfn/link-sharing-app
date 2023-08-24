import React from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";

import IconMail from "@/public/assets/images/icon-email.svg";
import IconLock from "@/public/assets/images/icon-password.svg";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-y-6">
      <Input
        label="Email address"
        placeholder="e.g. alex@email.com"
        icon={<IconMail />}
      />
      <Input
        label="Create password"
        placeholder="At least .8 characters"
        icon={<IconLock />}
        type="password"
      />
      <Input
        label="Confirm password"
        placeholder="At least .8 characters"
        icon={<IconLock />}
        type="password"
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
