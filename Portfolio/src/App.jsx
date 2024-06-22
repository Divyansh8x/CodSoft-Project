import { lazy, Suspense } from "react";
import Lottie from "react-lottie";
import animationData from "./assets/Loading.json";

const Navbar = lazy(() => import("./Components/Navbar"));
const Home = lazy(() => import("./Components/Home"));
const SocialLinks = lazy(() => import("./Components/SocialLinks"));
const About = lazy(() => import("./Components/About"));
const Projects = lazy(() => import("./Components/Projects"));
const TechStack = lazy(() => import("./Components/TechStack"));
const Contact = lazy(() => import("./Components/Contact"));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const App = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      }
    >
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <SocialLinks />
      </div>
    </Suspense>
  );
};

export default App;
