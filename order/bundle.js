function render(id, props) {
  const itemId = props.itemId ?? "unknown";

  document.getElementById(id).innerHTML = `
<h2>Order item #${itemId}</h2>
<p>Enter your order details</p>
`;
}

window.renderOrder = render;
