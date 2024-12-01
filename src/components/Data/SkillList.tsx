import Image from "next/image";

const SkillList = () => {
    return (
        <div>
            <div className="container"
                 style={{
                     display: "flex",
                     borderColor: "black",
                     marginBottom: "2em",
                     justifyContent: "center",
                     flexWrap: "wrap" // 이미지가 화면에 맞게 잘 배치되도록 추가
                 }}>
                <div className="skill_list_img">
                    <Image
                        className="skill_list_main"
                        width={100}
                        height={100}
                        src="/image/React.png"
                        alt="React"
                        style={{
                            objectFit: "contain",
                            borderRadius: "10%",
                            height: "100%",
                            width: "100%",
                        }}
                    />
                </div>

                <div className="skill_list_img">
                    <Image
                        width={100}
                        height={100}
                        src="/image/spring_boot.png"
                        alt="Spring Boot"
                        style={{
                            objectFit: "contain",
                            borderRadius: "10%",
                            height: "130%",
                            width: "130%",
                        }}
                    />
                </div>

                <div className="skill_list_img">
                    <Image
                        width={100}
                        height={100}
                        src="/image/spring.png"
                        alt="Spring"
                        style={{
                            objectFit: "contain",
                            borderRadius: "10%",
                            height: "60%",
                            width: "60%",
                        }}
                    />
                </div>

                <div className="skill_list_img">
                    <Image
                        width={100}
                        height={100}
                        src="/image/oracleDB.png"
                        alt="Oracle DB"
                        style={{
                            objectFit: "contain",
                            borderRadius: "10%",
                            marginTop: "7px",
                        }}
                    />
                </div>

                <div className="skill_list_img">
                    <Image
                        width={100}
                        height={100}
                        src="/image/mariaDB.png"
                        alt="MariaDB"
                        style={{
                            objectFit: "contain",
                            borderRadius: "10%",
                        }}
                    />
                </div>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{
                    borderTop: "4px solid black", // 위쪽에 4px 두께의 검은색 실선 추가
                    width: "70%",                // 구분선의 너비는 부모 div에 맞춤
                    marginTop: "1em",            // 구분선과 위의 내용 사이에 여백 추가
                    marginBottom: "3em",
                }}></div>
            </div>

            <div className="container"
                 style={{
                     display: "flex",
                     justifyContent: "center",
                     flexWrap: "wrap", // 이미지들이 잘 정렬되도록
                 }}>
                <div className="skill_list_img">
                    <Image
                        width={100}
                        height={100}
                        src="/image/java.jpg"
                        alt="Java"
                        style={{
                            objectFit: "contain",
                            borderRadius: "10%",
                            height: "130%",
                            width: "130%",
                        }}
                    />
                </div>
                <div className="skill_list_img">
                    <Image
                        width={100}
                        height={100}
                        src="/image/jsp.png"
                        alt="JSP"
                        style={{
                            objectFit: "contain",
                            borderRadius: "10%",
                            height: "125%",
                            width: "125%",
                        }}
                    />
                </div>

                <div className="skill_list_img">
                    <Image
                        width={100}
                        height={100}
                        src="/image/jpa.png"
                        alt="JPA"
                        style={{
                            objectFit: "contain",
                            borderRadius: "10%",
                        }}
                    />
                </div>
                <div className="skill_list_img">
                    <Image
                        width={100}
                        height={100}
                        src="/image/eclipse.png"
                        alt="Eclipse"
                        style={{
                            objectFit: "contain",
                            borderRadius: "10%",
                        }}
                    />
                </div>
                <div className="skill_list_img">
                    <Image
                        width={100}
                        height={100}
                        src="/image/IntelliJ.png"
                        alt="IntelliJ"
                        style={{
                            objectFit: "contain",
                            borderRadius: "10%",
                        }}
                    />
                </div>
                <div className="skill_list_img">
                    <Image
                        width={100}
                        height={100}
                        src="/image/github2.png"
                        alt="GitHub"
                        style={{
                            objectFit: "contain",
                            borderRadius: "10%",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default SkillList;
