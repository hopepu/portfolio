import About from "@/app/about/page";
import Career from "@/app/career/page";
import Project from "@/app/project/page";
import Skill from "@/app/skill/page";
import Title from "@/app/title/page";
import Education from "@/app/education/page";


export default function Home() {
    return (
        <div>
            <div id="title" style={{marginBottom:'6em'}}>
                <Title/>
            </div>
            <div id="about" style={{marginBottom:'6em'}}>
                <About/>
            </div>
            <div id="education" style={{marginBottom:'6em'}}>
                <Education/>
            </div>
            <div id="skill" style={{marginBottom:'6em'}}>
                <Skill/>
            </div>
            <div id="career" style={{marginBottom:'6em'}}>
                <Career/>
            </div>
            <div id="project" style={{marginBottom:'6em'}}>
                <Project/>
            </div>
        </div>
    );
}
