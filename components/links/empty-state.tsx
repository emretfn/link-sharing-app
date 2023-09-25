//Icons
import EmptyIllustration from "@/public/assets/images/illustration-empty.svg";

//Components
import Caption from "@/components/caption";

const EmptyState = () => {
  return (
    <div className="flex bg-grey-light  rounded-xl p-5  flex-col items-center gap-y-10 ">
      <EmptyIllustration />
      <Caption
        title="Let’s get you started"
        description="Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!"
        align="center"
        className="gap-y-6 max-w-[488px]"
      />
    </div>
  );
};

export default EmptyState;
