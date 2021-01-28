import React from 'react'

function Button({text , className , href , newTab}) {
    return (
        <div className = {className}>
            <a className = 'button__mainbutton'
            href = {href}
            target = {newTab && "_blank"}
            >
                {text}
            </a>
        </div>
    )
}

export default Button
