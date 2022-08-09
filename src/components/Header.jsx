import React from "react"

export default function Header() {
    return (
        <header className="container- flex place-content-center shadow-md  bg-gradient-to-r from-indigo-400 to-indigo-900 text-white font-medium">
            <a href="/" className="w-1/12">
                <img src="../premier-league-logo.png" className="w-full" alt=""/>
            </a>
            <h1 className="text-4xl place-self-center">Premier League Tables</h1>
        </header>
    )
}