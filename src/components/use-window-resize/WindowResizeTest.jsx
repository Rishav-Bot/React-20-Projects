import React, { useState } from 'react'
import UseWindowResize from './UseWindowResize'

const WindowResizeTest = () => {
   const windowSize = UseWindowResize();
   const {width, height} = windowSize;
  return (
    <div>
    <h2>Use Window Resize Hook</h2>
    <p>Width is {width}</p>
    <p>Height is {height}</p>
  </div>
  )
}

export default WindowResizeTest