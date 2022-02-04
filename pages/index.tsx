import { Header } from "../components/Header/Header";
import { Parallax } from "../components/Parallax/Parallax";
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle";

export default function index() {
  return (
    <main className="relative">
      <ThemeToggle />
      <Header />
      <Parallax />
    </main>
  );
}
