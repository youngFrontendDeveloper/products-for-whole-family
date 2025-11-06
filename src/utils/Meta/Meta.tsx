import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface MetaProps {
    title: string;
    description: string;
}

export default function Meta({ title, description }: MetaProps) {
    const location = useLocation();

    useEffect(() => {
        document.title = title;

        const metaDescription = document.querySelector(`meta[name="description"]`);
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = description;
            document.head.appendChild(meta);
        }
    }, [location, title, description]);

    return null;
}
