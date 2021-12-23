
export function getWidgets(path){
  const widgets = [
    // {
    //   id: 1,
    //   icon: "uil uil-dashboard",
    //   className: path === "/dashboard" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
    //   title: "Dashboard",
    //   link: "/dashboard",
    // },
    {
      id: 1,
      icon: "uil uil-setting",
      className: path === "/page-profile-edit" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Settings",
      link: "/page-profile-edit",
    },
    {
      id: 2,
      icon: "uil uil-dashboard",
      className: path === "/auth-login-three" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Logout",
      link: "/auth-login-three",
    },
  ]

  return widgets;
}

export function getPrompts(path){
  const pathname = path.pathname;
  const tool = new URLSearchParams(path.search).get("tool");
  const widgets = [
    {
      id: 1,
      icon: "uil uil-line-spacing",
      className: tool === "Line-By-Line" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Line by Line",
      link: "/dashboard?tool=Line-By-Line",
    },
    {
      id: 2,
      icon: "uil uil-document-layout-left",
      className: tool === "Summarize" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Summary",
      link: "/dashboard?tool=Summarize",
    },
    {
      id: 3,
      icon: "uil uil-code-branch",
      className: tool === "Class-Breakdown" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Class Breakdown",
      link: "/dashboard?tool=Class-Breakdown",
    },
    {
      id: 4,
      icon: "uil uil-comment-question",
      className: tool === "Open-Questions" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Open Questions",
      link: "/dashboard?tool=Open-Questions",
    },
    {
      id: 5,
      icon: "uil uil-code-branch",
      className: path === "/dashboard" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Explain Function",
      link: "/dashboard?tool=Explain-Function",
    },
  ]

  return widgets;
}

