import React from "react"
import { NextPage } from "next"
import Head from "next/head"
import { ThemeToggle } from "@/components/theme-toggle"
import { colors } from "@/utils/colors"

const empty = "Select a color"

const Home: NextPage = () => {
  const [color, setColor] = React.useState(undefined)

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
                boxShadow: `white 0px 0px 0px 2px, ${color} 0px 0px 0px 4px`,
                backgroundColor: color,
              }}
              className="w-20 h-auto flex-shrink-0 rounded-lg transition-all duration-250"
            >
              &nbsp;
            </div>
            <div className="flex-1 px-4">
              <label htmlFor="color-name">
                <input
                  id="color-name"
                  style={{ color }}
                  className="text-xl border-1 rounded-lg bg-transparent w-full outline-none"
                  value={color ?? empty}
                  readOnly
                />
              </label>
              <label htmlFor="color-hex">
                <input
                  id="color-hex"
                  className="text-base text-gray-600 border-1 rounded-lg bg-transparent w-full outline-none"
                  value={color ?? ""}
                  readOnly
                />
              </label>
              <label htmlFor="color-rgb">
                <input
                  id="color-rgb"
                  className="text-base text-gray-600 border-1 rounded-lg bg-transparent w-full outline-none"
                  value={color ?? ""}
                  readOnly
                />
              </label>
            </div>
          </div>
        </header>
        <main className="h-screen mt-28 py-5">
          <div className="flex flex-wrap justify-evenly">
            {colors.map((el) => (
              <button
                key={el}
                style={{ backgroundColor: el }}
                onClick={() => setColor(el)}
                className="w-12 h-12 focus:outline-none rounded-lg flex-shrink-0 ring-2 ring-gray-100 dark:ring-gray-500 ring-offset-2 dark:ring-offset-gray-800 my-3 mx-2 transform hover:scale-125 transition duration-500 ease-in-out "
              >
                &nbsp;
              </button>
            ))}
            {Array.from({ length: 7 }).map((el: string) => (
              <div
                className="w-12 h-12 rounded-lg flex-shrink-0 ring-offset-2 my-3 mx-2 transform hover:scale-125"
                key={el}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
