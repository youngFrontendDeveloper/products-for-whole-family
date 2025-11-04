import './Logo.css';
import {JSX} from "react";
import classNames from "classnames";

export default function Logo({mixinClass}: { mixinClass?: string }): JSX.Element {
    return (
        <a href="/" className={classNames("logo", mixinClass)}>
            <svg
                xmlns="http://www.w3.org/2000/svg" width="90" height="32" viewBox="0 0 90 32"
                fontFamily="Arial, sans-serif"
            >
                <text
                    x="45" y="18" fontSize="18" fill="currentColor" fontWeight="bold" textAnchor="middle"
                >НОВОСТИ
                </text>
                <text x="45" y="30" fontSize="8" fill="currentColor" letterSpacing="1" textAnchor="middle">ВСЕГДА В
                    КУРСЕ
                </text>
            </svg>
        </a>
    );
};