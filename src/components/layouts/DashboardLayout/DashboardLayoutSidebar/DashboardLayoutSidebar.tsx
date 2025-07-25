import { Button, Listbox, ListboxItem } from "@heroui/react";
import { signOut } from "next-auth/react";
import { CiLogout } from "react-icons/ci";
import Image from "next/image";
import { useRouter } from "next/router";
import { cn } from "@/utils/cn";

interface SidebarItem {
  key: string;
  label: string;
  href: string;
  icon: JSX.Element;
}

interface PropTypes {
  sidebarItems: SidebarItem[];
  isOpen: boolean;
}

const DashboardLayoutSidebar = (props: PropTypes) => {
  const { sidebarItems, isOpen } = props;
  const router = useRouter();

  return (
    <div
      className={cn(
        "fixed z-50 flex h-screen w-full max-w-[300px] -translate-x-full flex-col justify-between border-r border-default-200 bg-white px-4 py-6 transition-all lg:relative lg:translate-x-0",  {"translate-x-0" : isOpen  }
      )}
    >
      <div className="flex flex-col items-start">
        {/* Logo */}
        <Image
          src="/images/general/logo.png"
          width={180}
          height={60}
          alt="logo"
          className="mb-6 cursor-pointer"
          onClick={() => router.push("/")}
        />

        {/* Menu List */}
        <Listbox
          items={sidebarItems}
          variant="solid"
          aria-label="Dashboard Menu"
          className="w-full"
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              className={cn("my-1 h-12 text-2xl", {
                "bg-danger-500 text-white": router.pathname.startsWith(item.href),
              })}
              startContent={item.icon}
              textValue={item.label}
              aria-label={item.label}
              aria-describedby={item.label}
            >
              <p className="text-small">{item.label}</p>
            </ListboxItem>
          )}
        </Listbox>
      </div>

      {/* Logout Button */}
      <div className="flex items-center p-1">
        <Button
          color="danger"
          fullWidth
          variant="light"
          className="flex items-center justify-start gap-2 rounded-lg px-2 py-1.5"
          size="lg"
          onClick={() => signOut()}
        >
          <CiLogout /> Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardLayoutSidebar;
