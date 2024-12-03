import React from "react";
import Photo from "@/components/Data/Photo";
import Introduction from "@/components/Data/Introduce";

export default function Title() {
    return (
        <div className="container" style={{justifyContent:"center", display:"flex", gap:"5em"}}>
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
