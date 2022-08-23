import ItemCard from "./ItemCard"
interface ContextProps{
    setModalVisible: (boolean: boolean) => {};
    setModalContent: (string: string) => string;
    setModalTitle: (string: string) => string;
}

export default function CardComponent({card}: any) {

    return (
        <div className="card">
            <div className="face face1" data-text={card.alt} >
                <img src={card.src} alt={card.alt}  />
            </div>
            <div className="face face2">
                <div className="card-title">
                    <h3 >{card.title}</h3>
                </div>
                <div className="itemcard">
                    {card.items.map((item: any) => {
                        return <ItemCard 
                                    name={item.name}
                                    src={item.src} 
                                    price={item.price} 
                                    alt={item.name} 
                                    content={item.content} 
                                    key={item.name} 
                                />
                    })}
                    
                </div>
            </div>
        </div>
    )
}