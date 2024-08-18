import {} from 'react'
import { PiCaretRightThin } from "react-icons/pi";

function Resturants() {
    const resturentCityData = [
        {
            city:"Bangalore Restaurants"
        },
        {
            city:"Mumbai Restaurants"
        },
        {
            city:"Chennai Restaurants"
        },
        {
            city:"New Delhi Restaurants"
        },
        {
            city:"Pune Restaurants"
        },
        {
            city:"Kolkata Restaurants"
        },
        {
            city:"Agra Restaurants"
        },
        {
            city:"Ajmer Restaurants"
        },
        {
            city:"Gurugram Restaurants"
        },
        {
            city:"Manali Restaurants"
        },
        {
            city:"Coorg Restaurants"
        },
        {
            city:"Odisha Restaurants"
        },
        {
            city:"Gulbarga Restaurants"
        },
       
        {
            city:"Mangalore Restaurants"
        },
        {
            city:"Hyderabad Restaurants"
        },
        

        


    ]
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 d-flex flex-column text-center align-items-center justify-content-center'>
                    <h3>Popular locations in India flag India</h3>
                    <p>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>

                </div>
            </div>
            <div className='row'>
                {
                    resturentCityData.map((item,i)=>(
                        <>
                        <div className='col-lg-3'>
                    <div className='card resturent_card' key={i}>
                       <div><span>{item.city}</span> <span><PiCaretRightThin /></span></div>
                    </div>
                </div>
                        </>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Resturants