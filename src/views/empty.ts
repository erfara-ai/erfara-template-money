/** What the screen says before there is anything to show. */
export function renderEmpty(): HTMLElement {
  const box = document.createElement("div");
  box.className = "empty";
  box.textContent = "Nothing here yet.";
  return box;
}
