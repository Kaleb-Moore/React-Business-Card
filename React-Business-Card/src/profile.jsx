import React from "react";

export default function Profile() {
    return (
        <div className="profile">
            <img src="https://via.placeholder.com/300" className="profile--pic"/>
            <h2 className="profile--name">Kaleb Moore</h2>
            <h4 className="profile--position_title">React Developer</h4>
            <h5 className="profile--website">KalebMoore.dev</h5>
            
            <div className="profile--buttons">
                <button className="button--email">Email</button>
                <button className="button--LinkedIn">LinkedIn</button>
            </div>
        </div>
    )
}