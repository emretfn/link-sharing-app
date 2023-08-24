import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <div className="tablet:p-6 desktop:max-w-[1392px] desktop:mx-auto w-full">
        <Header></Header>
      </div>

      {/* Page */}
      <div>{children}</div>
    </main>
  );
}
