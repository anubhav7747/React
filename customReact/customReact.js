function customRender(reactEl, container) {
  /* 
    const domEL = document.createElement(reactEl.type);
    domEL.innerHTML = reactEl.children;
    domEL.setAttribute('href', reactEl.props.href);
    domEL.setAttribute('target', reactEl.props.target);
    
    container.appendChild(domEL);
    */

  const domEl = document.createElement(reactEl.type);
  domEl.innerHTML = reactEl.children;
  for (const prop in reactEl.props) {
    if (prop === "children") continue;
    domEl.setAttribute(prop, reactEl.props[prop]);
  }

  container.appendChild(domEl);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google.",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
