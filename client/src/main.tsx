import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext.tsx";
import AudioContextProvider from "./context/PlayerContext/AudioContextProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AudioContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AudioContextProvider>
  </BrowserRouter>
);
