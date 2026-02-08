
import ProfileIntro from "@/components/ProfileIntro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <ProfileIntro />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
