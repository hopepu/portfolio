import React from "react";
import Project1 from "@/components/Project/Project1";
import Project2 from "@/components/Project/Project2";
import Project3 from "@/components/Project/Project3";

export default function Project() {
    return (
        <div>
            <h1>Project List</h1>
            <div className="container" style={{justifyContent: "space-between", display:"flex", border:"50px"}}>
                <div>
                    <Project1/>
                </div>
                <div>
                    <Project2/>
                </div>
                <div>
                    <Project3/>
                </div>
            </div>

        </div>
    );
}
