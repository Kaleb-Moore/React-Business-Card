import React from "react";

export default function Profile() {
    return (
        <>
            <img src="https://via.placeholder.com/300" />
            <h2 className="profile--name">Kaleb Moore</h2>
            <h4 className="profile--position_title">React Developer</h4>
            <h5 className="profile--website">KalebMoore.dev</h5>

            <button className="button--email">Email</button>
            <button className="button--LinkedIn">LinkedIn</button>
        </>
    )
}