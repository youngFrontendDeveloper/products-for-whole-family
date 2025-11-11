import './Container.css';
import classNames from 'classnames';
import * as React from "react";

interface IContainerProps {
    children: React.ReactNode;
    mixinClass?: string;
}

export default function Container({children, mixinClass}: IContainerProps) {
    return (
        <div
            className={classNames(
                "container",
                mixinClass
            )}
        >
            {children}
        </div>
    );
};