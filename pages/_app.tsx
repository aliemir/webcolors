import { NextPage } from "next"
import { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import "tailwindcss/tailwind.css"
import "@/styles/global.css"

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
