import React from "react";

export default function PostTitle({ children }) {
    return (
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{children}</h1>
    )
}