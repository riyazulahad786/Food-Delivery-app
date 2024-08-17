import {useState} from 'react'
import Header from '../../components/common/header'
import Tabs from '../../components/common/Tabs'
import Footer from '../../components/common/footer'
import Delivery from '../../components/Delivery/Delivery'
import Dining from '../../components/Dining/Dining'
import NightOut from '../../components/NightOut/NightOut'

function HomePage() {
    const [activeTabs, setActiveTabs] = useState('Delivary')
  return (
    <div>
        <Header/>
        <Tabs activeTabs={activeTabs} setActiveTabs={setActiveTabs}/>
        {getScreenOnSelectTabs(activeTabs)}
        <Footer/>
    </div>
  )
}

const getScreenOnSelectTabs=(tab)=>{
   switch (tab) {
    case "Delivary":
        return <div><Delivery/></div>
        
    case "Dining" :
         return <div><Dining/></div>
    case "NightLife" :
        return <div><NightOut/></div>
   
    default:
        return <div>delivary</div>
   }
}
export default HomePage