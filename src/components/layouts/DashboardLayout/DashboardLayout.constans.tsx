import { CiGrid41 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { CiShoppingTag } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";



const SIDEBAR_ADMIN = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin",
    icon: <CiGrid41 />,
  },
  {
    key: "event",
    label: "Event",
    href: "/admin/event",
    icon: <CiViewList />,
  },
  {
    key: "category",
    label: "Category",
    href: "/admin/category",
    icon: <CiShoppingTag />,
  },
  {
    key: "banner",
    label: "Banner",
    href: "/admin/banner",
    icon: <CiBookmark />,
  },

  {
    key: "transaction",
    label: "Transaction",
    href: "/admin/transaction",
    icon: <CiWallet />,
  }
 
];


const SIDEBAR_MEMBER = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/member",
    icon: <CiGrid41 />,
  },
  {
    key: "transaction",
    label: "Transaction",
    href: "/member/transaction",
    icon: <CiWallet />,
  },
  {
    key: "setting",
    label: "Setting",
    href: "/member/setting",
    icon: <CiSettings />,
  },
];

export { SIDEBAR_ADMIN, SIDEBAR_MEMBER };