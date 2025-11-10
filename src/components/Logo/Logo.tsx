import './Logo.css';
import * as React from "react";
import classNames from "classnames";

export default function Logo({mixinClass}: { mixinClass?: string }): React.JSX.Element {
    return (
        <a href="/" className={classNames("logo", mixinClass)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="35" viewBox="0 0 90 35">
                <text
                    x="45"
                    y="15"
                    textAnchor="middle"
                    style={{
                        fontFamily: "Arial, sans-serif",
                        fontWeight: "bold",
                        fill: "#1677ff",
                        fontSize: "20px"
                    }}
                >
                    ТОВАРЫ
                </text>
                <text
                    x="45"
                    y="30"
                    textAnchor="middle"
                    style={{
                        fontFamily: "Arial, sans-serif",
                        fill: "#ee43ac",
                        fontSize: "12px",
                        fontWeight: "normal"
                    }}
                >
                    для всей семьи
                </text>
            </svg>
        </a>
    );
};