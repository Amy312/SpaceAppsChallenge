import React from 'react'

interface Props{
    state: boolean;
}

const StateActivity = ({state}:Props) => {
    const styles:string = state ? "h-max rounded-lg shadow-lg py-1 px-4 bg-button-green font-medium text-white font-principal" :
    "h-max rounded-lg shadow-lg py-1 px-4 bg-slate-500 font-medium text-white font-principal";
    const text:string = state ? "Accepted" : "Pendient";

    return (
    <p className={styles}>
        {text}
    </p>
  )
}

export default StateActivity