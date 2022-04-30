import '../styles/globals.css'
import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {

  return (
    <RecoilRoot>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>)


}

export default MyApp
