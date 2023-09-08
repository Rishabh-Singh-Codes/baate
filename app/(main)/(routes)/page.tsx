import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const state =  true;
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      This is a protected route.
      <ModeToggle />
    </div>
  )
}
