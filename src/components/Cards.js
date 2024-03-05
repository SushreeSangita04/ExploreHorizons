import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
              
                    <ul className='cards__items'>
                     <CardItem
                      src={process.env.PUBLIC_URL+'/images/img-9.jpg'}
                      text='Explore the hidden waterfall deep inside the Amazon Forests'
                      label='Adventure'
                      path='/services'
                     />
                     <CardItem
                      src={process.env.PUBLIC_URL+'/images/img-4.jpg'}
                      text='Experience Football on the Top of the Himalayan Mountain'
                      label='Adventure'
                      path='/services'
                     />
                      
                    
                </ul>
                <ul className='cards__items'>
                     <CardItem
                     src={process.env.PUBLIC_URL+'/images/img-3.jpg'}
                      text='Set Sail in  the Atlantic Ocean visiting Uncharted Waters'
                      label='Mystery'
                      path='/services'
                     />
                      <CardItem
                      src={process.env.PUBLIC_URL+'/images/img-2.jpg'}
                      text='Travel through the Islands of Lakshadweep in a Private Cruise'
                      label='Luxury'
                      path='/services'
                     />
                      <CardItem
                      src={process.env.PUBLIC_URL+'/images/img-1.jpg'}
                      text='Travel through the unrevealed parts of the world'
                      label='Nature'
                      path='/services'
                     />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
