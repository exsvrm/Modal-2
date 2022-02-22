import React from "react";
import { resolveTripleslashReference } from "typescript";
import FR from "../../../assets/locales/fr/home.json";

import "./build.scss";

export default function Nav(){
    return (
        <nav>
            <a className="brand">BLAST</a>

            <div className="content">
                <a>Projects</a>
                <a>Contact</a>
                <a>Search</a>
            </div>
        </nav>
    );
}