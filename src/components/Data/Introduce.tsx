'use client';
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import "../../styles/title.css";



const Introduction = () => {

    const [cursorStyle, setCursorStyle] = useState('default'); // 마우스 커서 상태 관리

    return (
        <div>
            <div className="title">
                조용재
            </div>
            <div className="subtitle">
                <span className="web">Web </span>
                <span className="developer">Developer</span>
            </div>
            <div className="location">
                <div>Based in</div>
                <div>Suwon</div>
            </div>

            <div className="social-link"
                 style={{cursor: cursorStyle}}
                 onMouseEnter={() => setCursorStyle('pointer')}
                 onMouseLeave={() => setCursorStyle('default')}>
                <a onClick={() => window.open("https://github.com/hopepu")}>
                    <Image src="/image/github.png" alt="git"
                           width={50} height={50}
                           layout="intrinsic"
                           style={{borderRadius: "10%"}}
                    />
                </a>
                <div>
                    <Link href={"https://github.com/hopepu"}
                          style={{color: 'black'}}>https://github.com/hopepu</Link>
                </div>
            </div>

            <div className="contact">
                <div>010-9290-7654</div>
                <div>whdydwo2@gmail.com</div>
            </div>
        </div>
    )
}

export default Introduction;