//Components
import Header from "@/components/header";
import PhonePreview from "@/components/phone-preview";
import { useGetServerSideUser } from "@/hooks/useGetServerSideUser";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await useGetServerSideUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="tablet:p-6 desktop:max-w-[1392px] desktop:mx-auto w-full">
        <Header />
      </div>

      {/* Preview and Page */}
      <div className="flex flex-1 p-4 tablet:p-6 tablet:pt-0 desktop:max-w-[1392px] desktop:mx-auto w-full desktop:gap-x-6 h-full items-start">
        <section className="hidden sticky top-0 desktop:flex justify-center items-center bg-white rounded-xl p-16 w-[35rem] shrink-0 h-full">
          <PhonePreview user={user} />
        </section>
        <section className="bg-white rounded-xl w-full h-full">
          {children}
        </section>
      </div>
    </main>
  );
}
