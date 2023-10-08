import React from 'react'

const ModalError = () => {
  return (
    <div
      className="relative p-4 bg-slate-100 rounded-lg shadow
    sm:p-5 max-[426px]:w-[280px] max-[769px]:w-[350px] font-principal text-black
    w-[400px]"
    >
      <div className="flex justify-between mb-4 rounded-t sm:mb-5">
        <div className="text-lg text-gray-900 md:text-xl dark:text-white">
          <h3 className="font-semibold text-black">ERROR FINDED</h3>
        </div>
      </div>
      <dl>
        <dd
          className="mb-4 font-light text-gray-500 sm:mb-5
        dark:text-gray-400"
        >
          Please reload the page or come back later
        </dd>
      </dl>
    </div>
  )
}

export default ModalError