import About from "@/app/about/page";
import Career from "@/app/career/page";
import Project from "@/app/project/page";
import Skill from "@/app/skill/page";
import Title from "@/app/title/page";

export default function Home() {
    return (
        <div>
            <div id="title">
                <Title/>
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="skill">
                <Skill/>
            </div>

            <div id="career">
                <Career/>
            </div>
            <div id="project">
                <Project/>
            </div>
        </div>
    );
}
