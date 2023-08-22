import { UserCheck, Home, Globe, UserPlus, UserMinus, Clock, Users } from "react-feather";

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
  // {
  //   id: "grantors",
  //   title: "Guarantors",
  //   icon: <UserPlus size={20} />,
  //   navLink: "/grantors",
  // },
  {
    id: "PendingUser",
    title: "Pending Verification",
    icon: <Clock size={20} />,
    navLink: "/pending-user"
  },
  {
    id: "VerifiedUserList",
    title: "Verified List",
    icon: <UserCheck size={20} />,
    navLink: "/verified-userlist",
  },
];
