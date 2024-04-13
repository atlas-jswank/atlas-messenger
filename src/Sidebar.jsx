import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} />
      <SideBarIcon icon={<FaPoo size="28" />} />
      <SideBarIcon icon={<BsPlus size="28" />} />
    </div>
  );
}

export function SideBarIcon({ icon }) {
  return <div className="sidebar-icon">{icon}</div>;
}
