import Image from "next/image";

const Photo = () => {
    return(
        <div style={{border:"3px solid black",
            borderRadius:"10%",
            overflow: "hidden",
            position:"relative",
            height:"100%",
            width:"100%"}} >
            <Image src="/image/Photo.jpg" alt="Photo"
                   width={350} height={350}
                   layout="instrinsic"
                   style={{objectFit:"cover", height:"100%", width: "100%"}}
                   />
        </div>
    )
    
}
export default Photo;