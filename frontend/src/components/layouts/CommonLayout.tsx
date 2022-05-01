import React from "react"

import { Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Header from "components/layouts/Header"
import Footer from "components/layouts/Footer"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem"
  }
}))

interface CommonLayoutProps {
  children: React.ReactElement
}

// �S�Ẵy�[�W�ŋ��ʂƂȂ郌�C�A�E�g
const CommonLayout = ({ children }: CommonLayoutProps) => {
  const classes = useStyles()

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container justifyContent="center">
            {children}
          </Grid>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default CommonLayout