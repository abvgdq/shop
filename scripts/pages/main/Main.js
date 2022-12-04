import { Slider } from './Slider/Slider.js'
import { Benefits } from './Benefits/Benefits.js'
import { Select } from './Select/Select.js'
import { Katalog } from './Katalog/Katalog.js'
import { Reviews } from './Reviews/Reviews.js'
import { Info } from './info/info.js'
 
export const Main = () => {
    const slider = Slider();
    const benefits = Benefits();
    return `${slider}${benefits}`
}

export const ArmChairs = () => {
    const select = Select();
    const katalog = Katalog();
    return `${select}${katalog}`
}

export const ShopReviews = () => {
    const reviews = Reviews();
    return `${reviews}`
}

export const ArmInfo = () => {
    const info = Info();
    return `${info}`
}