import { CardComponentProps } from "../Interfaces/Interfaces"
import { drinks } from "../temp/drinks.json";
import { aperitivos } from "../temp/aperitivos.json";
import { cafe } from "../temp/cafe.json";
import { gelados } from "../temp/gelados.json";

export const card1:CardComponentProps = {
    
    title: 'DRINKS',
    src: 'src/image/drinks.jpg',
    alt: 'DRINKS',
    items: drinks
    
}

export const card2:CardComponentProps = {

    title: 'APERITIVOS',
    src: 'src/image/aperitivos.svg',
    alt: 'APERITIVOS',
    items: aperitivos
    
}

export const card3:CardComponentProps = {

    title: 'CAFÉ',
    src: 'src/image/cafe.jpg',
    alt: 'CAFÉ',
    items: cafe
    
}

export const card4:CardComponentProps = {

    title: 'GELADOS',
    src: 'src/image/gelados.svg',
    alt: 'GELADOS',
    items: gelados
    
}