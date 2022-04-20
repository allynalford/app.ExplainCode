import React from "react";
const SnippetsView = React.lazy(() =>
import("./pages/Pages/Snippets/view")
);
const SnippetDetail = React.lazy(() =>
import("./pages/Pages/Snippets/Detail")
);
const ThankYou = React.lazy(() =>
  import("./pages/Developer/ThankYou")
);

const History = React.lazy(() => import("./pages/Pages/History"));
const ContactUS = React.lazy(() => import("./pages/Pages/Contact/ContactUs"));
const PagePricing = React.lazy(() => import("./pages/Pages/Pricing"));

//Blog
const PageBlog = React.lazy(() => import('./pages/Pages/Blog/PageBlogDetail'));
const PageBlogList = React.lazy(() => import('./pages/Pages/Blog/PageBlogList'));

//Special
const PageComingSoon = React.lazy(() =>
  import("./pages/Pages/Special/PageComingSoon")
);
const PageComingSoon2 = React.lazy(() =>
  import("./pages/Pages/Special/PageComingSoon2")
);
const PageError = React.lazy(() => import("./pages/Pages/Special/PageError"));
const PageThankYou = React.lazy(() =>
  import("./pages/Pages/Special/PageThankYou")
);
const PageMaintenance = React.lazy(() =>
  import("./pages/Pages/Special/PageMaintenance")
);

//Auth Pages
const PageLogin = React.lazy(() => import("./pages/Pages/AuthPages/PageLogin"));
const Register = React.lazy(() =>
  import("./pages/Pages/AuthPages/register")
);


// Import all components
const Developer = React.lazy(() => import("./pages/Developer/index"));






const PageAboutUs = React.lazy(() => import("./pages/Pages/PageAboutUs"));
const PageAboutusTwo = React.lazy(() => import("./pages/Pages/PageAboutusTwo"));
const PageHistory = React.lazy(() => import("./pages/Pages/History"));
const PageMembers = React.lazy(() =>
  import("./pages/Pages/Account/PageMembers")
);
const PageWorks = React.lazy(() => import("./pages/Pages/Account/PageWorks"));
const PageMessages = React.lazy(() =>
  import("./pages/Pages/Account/PageMessages")
);

const PageServices = React.lazy(() => import("./pages/Pages/Tools"));

//Account
const EnglishToSql = React.lazy(() =>
import("./pages/Pages/Account/EnglishToSql")
);

const PageProfile = React.lazy(() =>
  import("./pages/Pages/Account/PageProfile")
);
const PageProfileEdit = React.lazy(() =>
  import("./pages/Pages/Account/PageProfileEdit")
);
const PagePayments = React.lazy(() =>
  import("./pages/Pages/Account/PagePayments")
);
const PageInvoice = React.lazy(() =>
  import("./pages/Pages/Account/PageInvoice")
);
const PageBlogDetailTwo = React.lazy(() =>
  import("./pages/Pages/Blog/how-explaining-the-code-helps-developers")
);

//Utility
const PagePrivacy = React.lazy(() =>
  import("./pages/Pages/Utility/PagePrivacy")
);
const PageTerms = React.lazy(() => import("./pages/Pages/Utility/PageTerms"));



//Email
const EmailAlert = React.lazy(() =>
  import("./pages/Pages/EmailTemplate/EmailAlert")
);
const EmailPasswordReset = React.lazy(() =>
  import("./pages/Pages/EmailTemplate/EmailPasswordReset")
);
const EmailConfirmation = React.lazy(() =>
  import("./pages/Pages/EmailTemplate/EmailConfirmation")
);

const HelpCenterFaqs = React.lazy(() =>
  import("./pages/Pages/HelpCenter/HelpCenterFaqs")
);

const SqlLanding = React.lazy(() => import("./pages/SqlLanding/index"));

const routes = [


    //Explain Path
   { path: "/snippets", component: SnippetsView, isTopbarDark: true, protected: true },
   { path: "/snippet/:snippetuuid", component: SnippetDetail, isTopbarDark: true, protected: true, exact: true },
   { path: "/dashboard", component: PageProfile, protected: true },
   { path: "/settings", component: PageProfileEdit, protected: true },
   { path: "/register", component: Register, isWithoutLayout: true,},
   { path: "/authorize", component: PageProfile, protected: true },
   { path: "/thankyou", component: ThankYou, isWithoutLayout: true },
   { path: "/explain-code-history", component: History, isTopbarDark: true },
   { path: "/contact-us", component: ContactUS, isTopbarDark: true },
   { path: "/explain-code-faqs", component: HelpCenterFaqs, isTopbarDark: true },
   { path: "/explain-code-tools", component: PageServices, isTopbarDark: true },
   { path: "/sql", component: SqlLanding, isTopbarDark: true },
   { path: "/pricing", component: PagePricing, isTopbarDark: true },

    //Page Profile EnglishToSql
    { path: "/dashboard", component: PageProfile, protected: true },
    { path: "/english-to-sql", component: EnglishToSql, protected: true },
    { path: "/authorize", component: PageProfile, protected: true },
    { path: "/page-members", component: PageMembers, protected: true },
    { path: "/page-works", component: PageWorks, protected: true },
    { path: "/page-messages", component: PageMessages, protected: true },
    { path: "/settings", component: PageProfileEdit, protected: true },
    { path: "/subscriptions", component: PagePayments, protected: true },
    { path: "/page-invoice", component: PageInvoice, isTopbarDark: true, protected: true },



    { path: "/how-explaining-the-code-helps-developers", component: PageBlogDetailTwo },


  //Email Pages
  { path: "/email-alert", component: EmailAlert, isWithoutLayout: true },
  {
    path: "/email-password-reset",
    component: EmailPasswordReset,
    isWithoutLayout: true,
  },
  {
    path: "/email-confirmation",
    component: EmailConfirmation,
    isWithoutLayout: true,
  },

  //Special Pages
  {
    path: "/page-comingsoon",
    component: PageComingSoon,
    isWithoutLayout: true,
  },
  {
    path: "/page-comingsoon2",
    component: PageComingSoon2,
    isWithoutLayout: true,
  },
  { path: "/page-error", component: PageError, isWithoutLayout: true },
  { path: "/page-thankyou", component: PageThankYou, isWithoutLayout: true },
  {
    path: "/page-maintenance",
    component: PageMaintenance,
    isWithoutLayout: true,
  },

  //User Pages
  { path: "/auth-login", component: PageLogin, isWithoutLayout: true },

  {
    path: "/register",
    component: Register,
    isWithoutLayout: true,
  },


  { path: "/page-aboutus", component: PageAboutUs, isTopbarDark: true },
  { path: "/page-aboutus-two", component: PageAboutusTwo },
  { path: "/page-history", component: PageHistory, isTopbarDark: true },
  

  //Utility
  { path: "/terms-of-service", component: PageTerms, isTopbarDark: true },
  { path: "/page-privacy", component: PagePrivacy, isTopbarDark: true },


  { path: '/blog', component: PageBlogList },
  {path: '/blog/page/:id', component: PageBlog},



 

  //Index Main
  { path: "/index", component: Developer, isWithoutLayout: false, exact: true, isTopbarDark: false },

  //Index root

  { path: "/", component: Developer, isWithoutLayout: false, exact: true, isTopbarDark: false },
  { component: PageError, isWithoutLayout: true, exact: false },
];

export default routes;
