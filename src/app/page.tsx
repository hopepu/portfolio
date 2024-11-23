import React from "react";
import About from "@/app/about/page";
import Career from "@/app/career/page";
import Project from "@/app/project/page";
import Skill from "@/app/skill/page";
import Title from "@/app/title/page";

export default function Home() {
    return (
        <div>
            <div>
                <Title/>
            </div>
            <div>
                <About/>
            </div>
            <div>
                <Skill/>
            </div>

            <div>
                <Career/>
            </div>
            <div>
                <Project/>
            </div>


        </div>
    );
}
