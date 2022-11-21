import React from 'react'

function Card({children, modal}) {
  return (
    <div className=" flex  flex-col justify-center overflow-hidden ">
      <div className={modal ? "relative bg-green-500 px-6 pt-10 pb-9  mx-auto w-full max-w-lg rounded-2xl":"relative bg-white px-6 pt-10 pb-9  mx-auto w-full max-w-lg rounded-2xl"}>
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card