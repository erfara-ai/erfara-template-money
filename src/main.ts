import { PAGE_SIZE, PITCH, PRODUCT_NAME } from "./config";
import { getGoal, listGoals } from "./api/client";
import { renderList } from "./views/list";
import { renderDetail } from "./views/detail";
import { renderEmpty } from "./views/empty";
import "./style.css";

document.title = PRODUCT_NAME;
document.querySelector<HTMLHeadingElement>("#name")!.textContent = PRODUCT_NAME;
document.querySelector<HTMLParagraphElement>("#pitch")!.textContent = PITCH;

const main = document.querySelector("main")!;
const panel = document.createElement("div");
panel.id = "panel";
main.append(panel);

async function show(id: string) {
  const row = await getGoal(id);
  panel.replaceChildren(row ? renderDetail(row) : renderEmpty());
}

async function boot() {
  const page = await listGoals(PAGE_SIZE);
  main.insertBefore(
    page.items.length ? renderList(page.items, show) : renderEmpty(),
    panel,
  );
}

void boot();
