import "./index.css";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@/feature/theme";
import { WorkerProvider } from "@/feature/worker";

import App from "./App.tsx";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window.global = globalThis;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <WorkerProvider>
          <App />
        </WorkerProvider>
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>
);
