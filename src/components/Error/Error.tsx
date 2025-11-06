import "./Error.css";
import type {ReactNode} from "react";

interface ErrorProps {
    children: ReactNode,
}

export default function Error({children}: ErrorProps) {
    return <div className="error">{children}</div>;
}

