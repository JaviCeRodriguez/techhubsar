import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AddCommunityButton() {
  return (
    <Link href="/add-community">
      <Button className="hidden px-4 py-2 font-semibold text-white rounded bg-tech-gradient sm:block lg:hidden xl:block">
        Add New Community
      </Button>
      <Button className="block px-4 py-2 font-semibold text-white rounded bg-tech-gradient sm:hidden lg:block xl:hidden">
        +
      </Button>
    </Link>
  );
}
