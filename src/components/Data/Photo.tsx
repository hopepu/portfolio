import Image from 'next/image';

const Photo = () => {
    return (
        <div
            style={{
                border: "3px solid black",
                borderRadius: "10%",
                overflow: "hidden",
                position: "relative",
                height: "90%",
                width: "90%",
                maxWidth: "100%", // 컨테이너가 화면 너비를 초과하지 않도록 설정
                maxHeight: "auto", // 화면 크기에 맞게 높이를 자동으로 조정
            }}
        >
            <Image
                src="/image/Photo.jpg"
                alt="Photo"
                width={350}
                height={350}
                layout="responsive"  // 반응형 레이아웃을 사용하여 크기를 자동으로 조정
                style={{
                    objectFit: "cover", // 이미지가 컨테이너에 맞게 잘리면서 채워지도록 설정
                    height: "100%",     // 이미지 높이를 컨테이너에 맞춰 100%로 설정
                    width: "100%",      // 이미지 너비를 컨테이너에 맞춰 100%로 설정
                    verticalAlign: "middle",
                }}
            />
        </div>
    );
}

export default Photo;
