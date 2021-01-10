import React from "react"
import { NextPage } from "next"
import Head from "next/head"
import { useTheme } from "next-themes"

import { ThemeToggle } from "@/components/theme-toggle"
import { Color, colors, randomColor } from "@/utils/colors"

const Home: NextPage = () => {
  const { theme } = useTheme()
  const [color, setColor] = React.useState<Color | undefined>(undefined)

  React.useEffect(() => {
    setColor(randomColor())
  }, [])
  return (
    <>
      <Head>
        <title>Web Colors</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        <header className="fixed top-0 z-10">
          <div className="flex bg-white dark:bg-gray-700 px-4 py-5 h-auto w-full max-w-2xl rounded-lg border-solid border-gray-200 dark:border-gray-500 border-b-1 border-4 border-t-0 border-l-0 border-r-0">
            <div
              style={{
                boxShadow: `${
                  theme === "dark" ? "#384152" : "white"
                } 0px 0px 0px 2px, ${
                  color?.name ?? "lightgray"
                } 0px 0px 0px 4px`,
                backgroundColor: color?.name,
              }}
              className="w-20 h-auto flex-shrink-0 rounded-lg transition-all duration-250"
            >
              &nbsp;
            </div>
            <div className="flex-1 pl-4">
              <label htmlFor="color-name">
                <input
                  id="color-name"
                  style={{
                    color: color?.name,
                  }}
                  className="text-xl text-gray-900 dark:text-white border-1 rounded-lg bg-transparent w-full outline-none"
                  value={color?.name}
                  readOnly
                />
              </label>
              <label htmlFor="color-hex">
                <input
                  id="color-hex"
                  style={{ color: color?.name }}
                  className="text-base text-gray-900 dark:text-white border-1 rounded-lg bg-transparent w-full outline-none"
                  value={color?.hex}
                  readOnly
                />
              </label>
              <label htmlFor="color-rgb">
                <input
                  id="color-rgb"
                  style={{ color: color?.name }}
                  className="text-base text-gray-900 dark:text-white border-1 rounded-lg bg-transparent w-full outline-none"
                  value={color?.rgb}
                  readOnly
                />
              </label>
            </div>
            <div className="mt-auto mb-auto">
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="mt-28 py-5">
          <div className="flex flex-wrap justify-evenly">
            {colors.map((el) => (
              <button
                key={el.id}
                style={{ backgroundColor: el.name }}
                onClick={() => setColor(el)}
                className={`w-12 h-12 focus:outline-none rounded-lg flex-shrink-0 ring-gray-100 dark:ring-gray-500 dark:ring-offset-gray-800 my-3 mx-2 transform hover:scale-125 transition duration-500 ease-in-out ${
                  el.id === color?.id
                    ? "scale-110 ring-4 ring-offset-0"
                    : "ring-2 ring-offset-2"
                }`}
              >
                &nbsp;
              </button>
            ))}
            {Array.from({ length: 7 }).map((el, i) => (
              <div
                className="w-12 h-12 rounded-lg flex-shrink-0 ring-offset-2 my-3 mx-2 transform hover:scale-125"
                key={`dummy-${i}`}
              />
            ))}
          </div>
        </main>
        <footer className="py-6 flex items-center justify-center  rounded-lg border-solid border-gray-200 dark:border-gray-500 border-t-1 border-4 border-b-0 border-l-0 border-r-0 text-gray-800 dark:text-gray-50">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/aliemir/webcolors"
          >
            view on github
          </a>
        </footer>
      </div>
    </>
  )
}

export default Home
