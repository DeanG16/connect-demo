import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NotebookIcon } from "lucide-react";
import { Separator } from "../../ui/separator";
import Link from "next/link";

export const GlobalSidebar = () => {
  return (
    <Sidebar variant={"sidebar"} collapsible={"icon"}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"} asChild>
              <Link href={""}>
                <div className="flex aspect-square size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <NotebookIcon className="size-6" />
                </div>
                <span className="truncate font-semibold text-sidebar-primary-foreground text-[1.25em]">
                  Connect Test
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <Separator />
      </SidebarHeader>

      <SidebarContent></SidebarContent>
    </Sidebar>
  );
};
