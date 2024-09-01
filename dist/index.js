import { init } from "./llminabox.js";

const style = document.createElement("link");
style.rel = "stylesheet";
style.href = "./llminabox.css";
document.head.appendChild(style);

init();
