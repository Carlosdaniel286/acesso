import on from '../scroll/style/scroll.module.css'
import Card from '../visitaCard/card'

export default function Scroll(){
    return (
        <div className={on.bodyon}>
           <div className={on.scroll}>
            <div className={on.cards}><Card /></div>
            <div className={on.cards}><Card /></div>
            <div className={on.cards}><Card /></div>
            <div className={on.cards}><Card /></div>
            <div className={on.cards}><Card /></div>
            <div className={on.cards}><Card /></div>
            <div className={on.cards}><Card /></div>
            <div className={on.cards}><Card /></div>
            <div className={on.cards}><Card /></div>
           </div>
        
        </div>
    )
}