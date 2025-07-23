import { GlobalSidebar } from "@/components/common/Sidebar/GlobalSidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { StripeComponentsProvider } from "@/hooks/StripeComponentsProvider";

export default async function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <GlobalSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <StripeComponentsProvider>{children}</StripeComponentsProvider>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
