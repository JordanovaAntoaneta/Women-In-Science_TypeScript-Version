import React from "react";

type props = {
    pername: string,
    perimage: string
};

function Profile(prop: props) {

    return (
        <div className="scientist-profile">
            <img className="scientist-image" src={prop.perimage} />
            <div className="scientist-name">{prop.pername}</div>
        </div>
    );
}

export default Profile;