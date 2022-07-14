import React from "react";

function displaytime(minutes){
    const emoji = minutes < 30? "☕️" : "🍱"
    const number = minutes < 30 ?  5:10 
    let emojis = ""
    for (let i = 0 ; i <=minutes; i+= number){
        emojis += emoji
    }
    const text = emojis + " "+ minutes + " "+ "min to read"
    return text
}

function Article ({title, date ="January 1, 1970", preview , minutes}){
    

    return (
        
        <article>
            <h3>{title}</h3>
            <small>{date}. {displaytime(minutes)}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;