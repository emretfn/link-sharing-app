import Caption from "@/components/caption";
import RegisterForm from "@/components/forms/register-form";

const Page = () => {
  return (
    <div className="flex flex-col gap-y-10">
      {/* Caption */}
      <Caption
        title="Create account"
        description=" Let's get you started sharing your links!"
      />
      {/* Form */}
      <div>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default Page;
