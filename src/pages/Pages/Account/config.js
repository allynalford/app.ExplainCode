
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
      className: path.pathname === "/settings" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Settings",
      link: "/settings",
    },
    {
      id: 2,
      icon: "uil uil-octagon",
      className: path.pathname === "/auth-login-three" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Logout",
      link: "/logout",
    },
  ]

  return widgets;
}

export function getPrompts(path){
  const tool = new URLSearchParams(path.search).get("tool");
  const widgets = [
    {
      id: 1,
      icon: "uil uil-list-ul",
      className: tool === "Line-By-Line" | tool === null && path.pathname === "/dashboard" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Line by Line",
      link: "/dashboard?tool=Line-By-Line",
      tool: "Line-By-Line"
    },
    {
      id: 2,
      icon: "uil uil-document-layout-left",
      className: tool === "Summarize" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Summary",
      link: "/dashboard?tool=Summarize",
      tool: "Summarize"
    },
    {
      id: 3,
      icon: "uil uil-code-branch",
      className: tool === "Class-Breakdown" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Class Breakdown",
      link: "/dashboard?tool=Class-Breakdown",
      tool: "Class-Breakdown"
    },
    {
      id: 4,
      icon: "uil uil-comment-question",
      className: tool === "Open-Questions" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Open Questions",
      link: "/dashboard?tool=Open-Questions",
      tool: "Open-Questions"
    },
    {
      id: 5,
      icon: "uil uil-brackets-curly",
      className: tool === "Explain-Function" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Explain Function",
      link: "/dashboard?tool=Explain-Function",
      tool: "Explain-Function"
    },
  ]

  return widgets;
}

