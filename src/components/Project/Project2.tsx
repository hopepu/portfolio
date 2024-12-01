'use client'

import { useState } from "react";
import Image from "next/image";
import HappyTablePage from "@/app/projectLists/happytable/page"; // HappyTable을 모달 안에 띄우기 위해 import

const RestaurantReservation = () => {

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
            <div className="project_list_img" onClick={openModal}>
                <Image
                    width={300}
                    height={300}
                    src="/image/project/happytable.png"
                    alt="Happy Table"
                    style={{
                        objectFit: "contain",
                        borderRadius: "10%",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </div>
            <h2>Happy Table</h2>
            <h3>사용 기술</h3>
            <h4>Spring Framework + CSS + OracleDB</h4>
            <h3>직책 및 맡은 분야</h3>
            <h4>예약 시스템 구축</h4>

            {isModalOpen && (
                <div id="modal-overlay" className={"modalOverlayStyle"} onClick={handleOutsideClick}>
                    <div className={"modalContentStyle"}>
                        <button onClick={closeModal} className={"closeButtonStyle"}>X</button>
                        <HappyTablePage/>
                    </div>
                </div>
            )}
        </div>
    );
};


export default RestaurantReservation;
