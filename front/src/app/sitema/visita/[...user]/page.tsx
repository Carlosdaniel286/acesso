import on from './style/style.module.css'
import Scroll from './components/scroll/sroll'


export default function Mean() {
    return (
      <div className={on.body} >
         <header className={on.seach}>
            <input type="text" 
             placeholder='pequise e encontre'
            />
         </header>
           <main>
              <Scroll />
             
            </main>
            <div>fgfgf</div>
      </div>
    )
  }
  