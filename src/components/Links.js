import { useState } from 'react'
import styled from 'styled-components'
import Link from './Link'
import Modal from './Modal'

const StyledLinks = styled.div`
  display: flex;
  width: 350px;
  min-height: 448px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`

const Links = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')

  const showModalBox = () => {
    setShowModal(true)
  }

  const closeModalBox = () => {
    setShowModal(false)
  }

  const setType = (type) => {
    setModalType(type)
  }

  return (
    <>
      <StyledLinks>
        <Link type="capsules" onShowModal={showModalBox} onSetType={setType} />
        <Link type="crew" onShowModal={showModalBox} onSetType={setType} />
        <Link type="rockets" onShowModal={showModalBox} onSetType={setType} />
        <Link type="starlink" onShowModal={showModalBox} onSetType={setType} />
      </StyledLinks>
      {showModal && <Modal type={modalType} onCloseModal={closeModalBox} />}
    </>
  )
}

export default Links
