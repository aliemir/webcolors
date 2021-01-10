import React from "react"
import { NextPage } from "next"
import { ThemeToggle } from "@/components/theme-toggle"

const Home: NextPage = () => {
  return (
    <div className="p-4 shadow rounded bg-white">
      <ThemeToggle />
      <h1 className="text-purple-500 leading-normal">Next.js</h1>
      <p className="text-gray-500">with Tailwind CSS</p>
    </div>
  )
}

export default Home
