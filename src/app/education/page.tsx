import EducationList from "@/components/Data/EducationList";
import Training from "@/components/Data/Training";

export default function Education(){
    return(
        <div>
            <h1>Training</h1>
            <div style={{marginBottom:"6em"}}>
                <Training/>
            </div>
            <h1>Education</h1>
            <div>
                <EducationList/>
            </div>
        </div>
    );
}
