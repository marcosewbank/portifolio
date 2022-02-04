import { Header } from "../components/Header/Header";
import { Parallax } from "../components/Parallax/Parallax";

export default function index() {
  return (
    <>
      <div className="max-w-screen-md mx-auto">
        <Header />
      </div>
      <Parallax />
    </>
  );
}
