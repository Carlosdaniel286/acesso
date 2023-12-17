import on from '../scroll/style/scroll.module.css'
import Ofertas from '../visitaCard/card'

export default function Scroll(){
    return (
        <div className={on.bodyon}>
           <div className={on.scroll}>
            <div className={on.ofertas}><Ofertas /></div>
             <div className={on.ofertas}><Ofertas /></div>
             <div className={on.ofertas}><Ofertas /></div>
             <div className={on.ofertas}><Ofertas /></div>
             <div className={on.ofertas}><Ofertas /></div>
             <div className={on.ofertas}><Ofertas /></div>
             <div className={on.ofertas}><Ofertas /></div>
             <div className={on.ofertas}><Ofertas /></div>
             <div className={on.ofertas}><Ofertas /></div>
             <div className={on.ofertas}><Ofertas /></div>
             <div className={on.ofertas}><Ofertas /></div>
           </div>
        
        </div>
    )
}