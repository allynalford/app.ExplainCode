
export function getWidgets(path){
  const widgets = [
    {
      id: 1,
      icon: "uil uil-dashboard",
      className: path === "/dashboard" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      icon: "uil uil-setting",
      className: "navbar-item account-menu px-0 mt-2",
      title: "Settings",
      link: "/page-profile-edit",
    },
    {
      id: 3,
      icon: "uil uil-dashboard",
      className: "navbar-item account-menu px-0 mt-2",
      title: "Logout",
      link: "/auth-login-three",
    },
  ]

  return widgets;
}

