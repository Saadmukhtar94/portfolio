import Header from "@/components/Header.js"
import Hero from "@/components/Hero.js"
import About from "@/components/About.js"
import Project from "@/components/TechStation.js"
import ProjectCard from "@/components/ProjectCard.js";
export default function Home() {
  return (<div className="bg-primary bg-opacity-25 mx-0 px-0">
<Header/>
<Hero/>
{/* <About/> */}
<About/>
<Project/>
<ProjectCard/>
</div>
  );
}
