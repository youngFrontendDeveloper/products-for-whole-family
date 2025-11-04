import './Container.css';
import {ReactNode} from "react";
import classNames from 'classnames';

interface IContainerProps {
    children: ReactNode;
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