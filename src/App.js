import React from 'react'
import Main from './component/main'
import zurag from './assets/zurag/1.jpg'
import zurag1 from './assets/zurag/2.jpg'
import zurag2 from './assets/zurag/3.jpg'
import zurag3 from './assets/zurag/4.jpg'
import zurag4 from './assets/zurag/5.jpg'
import zurag5 from './assets/zurag/6.jpg'
import zurag6 from './assets/zurag/78.jpg'
import zurag7 from './assets/zurag/8.jpg'

function App (){
  return(
    <div className='grid grid-cols-3 gap-[20px] mt-[30px]'>
      <Main picture={zurag} garchig='Avengers'/>
      <Main picture={zurag1} garchig='huurhun gulug' />
      <Main picture={zurag2} garchig='Weather with you' />
      <Main picture={zurag3} garchig='Suzume no tojimari' />
      <Main picture={zurag4} garchig='Goy gazar bgaz' />
      <Main picture={zurag5} garchig='Goy gazar bgaz' />
      <Main picture={zurag6} garchig='About time' />
      <Main picture={zurag7} garchig='In the mood for love' />   
    </div>
  )
}
export default App;