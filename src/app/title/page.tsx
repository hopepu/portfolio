import React from "react";
import Photo from "@/components/Data/Photo";
import Introduction from "@/components/Data/Introduce";

export default function Title() {
    return (
        <div className="container" style={{justifyContent: "space-between", display:"flex", border:"50px"}}>
            <div>
                <Introduction/>
            </div>
            <div>
                <Photo/>
            </div>

        </div>

    )
        ;
}
