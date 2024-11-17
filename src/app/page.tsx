"use client";
import { DotPattern } from "@/components/ui/dot-pattern";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Dotted Background */}
      <DotPattern />

      {/* Main Content */}
      <div className="relative z-10 p-4">
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
};

export default App;
