import React from "react";       
import fr from "../../../assets/locales/fr/home.json";
import en from "../../../assets/locales/en/home.json";

const T: React.FC = () => {
    const getLang = () => {
        return fr.map((app) => {
            return <a>{app.projects}</a>
        })
    }

    return (
        <>
        {getLang()}
        <a>{navigator.language.slice(0, 2)}</a>
        </>
    )
}

export default T;