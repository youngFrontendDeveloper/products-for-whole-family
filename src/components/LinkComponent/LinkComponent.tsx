import './LinkComponent.css';
import {Link} from "react-router-dom";
import type {ReactNode} from "react";
import classNames from 'classnames';

export default function LinkComponent({href, children, mixinClass}: {
    href: string,
    children: ReactNode,
    mixinClass?: string
}) {
    return (
        <Link to={href} className={classNames('link', mixinClass)}>
            {children}
        </Link>
    );
};