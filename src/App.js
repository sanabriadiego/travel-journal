import React from "react"
import Header from "./Header"
import Card from "./Card"
import data from "./data"

export default function App(){
    
    const cards = data.map(card => {
        return(
            <Card
                img = {card.imageUrl}
                location = {card.location}
                mapUrl = {card.googleMapsUrl}
                title = {card.title}
                startDate = {card.startDate}
                endDate = {card.endDate}
                description = {card.description}
            />
        )
    })

    return(
        <div className="container">
            <Header />
            <main className="section-main">
                {cards}
            </main>
        </div>
    )
}