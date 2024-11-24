'use client';
import Image from "next/image";

const Introduction = () => {
    return (
        <div>
            <div style={{fontSize: '3em', marginBottom: '0.5em', marginTop: '0.5em'}}>
                조용재
            </div>
            <div style={{marginBottom: '1em'}}>
                <span style={{ fontSize: '2.3em'}}>Web </span>
                <span style={{ fontSize: '2.1em' }}>Developer</span>
            </div>
            <div style={{fontSize: '2em', marginBottom: '0.5em'}}>Based in</div>
            <div style={{fontSize: '3em'}}>Suwon</div>
            <h3>Tel:010-9290-7654</h3>
            <h3>email:whdydwo2@gmail.com</h3>
            <button onClick={() => window.open("https://github.com/hopepu")}>
                <Image src="/image/github.png" alt="git"
                       width={50} height={50}
                       layout="intrinsic"
                       style={{ borderRadius: "10%" }}
                />
                https://github.com/hopepu
            </button>
        </div>
    )
}

export default Introduction;