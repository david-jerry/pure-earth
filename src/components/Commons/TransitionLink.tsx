'use client';

import { useStore } from "@/hooks/useStore";
import { animateTransitionPageOut } from "@/utils/Animations";
import Link, { LinkProps } from "next/link";
import {useRouter, usePathname} from "next/navigation";
import { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
    href: string;
    ref?: React.MutableRefObject<HTMLAnchorElement | null>;
    id?: string;
    children: ReactNode;
    className?: string,
}

export default function TransitionLink({
    children,
    href,
    ...props
}: Readonly<TransitionLinkProps>) {
    const router = useRouter();
    const pathname = usePathname();
    const setHeightOfHeadElement = useStore((state: any) => state.setHeightOfHeadElement)


    const transitionToNewPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (pathname !== href) {
            setHeightOfHeadElement(0);
            animateTransitionPageOut(href, router);
        }
    }

    return (
        <Link onClick={(e) => transitionToNewPage(e)} href={href} {...props}>
            {children}
        </Link>
    );
}