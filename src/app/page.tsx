import About from "@/app/about/page";
import Career from "@/app/career/page";
import Project from "@/app/project/page";
import Skill from "@/app/skill/page";
import Title from "@/app/title/page";
import Education from "@/app/education/page";
import "../styles/globals.css";


export default function Home() {
    return (
        <div>
            <div id="title" className="HomeList">
                <Title/>
            </div>
            <div id="about" className="HomeList">
                <About/>
            </div>
            <div id="education" className="HomeList">
                <Education/>
            </div>
            <div id="skill" className="HomeList">
                <Skill/>
            </div>
            <div id="career" className="HomeList">
                <Career/>
            </div>
            <div id="project" className="HomeList">
                <Project/>
            </div>
        </div>
    );
}
