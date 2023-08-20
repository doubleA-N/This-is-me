import React from 'react'
import Image from 'next/image'
import { Element } from 'react-scroll'
import Button from '../commons/button'
import { downloadMyResume } from './utils'

const MeSection = () => {
  return (
    <Element
      name={0}
      className="h-fit bg-cover bg-center bg-gradient-to-r from-indigo-200"
    >
      <div className="flex flex-col-reverse md:flex-row justify-center m-8 md:m-20">
        <div className="flex flex-col items-center justify-center w-4/4 md:w-2/4 animate-bottom-to-top my-8">
          <div className="flex flex-col">
            <span className="text-violet-700 text-5xl font-bold">
              Hi, I'm Aey
            </span>
            <span className="text-gray-600 text-xl">Software Engineer</span>
            <span className="text-gray-500 text-l my-1">
              Experienced software engineer focusing on frontend development,
              specializing in React, and JavaScript. With 2 years of hands-on
              experience :D
            </span>
            <Button
              className="md:animate-bounce w-fit bg-violet-700 hover:bg-violet-900 text-white font-bold my-8 py-2 px-4 rounded flex items-center"
              label="Download My Resume"
              type="submit"
              onClickFunction={downloadMyResume}
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
            </Button>
          </div>
        </div>
        <div className="w-4/4 md:w-2/4 flex justify-end ">
          <div className="bg-contain bg-center bg-violet-600 rounded-l-full">
            <Image alt={'me-pic'} src="/its-me.png" width={400} height={400} />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default MeSection
