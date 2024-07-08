import React from 'react'
import { ImageBannerSlider } from '../Components/ImageBanner/ImageBannerSlider'
import { Deals } from '../Components/Deals/Deals'

export const TopDeals = () => {
  return (
    <div>
      <ImageBannerSlider/>
      <Deals/>
    </div>
  )
}
