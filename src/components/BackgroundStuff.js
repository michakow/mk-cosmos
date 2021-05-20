import Circle from './Circle'
import Path from './Path'

const BackgroundStuff = () => {
  return (
    <>
      <Circle pos='left' />
      <Circle pos='top' />
      <Circle pos='right' />
      <Path pos='left' />
      <Path pos='top' />
      <Path pos='right' />
      <Path pos='bottom' />
    </>
  )
}

export default BackgroundStuff
