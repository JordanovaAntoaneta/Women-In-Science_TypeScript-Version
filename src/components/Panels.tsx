import React, { Children } from "react";

type panelProps = {
    title: string,
    isActive: boolean,
    onShow: any,
    children: string
}

function Panels(prop: panelProps) {

    return (
        <div>
            <section className="panel">
                <h3>{prop.title}</h3>
                {prop.isActive ? (
                    <p>{prop.children}</p>
                ) : (
                    <button className="buttons" onClick={prop.onShow}>
                        Show
                    </button>
                )}
            </section>
        </div>
    );
}

export default Panels;