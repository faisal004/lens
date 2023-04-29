import React from 'react'
import Explore from './Explore'
import Tablist from './Tablist'
import Button from './Button'

const ExploreForHome = () => {
  return (
    <div><Tablist/>
    <Button className="px-9"/>
    <Explore/></div>
  )
}

export default ExploreForHome