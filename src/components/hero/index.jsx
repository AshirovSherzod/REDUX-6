import { Button, Container, Drawer, TextField } from '@mui/material'
import React from 'react'
import './hero.scss'

const Hero = () => {
    return (
        <Container maxWidth="xl">
            <section className='hero'>
                <div className="hero__left">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium harum iste <br /> ad sunt, voluptate odit incidunt earum, deleniti minus modi a itaque inventore quae maxime, ipsa <br /> temporibus numquam dolorum.</p>
                    <div className="hero__form">
                        <TextField
                            id="outlined-basic"
                            hiddenLabel
                            size="small"
                            variant="outlined"
                            aria-label="Contact here"
                            placeholder="Your email address"
                            inputProps={{
                                autoComplete: 'off',
                                'aria-label': 'Enter your email address',
                            }}
                        />
                        <Button variant="contained">Subscribe</Button>
                    </div>
                </div>
                <div className="hero__right">
                    <img src="https://static.vecteezy.com/system/resources/previews/013/223/132/non_2x/man-in-red-t-shit-shrug-or-i-don-t-know-oops-illustration-vector.jpg" alt="" />
                </div>
            </section>
        </Container>
    )
}

export default Hero