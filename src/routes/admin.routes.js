import Dashboard from "../views/admin/Dashboard";
import CourseManagament from "../views/admin/CourseManagement";
import UserManagement from "../views/admin/UserManagement";

const adminRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    icon: "dashboard",
    layout: "/admin"
  },
  {
    path: "/course-management",
    name: "course management",
    component: CourseManagament,
    icon: "school",
    layout: "/admin"
  },
  {
    path: "/user-management",
    name: "user management",
    component: UserManagement,
    icon: "people",
    layout: "/admin"
  }
];

export default adminRoutes;
