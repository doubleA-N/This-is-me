import React from 'react'
import { MY_ABOUT } from '../const'

const MyTimeline = () => {
  return (
    <div className="sm:z-0 relative wrap overflow-hidden p-10 h-full">
      <div
        className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
        style={{ left: '50%' }}
      />
      {MY_ABOUT.map((info, idx) => (
        <div>
          {(idx + 1) % 2 !== 0 ? (
            <div className="mb-8 flex justify-between items-center w-full md:right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="invisible md:visible md:z-10 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {idx + 1}
                </h1>
              </div>
              <div className="order-1 bg-gray-200 rounded-lg shadow-xl md:w-5/12 z-10 px-6 py-4">
                <h3 className="font-bold text-gray-800 text-xl">
                  {info.title}
                </h3>
                <p className="mb-3 text-gray-500 text-sm">{info.timeline}</p>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  {info.sub_title}
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full md:left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="invisible md:visible md:z-10 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">
                  {idx + 1}
                </h1>
              </div>
              <div className="order-1 bg-violet-700 rounded-lg shadow-xl md:w-5/12 z-10 px-6 py-4">
                <h3 className="font-bold text-white text-xl">{info.title}</h3>
                <p className="mb-3 text-white text-sm">{info.timeline}</p>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  {info.sub_title}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default MyTimeline
