declare module 'react-anchor-link-smooth-scroll' {
    import * as React from 'react';

    interface AnchorLinkProps {
        href: string;
        offset?: number | string;
        children: React.ReactNode;
        className?: string; // className 속성을 추가합니다.
    }

    const AnchorLink: React.FC<AnchorLinkProps>;
    export default AnchorLink;
}
