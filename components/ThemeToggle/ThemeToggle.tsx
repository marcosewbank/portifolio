import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Aqui temos os ícones de Lua e Sol
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <div className="sticky top-4 z-50 w-10 flex">
      <div className="w-10 bg-slate-300 dark:bg-slate-800  rounded-r-full p-1 flex justify-end">
        <button
          className="focus:outline-none"
          onClick={() => setTheme(isDark() ? "light" : "dark")}
          aria-label="Theme toggle"
        >
          {isDark() ? <BiSun size={20} /> : <BiMoon size={20} />}
        </button>
      </div>
    </div>
  );
};
