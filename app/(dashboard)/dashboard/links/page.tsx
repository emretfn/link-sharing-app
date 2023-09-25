//Components
import Caption from "@/components/caption";
import DraggableLinkList from "@/components/links/draggable-link-list";
import SaveButton from "@/components/links/save-button";

const Page = async () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col flex-1 gap-y-10 tablet:p-10 p-6">
        <Caption
          title="Customize your links"
          description=" Add/edit/remove links below and then share all your profiles with
            the world!"
        />
        {/* Links */}
        <DraggableLinkList />
      </div>
      <div className="px-10 py-6 border-t border-grey-border flex justify-end">
        <SaveButton />
      </div>
    </div>
  );
};

export default Page;
