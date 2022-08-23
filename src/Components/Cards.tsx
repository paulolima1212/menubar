import CardComponent from "./CardComponent";

export default function CardsRender({card}: any) {    

    return (
        <div className="cards">
            <CardComponent card={card} />
        </div>
    )
}