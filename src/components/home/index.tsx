import React from "react";
import Data from "../../data/message.json";
import FR from "../../assets/locales/fr/home.json";

import "./build.scss";

export default function Home() {
    return <div id="page"><br/><a className="brand">Chat</a><hr/><br/> {
        Data.map(_data => <span><a className="username">{_data.username}</a><br/><a className="message">{_data.message}</a> <br/><br/></span> )
    } </div>
}
