import LoginForm from "@/components/forms/login-form";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-y-10">
      {/* Caption */}
      <div className="flex flex-col gap-y-2">
        <h1 className="heading-m">Login</h1>
        <p className="text-grey">
          Add your details below to get back into the app
        </p>
      </div>
      {/* Form */}
      <div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Page;
