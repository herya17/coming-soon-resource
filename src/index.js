import React from "react";
import { createRoot } from "react-dom/client";
import "./components/app-shell/app-bar";
import "./components/app-shell/foot-bar";
import "./components/contents/skip-link";
import App from "./components/App.js";
import "./styles/main.css";
import "./styles/responsive.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
