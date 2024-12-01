import Image from "next/image";
import Link from "next/link";


const HappyTable = () => {

    return (
        <div style={{fontSize: "1em"}}>
            <div>
                <h1> ProjectIT(ERP System) </h1>
            </div>
            <div className="container" style={{justifyContent: "space-between", display: "flex", border: "50px"}}>
                <div>
                    <Image
                        width={500}
                        height={500}
                        src="/image/project/happytable.png" alt="java"
                        style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",

                        }}/>
                </div>

                <div>
                    <div> 식당과 고객의 상생을 위한 편리한 온라인 식당 예약 사이트 개발 </div>
                    <div style={{textAlign: "right", fontSize: "0.8em"}}> 2024. 09. 02 ~ 2024. 10. 06</div>

                    <div style={{marginTop: "2em"}}>
                        <div> 역할 분담</div>
                        <div style={{marginTop: "-0.5em", fontSize: "0.8em"}}>
                            <ul>
                                <li>
                                    용상엽(Leader) : 메인 페이지 / 회원 관련 서비스
                                </li>
                                <ul>
                                    <li>
                                        유저 로그인 / 회원가입
                                    </li>
                                    <li>
                                        정보 수정 / 회원탈퇴
                                    </li>
                                    <li>
                                        식당리스트 / 상세보기
                                    </li>
                                </ul>

                                <li>
                                    조용재(Member) : 예약서비스
                                </li>
                                <ul>
                                    <li>
                                        예약 등록/조회/리스트기능
                                    </li>
                                    <li>
                                        예약 수정/예약 취소
                                    </li>
                                    <li>
                                        예약 상태 변경
                                    </li>
                                </ul>

                                <li>
                                    김지선(Member) : 식당 정보 관리 서비스
                                </li>
                                <ul>
                                    <li>
                                        식당 로그인/회원가입/탈퇴
                                    </li>
                                    <li>
                                        식당 영업정보등록 및 관리
                                    </li>
                                    <li>
                                        메인 서비스 식당 등록
                                    </li>
                                </ul>

                                <li>
                                    문지현(Member) : 리뷰 서비스
                                </li>
                                <ul>
                                    <li>
                                        유저 댓글 작성, 수정, 삭제
                                    </li>
                                    <li>
                                        댓글 평점 서비스
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
                <div style={{fontSize: "0.8em"}}> Spring framework 5.0.7, Oracle, Tomcat </div>
            </div>

            <div style={{paddingLeft: "5em", paddingRight: "5em", marginTop: "1em", marginBottom: "1em"}}>
            <hr className={"divider"}/>
            </div>

            <div className="container" style={{justifyContent: "center", display: "flex", border: "50px"}}>
                <div>
                    <div style={{textAlign: "center"}}> 예약 서비스 설계 </div>
                    <div style={{fontSize: "0.8em"}}>
                        <ol>
                            <li> 예약페이지를 통한 예약 </li>
                            <li> 사용자 예약 페이지 </li>
                            <li> 관리자 예약 페이지 </li>
                        </ol>
                    </div>
                </div>
                <div style={{marginLeft: "2em"}}>
                    <div style={{textAlign: "center"}}> 세부 기능</div>
                    <div style={{fontSize: "0.8em"}}>
                        <ol>
                            <li> 예약 시스템 </li>
                            <ol style={{listStyleType: "upper-alpha"}}>
                                <li> 가게 설정에 따른 휴가 설정(dataPicker 사용)</li>
                                <li> 예약인수 조건에 따른 예약금 설정 </li>
                            </ol>
                            <li> 사용자 예약 페이지 </li>
                            <ol style={{listStyleType: "upper-alpha"}}>
                                <li> 예약전체 조회 </li>
                                <li> 예약 상태에 따른 필터링 </li>
                                <li> 예약 현황 변경 </li>
                            </ol>
                            <li> 관리자 예약 페이지</li>
                            <ol style={{listStyleType: "upper-alpha"}}>
                                <li> 예약전체 조회</li>
                                <li> 예약 상태에 따른 필터링</li>
                                <li> 예약 현황 변경</li>
                                <li> 신청 회원의 노쇼율 계산 출력</li>
                            </ol>
                        </ol>
                    </div>
                </div>
            </div>

            <div style={{paddingLeft: "5em", paddingRight: "5em", marginTop: "1em", marginBottom: "1em"}}>
                <hr className={"divider"}/>
            </div>

            <div style={{textAlign: "center"}}> DB table</div>
            <div style={{textAlign: "center"}}>
                <Image
                    width={500}
                    height={500}
                    src="/image/database/happytable.png" alt="java"
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
                        <Link href="https://github.com/hopepu/RestaurantReservation" passHref target="_blank">

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
                    <div>live site 준비중...</div>
                    <div style={{marginTop:"0.5em"}}>
                        <div>
                            <Link href="/" passHref target="_blank">
                                <div style={{background: "white", width: "7em", height: "4.5em", borderRadius: "15%"}}>
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/image/logo/happytable.png"
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

export default HappyTable;