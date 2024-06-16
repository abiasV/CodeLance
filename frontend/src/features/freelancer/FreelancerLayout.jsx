import { HiCollection, HiHome, HiPencilAlt } from "react-icons/hi"
import AppLayout from "../../ui/AppLayout"
import CustomNavLink from "../../ui/CustomNavLink"
import Sidebar from "../../ui/Sidebar"

const FreelancerLayout = () => {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>Dashboard</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiCollection />
          <span>Projects</span>
        </CustomNavLink>
        <CustomNavLink to="proposals">
          <HiPencilAlt />
          <span>Proposals</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  )
}

export default FreelancerLayout