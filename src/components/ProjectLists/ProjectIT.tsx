import Image from "next/image";
import Link from "next/link";


const ProjectIT = () => {

    return (
        <div style={{fontSize: "1.2em"}}>
            <div>
                <h1> ProjectIT(ERP System) </h1>
            </div>
            <div className="container" style={{justifyContent: "space-between", display: "flex", border: "50px"}}>
                <div>
                    <Image
                        width={500}
                        height={500}
                        src="/image/project/projectIT.png" alt="java"
                        style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",

                        }}/>
                </div>

                <div>
                    <div> IT 기업의 업무효율셩 향상을 위한 ERP시스템 개발</div>
                    <div style={{textAlign: "right", fontSize: "0.8em"}}> 2024. 10. 28 ~ 2024. 11. 28</div>

                    <div style={{marginTop: "2em"}}>
                        <div> 역할 분담</div>
                        <div style={{marginTop: "-0.5em", fontSize: "0.8em"}}>
                            <ul>
                                <li>
                                    김지선(Leader) : 자원 관리
                                </li>
                                <ul>
                                    <li>
                                        라이센스 및 자원 요청 시스템
                                    </li>
                                    <li>
                                        기업 자산 통합 관리 시스템
                                    </li>
                                </ul>
                                <li>
                                    조용재(Member) : 인사관리
                                </li>
                                <ul>
                                    <li>
                                        인적자원 등록, 관리 시스템
                                    </li>
                                    <li>
                                        접근제어 / 권한제어
                                    </li>
                                </ul>
                                <li>
                                    용상엽(Member) : 생산관리
                                </li>
                                <ul>
                                    <li>
                                        프로젝트 생성, 관리 시스템
                                    </li>
                                    <li>
                                        프로젝트별 이슈관리 시스템
                                    </li>
                                </ul>

                            </ul>
                        </div>

                    </div>

                </div>


            </div>
            <div style={{paddingLeft: "5em", paddingRight: "5em", marginTop: "2em", marginBottom: "1em"}}>
                <hr className={"divider"}/>
            </div>

            <div style={{textAlign: "center"}}>
                <div> 사용 기술</div>
                <div style={{fontSize: "0.8em"}}> React, node.js, Spring boot, Tomcat, MariaDB</div>
            </div>

            <div style={{paddingLeft: "5em", paddingRight: "5em", marginTop: "1em", marginBottom: "1em"}}>
                <hr className={"divider"}/>
            </div>

            <div className="container" style={{justifyContent: "center", display: "flex", border: "50px"}}>
                <div>
                    <div style={{textAlign: "center"}}> 인사 설계</div>
                    <div style={{fontSize: "0.8em"}}>
                        <ol>
                            <li> 사원 계정 발급</li>
                            <li> 부서 지정</li>
                            <li> 직위 설정</li>
                            <li> 사원 로그인</li>
                            <li> 개인 정보 수정</li>
                            <li> 입사지원서 입력 및 결과 수정</li>
                        </ol>
                    </div>
                </div>
                <div style={{marginLeft: "2em"}}>
                    <div style={{textAlign: "center"}}> 세부 기능</div>
                    <div style={{fontSize: "0.8em"}}>
                        <ol>
                            <li> 로그인 기능</li>
                            <ol style={{listStyleType: "upper-alpha"}}>
                                <li> Spring Boot Security 적용</li>
                                <li> 로그인</li>
                            </ol>
                            <li> 인사 기본 정보</li>
                            <ol style={{listStyleType: "upper-alpha"}}>
                                <li> 회원정보 수정</li>
                                <li> 직책 및 팀 정보 수정</li>
                                <li> 검색(사원 이름 이용)</li>
                            </ol>
                            <li> 사원 은행 정보</li>
                            <ol style={{listStyleType: "upper-alpha"}}>
                                <li> 은행계좌 정보</li>
                                <li> 계좌사진 저장</li>
                            </ol>
                            <li> 지원서</li>
                            <ol style={{listStyleType: "upper-alpha"}}>
                                <li> 지원서 입력</li>
                                <li> 지원 결과 입력 및 수정</li>
                                <li> 검색(사원 이름 이용)</li>
                            </ol>

                        </ol>
                    </div>
                </div>
            </div>

            <div style={{paddingLeft: "5em", paddingRight: "5em", marginTop: "1em", marginBottom: "1em"}}>
                <hr className={"divider"}/>
            </div>

            <div style={{textAlign: "center"}}> 인사 설계 DB table</div>
            <div style={{textAlign: "center"}}>
                <Image
                    width={500}
                    height={500}
                    src="/image/database/ProjectITMember.png" alt="java"
                    style={{
                        objectFit: "contain",
                        width: "80%",
                        height: "80%",

                    }}/>
            </div>

            <div style={{paddingLeft: "5em", paddingRight: "5em", marginTop: "1em", marginBottom: "1em"}}>
                <hr className={"divider"}/>
            </div>

            <div  className="container" style={{justifyContent: "center", display: "flex", border: "50px", textAlign: "center"}}>
                <div>
                    <div>git</div>
                    <div style={{marginTop:"0.5em"}}>
                        <Link href="https://github.com/hopepu/ProjectIT" passHref target="_blank">

                            <div style={{width: "7em", height: "4.5em", borderRadius: "15%"}}>
                                <Image
                                    width={100}
                                    height={100}
                                    src="/image/github2.png"
                                    alt="java"
                                    style={{
                                        objectFit: "contain",
                                        borderRadius: "10%",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </div>
                        </Link>
                    </div>
                </div>

                <div>
                    <div>live site</div>
                    <div style={{marginTop:"0.5em"}}>
                        <div>
                            <Link href="http://mbc-webcloud.iptime.org:3000" passHref target="_blank">
                                <div style={{background: "blue", width: "7em", height: "4.5em", borderRadius: "15%"}}>
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/image/logo/projectIT.png"
                                        alt="java"
                                        style={{
                                            objectFit: "contain",
                                            borderRadius: "10%",
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProjectIT;