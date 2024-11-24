import Image from "next/image";

const SkillList = () => {
    return(
        <div >
            <div className="container" style={{justifyContent: "space-between", display: "flex", border: "50px", borderColor:"black"}}>
                <div className="skill_list_img">
                    <Image className="skill_list_main"
                        width={100}
                        height={100}
                        src="/image/react.png" alt="java"
                        style={{objectFit: "contain", borderRadius: "10%"}}/>
                </div>

                <div className="skill_list_img">
                    <Image
                    width={100}
                    height={100}
                    src="/image/spring_boot.png" alt="java"
                    style={{objectFit: "contain", borderRadius: "10%"}}/>
                </div>

                <div className="skill_list_img">
                    <Image
                    width={100}
                    height={100}
                    src="/image/spring.png" alt="java"
                    style={{objectFit: "contain", borderRadius: "10%"}}/>
                </div>

                <div className="skill_list_img">
                    <Image
                    width={100}
                    height={100}
                    src="/image/oracleDB.png" alt="java"
                    style={{objectFit: "contain", borderRadius: "10%"}}/>
                </div>

                <div className="skill_list_img">
                    <Image
                    width={100}
                    height={100}
                    src="/image/mariaDB.png" alt="java"
                    style={{objectFit: "contain", borderRadius: "10%"}}/>
                </div>

            </div>
            <div className="container" style={{justifyContent: "space-between", display: "flex", border: "50px"}}>
                <div className="skill_list_img">
                    <Image
                    width={80}
                    height={100}
                    src="/image/java.png" alt="java"
                    style={{objectFit: "contain", borderRadius: "10%"}}/>
                </div>
                <div className="skill_list_img">
                    <Image
                    width={80}
                    height={100}
                    src="/image/jsp.png" alt="java"
                    style={{objectFit: "contain", borderRadius: "10%"}}/>
                </div>


                <div className="skill_list_img">
                    <Image
                    width={80}
                    height={100}
                    src="/image/jpa.png" alt="java"
                    style={{objectFit: "contain", borderRadius: "10%"}}/>
                </div>
                <div className="skill_list_img">
                    <Image
                    width={80}
                    height={100}
                    src="/image/eclipse.png" alt="java"
                    style={{objectFit: "contain", borderRadius: "10%"}}/>
                </div>
                <div className="skill_list_img">
                    <Image
                    width={80}
                    height={100}
                    src="/image/intelliJ.png" alt="java"
                    style={{
                        objectFit: "contain", borderRadius: "10%"}}/>
                </div>
                <div className="skill_list_img">
                    <Image
                    width={80}
                    height={100}
                    src="/image/github2.png" alt="java"
                    style={{objectFit: "contain", borderRadius: "10%"}}/>
                </div>

            </div>


        </div>
    )
}
export default SkillList;