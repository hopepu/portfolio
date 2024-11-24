import Link from "next/link";
import Image from "next/image";

const Header = () => {

return(
<header>
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <Image
                        width={30}
                        height={30} // 로고의 height 값
                        style={{
                            borderRadius: "50%", // 원형으로 만들기 위한 스타일
                            objectFit: "cover",  // 이미지가 원형 안에 적절히 맞춰지도록
                        }}
                        src="/Logo.jpg" alt="Logo"/>
                </Link>
            </li>

            <li>
                <Link href="/"> Home </Link>
            </li>

            <li>
                <Link href="/about"> About me </Link>
            </li>

            <li>
                <Link href="/skill"> Skills </Link>
            </li>

            <li>
                <Link href="/career"> Career </Link>
            </li>

            <li>
                <Link href="/project"> Projects </Link>
            </li>



        </ul>
    </nav>
</header>
);};

export default Header;