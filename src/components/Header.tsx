import type { PropsWithChildren } from 'react';
import type { ImageObject } from '../types';

type HeaderProps = PropsWithChildren<{ image: ImageObject }>;

export default function Header({ image, children }: HeaderProps) {
    return (
        <header>
            <img src={image.src} alt={image.alt} />
            {children}
        </header>
    );
}
