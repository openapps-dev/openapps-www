import { Link as NavLinkProps } from "@/types/link";
import Link from "next/link";

export default function NavLink({ content, url }: NavLinkProps) {
  return (
    <Link href={url}>
      <span className="text-2xl font-bold text-black transition bg-clip-text hover:text-transparent bg-gradient-to-r from-blue-600 to-purple-600 duration-300">
        {content}
      </span>
    </Link>
  );
}
