const microfrontendByKey = {
  order: {
    renderFn: "renderOrder",
    url: "http://127.0.0.1:8080/bundle.js",
  },
  products: {
    renderFn: "renderProducts",
    url: "http://127.0.0.1:8081/bundle.js",
  },
};

function renderMicrofrontend(key, containerId, props) {
  function _render() {
    const { renderFn } = microfrontendByKey[key];
    window[renderFn](containerId, props);
  }

  const scriptId = `${key}-script`;
  if (document.getElementById(scriptId)) {
    _render();
    return;
  }

  const script = document.createElement("script");
  script.id = scriptId;
  script.src = microfrontendByKey[key].url;
  script.onload = _render;

  document.head.appendChild(script);
}

window.onload = () => {
  renderMicrofrontend("products", "products-container");

  window.addEventListener("products:order", (event) => {
    renderMicrofrontend("order", "order-container", { itemId: event.detail });
  });
};
