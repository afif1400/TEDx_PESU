import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

const Banner = ({}) => {
    return (
        <div
            className='topBanner'
            style={{ backgroundColor: '#f1ff39', height: 64 }}
        >
            <Container maxWidth='lg' style={{ width: '100%', height: '100%' }}>
                <Grid
                    container
                    alignItems='center'
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    justify='space-between'
                >
                    <Grid item xs>
                        <Typography component='span'>
                            Event goes live today! Catch it live on Airmeet from{' '}
                            <strong>5pm </strong>
                            onwards.
                        </Typography>

                        <a
                            href='https://tedxpesu.com/links/view'
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                variant='outlined'
                                style={{
                                    marginLeft: 32,

                                    paddingLeft: 16,
                                    paddingRight: 16,
                                }}
                            >
                                Watch now
                            </Button>
                        </a>
                    </Grid>
                    <div></div>
                </Grid>
            </Container>
        </div>
    )
}

export default Banner
