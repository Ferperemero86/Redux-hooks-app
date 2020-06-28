import React from "react";

const getBundle = () => {
    console.log("GET BUNDLE")
    import("lodash").then(_ => {
        console.log("imported", _)
    })
}

const Gallery = () => {
    return <h1 onClick={getBundle}>Gallery</h1>
}

export default Gallery;