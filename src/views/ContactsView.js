import React from 'react'
import SContactForm from '../sections/SContactForm'
import SFooter from '../sections/SFooter'
import SMainMenu from '../sections/SMainMenu'
import SMap from '../sections/SMap'
import SCurrentPageLocation from '../sections/SCurrentPageLocation'

const ContactsView = () => {
  window.top.document.title = 'Contacts | Fixxo.'

  return (
    <>
      <SMainMenu />
      <SCurrentPageLocation currentPage="Contacts"/>
      <SMap />
      <SContactForm />
      <SFooter />
    </>
  )
}

export default ContactsView