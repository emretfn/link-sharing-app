import RegisterForm from "@/components/forms/register-form";

const Page = () => {
  return (
    <div className="flex flex-col gap-y-10">
      {/* Caption */}
      <div className="flex flex-col gap-y-2">
        <h1 className="heading-m">Create account</h1>
        <p className="text-grey">
          Let&apos;s get you started sharing your links!
        </p>
      </div>
      {/* Form */}
      <div>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default Page;
