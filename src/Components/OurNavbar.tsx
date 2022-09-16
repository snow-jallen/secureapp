import { Button } from '@mui/material'
import React from 'react'
import { ButtonAppBarPropType } from './Navbar'

export default function OurNavbar({loginHandler, loggedIn}:ButtonAppBarPropType) {
  return (
      <>
        {!loggedIn && <Button color="inherit" onClick={()=> loginHandler()}> Login</Button> }
        {loggedIn && <Button color="inherit" onClick={()=> loginHandler()}> Log out</Button> }
      </>
  )
}
