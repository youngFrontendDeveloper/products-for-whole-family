import './LinkComponent.css';
import {Link} from "react-router-dom";
import type {ReactNode} from "react";
import classNames from 'classnames';

export default function LinkComponent({href, children, mixinClass, variants}: {
    href: string,
    children: ReactNode,
    mixinClass?: string,
    variants?: string[],
}) {
    return (
        <Link to={href} className={classNames('link', mixinClass, variants)}>
            {children}
        </Link>
    );
};