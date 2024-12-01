'use client';
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";



const Introduction = () => {

    const [cursorStyle, setCursorStyle] = useState('default'); // 마우스 커서 상태 관리

    return (
        <div>
            <div style={{fontSize: '3em', marginBottom: '0.5em', marginTop: '0.5em', textAlign: 'center'}}>
                조용재
            </div>
            <div style={{marginBottom: '1em', textAlign: 'center'}}>
                <span style={{fontSize: '2.5em'}}>Web </span>
                <span style={{fontSize: '2.1em'}}>Developer</span>
            </div>
            <div
                style={{justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: '0.5em'}}>
                <div style={{fontSize: '2em'}}>Based in</div>
                <div style={{fontSize: '2.5em', textAlign: 'right', marginLeft: '0.5em'}}>Suwon</div>
            </div>


            <div style={{textAlign: 'center', marginTop: '6em', cursor: cursorStyle}}
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

            <div style={{marginTop: '3em', textAlign: 'center'}}>
                <div>010-9290-7654</div>
                <div>whdydwo2@gmail.com</div>
            </div>
        </div>
    )
}

export default Introduction;