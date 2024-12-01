import React from "react";
// import Project1 from "@/components/Project/Project1";
import Project2 from "@/components/Project/Project2";
import Project3 from "@/components/Project/Project3";

export default function Project() {
    return (
        <div>
            <h1>Project List</h1>
            <div className="container" style={{justifyContent: "center", display:"flex", border:"50px"}}>
                {/*<div>*/}
                {/*    <Project1/>*/}
                {/*</div>*/}
                <div>
                    <Project2/>
                </div>
                <div style={{marginLeft:"100px"}}>
                    <Project3/>
                </div>
            </div>

        </div>
    );
}
