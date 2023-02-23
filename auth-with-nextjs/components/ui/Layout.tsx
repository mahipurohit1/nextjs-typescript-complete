import { LayoutProps } from "@/types";
import { MainNavigation } from "./MainNavigation";

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}
