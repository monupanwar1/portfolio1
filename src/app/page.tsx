"use client"
import { Sidebar } from "@/components/Sidebar";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import DotPattern from "@/components/ui/dot-pattern";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <DotPattern/>
      <div className="container max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* (Profile and Skills) Sidebar Section */}
          <Sidebar />
          {/* Main Section */}
          <main className="md:col-span-2">
            {/* About Me Section */}
            <AboutMe />
            {/* Projects Section */}
            <Projects />
            {/* Experience Section */}
            <Experience />
          
          </main>
        </div>
      </div>
    </div>
  );
}