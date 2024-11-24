'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import styles from '../../styles/Header.module.css'; // CSS 모듈 임포트
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.logoContainer}>
                    <Link href="/">
                        <Image
                            width={70}
                            height={70}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                            layout="intrinsic"
                            src="/image/characterLogo.jpg" alt="Logo"
                        />
                    </Link>
                </div>

                <nav>
                    <button
                        className={styles.hamburgerButton}
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                        ☰
                    </button>

                    {/* 데스크탑 메뉴 */}
                    <ul className={styles.desktopMenu}>
                        <li>
                            <AnchorLink href="#about" className={styles.menuLink}>About me</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#skill" className={styles.menuLink}>Skills</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#career" className={styles.menuLink}>Career</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#project" className={styles.menuLink}>Projects</AnchorLink>
                        </li>
                    </ul>

                    {/* 모바일 메뉴 */}
                    <ul className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                        <li>
                            <AnchorLink href="#about" className={styles.menuLink}>About me</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#skill" className={styles.menuLink}>Skills</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#career" className={styles.menuLink}>Career</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#project" className={styles.menuLink}>Projects</AnchorLink>
                        </li>
                        <li onClick={() => setMenuOpen(false)} className={styles.menuLink}>
                            Close
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
