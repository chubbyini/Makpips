// src/hooks/useSystemDarkMode.js
import { useEffect } from "react";

export default function useSystemDarkMode() {
  useEffect(() => {
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isSystemDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Optional: Listen to changes in system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
}
