
export function getWidgets(path){
  const widgets = [
    {
      id: 1,
      icon: "uil uil-bookmark",
      className: path === "/snippets" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Saved Snippets",
      link: "/snippets",
    },
    {
      id: 1,
      icon: "uil uil-setting",
      className: path.pathname === "/settings" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Settings",
      link: "/settings",
    },
    {
      id: 2,
      icon: "uil uil-sign-out-alt",
      className: path.pathname === "/auth-login-three" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Logout",
      link: "/logout",
    },
  ]

  return widgets;
}

export const TOOLS = new Set(['Line-By-Line', 'Summarize', 'Class-Breakdown','Open-Questions','Explain-Function', 'Code-Comment'])

export function getPrompts(path){
  const tool = new URLSearchParams(path.search).get("tool");
  const widgets = [
    {
      id: 1,
      icon: "uil uil-list-ul",
      className: tool === "Line-By-Line" | tool === null && path.pathname === "/dashboard" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Line by Line",
      link: "/dashboard?tool=Line-By-Line",
      tool: "Line-By-Line",
      desc: "This tool provides a line by line explanation of your code.",
      tips: ['Ensure the snippet of code is complete.']
    },
    {
      id: 2,
      icon: "uil uil-document-layout-left",
      className: tool === "Summarize" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Summary",
      link: "/dashboard?tool=Summarize",
      tool: "Summarize",
      desc: "This tool summarizes your code.",
      tips: ['Ensure the snippet of code is complete.']
    },
    {
      id: 3,
      icon: "uil uil-code-branch",
      className: tool === "Class-Breakdown" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Class Breakdown",
      link: "/dashboard?tool=Class-Breakdown",
      tool: "Class-Breakdown",
      desc: "This breaks down your class and provides an overall explanation of the class.",
      tips: ['Ensure the snippet of code is a class.']
    },
    {
      id: 4,
      icon: "uil uil-comment-question",
      className: tool === "Open-Questions" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Open Questions",
      link: "/dashboard?tool=Open-Questions",
      tool: "Open-Questions",
      desc: "This tool allows you to ask free-form questions about your class, function or code snippet.",
      tips: ['Ensure to select the proper language for of your code.']
    },
    {
      id: 5,
      icon: "uil uil-brackets-curly",
      className: tool === "Explain-Function" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Explain Function",
      link: "/dashboard?tool=Explain-Function",
      tool: "Explain-Function",
      desc: "This tool provides an explanation for your function.",
      tips: ['Ensure the snippet of code is a function']
    },
    {
      id: 6,
      icon: "uil uil-comment-edit",
      className: tool === "Code-Comment" ? "navbar-item account-menu px-0 active" : "navbar-item account-menu px-0 mt-2",
      title: "Code Comment",
      link: "/dashboard?tool=Code-Comment",
      tool: "Code-Comment",
      desc: "Create a JavaDoc style comment for your code",
      tips: ['Preserve any existing comments within the code']
    },
  ]

  return widgets;
}

export const modes = [
  { label: 'All Languages', value: 'markdown' },
  { label: 'NodeJS (Javascript)', value: 'javascript' },
  { label: 'Python', value: 'python' },
  { label: 'Go (Golang)', value: 'golang' },
  { label: 'SQL (Structured Query Language)', value: 'mysql' },
  { label: 'HTML', value: 'html' }
];

export const themes = [
  { label: 'Solarized Light', value: 'solarized_light' },
  { label: 'Solarized Dark', value: 'solarized_dark' },
  { label: 'Terminal', value: 'terminal' },
  { label: 'Kuroir', value: 'kuroir' },
  { label: 'GitHub', value: 'github' },
  { label: 'Monokai', value: 'monokai' }
];


