import { UserCheck, Home, Globe, UserPlus } from "react-feather";

export default [
  {
    id: "home",
    title: "Dashboards",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "nidverify",
    title: "Finger Verification",
    icon: <Globe size={20} />,
    navLink: "/nid-verify",
  },
  {
    id: "grantors",
    title: "Guarantors",
    icon: <UserPlus size={20} />,
    navLink: "/grantors",
  },
  {
    id: "PendingUser",
    title: "Pending User List",
    icon: <UserCheck size={20} />,
    navLink: "/pending-user",
  },
  {
    id: "VerifiedUserList",
    title: "Verified User List",
    icon: <UserCheck size={20} />,
    navLink: "/verified-userlist",
  },
];
