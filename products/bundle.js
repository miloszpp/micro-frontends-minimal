function render(id) {
  const items = [
    { id: 1, name: "Samsung TV" },
    { id: 2, name: "Sonos speakers" },
    { id: 3, name: "Kitchen Aid" },
  ];

  const containerEl = document.getElementById(id);

  containerEl.innerHTML = `
<h1>Products</h1>
<ul>
  ${items.map((item) => `<li>${item.name}</li>`).join("")}
</ul>
`;

  containerEl.querySelectorAll("li").forEach((el, idx) =>
    el.addEventListener("click", () => {
      console.log(`item clicked: ${idx}`);
      containerEl.dispatchEvent(
        new CustomEvent(
          "products:order",
          { detail: items[idx].id, bubbles: true },
          {}
        )
      );
    })
  );
}

window.renderProducts = render;
