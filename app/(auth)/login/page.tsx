import Caption from "@/components/caption";
import LoginForm from "@/components/forms/login-form";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-y-10">
      {/* Caption */}
      <Caption
        title="Login"
        description="Add your details below to get back into the app"
      />
      {/* Form */}
      <div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Page;
