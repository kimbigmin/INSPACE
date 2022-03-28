import MainView from "./static/views/MainView.js";
import LoginView from "./static/views/LoginView.js";
import SignupView from "./static/views/SignupView.js";
import TicketView from "./static/views/TicketView.js";
import FindView from "./static/views/FindView.js";
import SelectView from "./static/views/SelectView.js";
import PayCheckView from "./static/views/PayCheckView.js";
import "./static/css/index.css";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );
  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = () => {
  const routes = [
    { path: "/", view: LoginView },
    { path: "/signup", view: SignupView },
    { path: "/find", view: FindView },
    { path: "/select", view: SelectView },
    { path: "/main", view: MainView },
    { path: "/ticket", view: TicketView },
    { path: "/paycheck", view: PayCheckView },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (
    !match ||
    (localStorage.getItem("token") === null &&
      match.route.path !== "/signup" &&
      match.route.path !== "/find")
  ) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#root").innerHTML = view.getHtml();
  view.defaultFunc();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.parentElement.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.parentElement.href);
    }
  });
  router();
});

window.addEventListener("beforeunload", router);
