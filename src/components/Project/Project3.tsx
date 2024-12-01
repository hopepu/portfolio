'use client'

import Image from "next/image";
import {useState} from "react";
import ProjectITPage from "@/app/projectLists/projectIT-ERPsystem/page";

const ITERPsystem = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target && (e.target as HTMLElement).id === "modal-overlay") {
            closeModal();
        }
    }


    return (
        <div>
            <div className={"project_list_img"} onClick={openModal}>
                <Image
                    width={300}
                    height={300}
                    src="/image/project/projectIT.png" alt="java"
                    style={{
                        objectFit: "contain",
                        borderRadius: "10%",
                        width: "100%",
                        height: "100%"
                    }}/>
            </div>
            <h2> IT Project ERP System</h2>
            <h3> 사용 기술 </h3>
            <h4> Spring boot, React, Maria DB</h4>
            <h3> 직책 및 맡은 분야</h3>
            <h4> 회원시스템(spring security) 인사관리 </h4>

            {isModalOpen && (
                <div id="modal-overlay" className={"modalOverlayStyle"} onClick={handleOutsideClick}>
                    <div className={"modalContentStyle"}>
                        <button onClick={closeModal} className={"closeButtonStyle"}>X</button>
                        <ProjectITPage/>
                    </div>
                </div>
            )}
        </div>

    )
}

export default ITERPsystem;