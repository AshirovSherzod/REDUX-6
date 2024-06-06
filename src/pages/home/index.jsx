import React from 'react'
import Hero from '../../components/hero'
import AlignItemsList from '../../components/lists'
import { Container } from '@mui/material'

const lists = () => {
  for (let i = 0; i <= 3; i++) {
    <AlignItemsList />
  }
}

const Home = () => {
  return (
    <main>
      <Hero />
      <Container maxWidth="xl" sx={{display: "flex", justifyContent: "space-between"}}>
        <AlignItemsList />
        <AlignItemsList />
        <AlignItemsList />
      </Container>
    </main>
  )
}

export default Home