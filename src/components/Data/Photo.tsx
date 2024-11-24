import Image from "next/image";

const Photo = () => {
    return(
        <div>
            <Image src="/image/Photo.jpg" alt="Photo"
                   width={350} height={350}
                   layout="intrinsic"
                   style={{ borderRadius: "10%" }}
                   />
        </div>
    )
    
}
export default Photo;