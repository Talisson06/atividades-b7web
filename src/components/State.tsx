'use client'


import { useState } from "react"



export const States = () => {


    const [count, setCount] = useState(0);

    const handleClickButton = () => {
        setCount(count + 1);
    }
    

    const [showScret, setShowSecret] = useState(Boolean)

    const showScretArea = () => {
        setShowSecret(!showScret)
    }

    const [showText, setShowText] = useState('')

    const handleBtnClick = () => {
        alert(showText)
    }

    type Person = {
        name: string;
        lastName: string;
    }
        


    const [fullName, setFullName] = useState<Person>({name:' ', lastName:' '})



    return (

        <div className=" flex flex-col justify-center items-center text-3xl">
                <p>{count}</p>
                <button onClick={handleClickButton} className="bg-blue-800 p-4">+1</button>
                <button onClick={showScretArea} className=" bg-slate-500 mt-5"> {showScret? 'Esconder' : 'Mostrar'} </button>
                
                {
                    showScret && 
                    <div className=" bg-slate-950 rounded-md mt-3">
                        pobre
                    </div>
                }   

                <div className="flex flex-col justify-center items-center m-5">
                    <input type="text" className="border border-yellow-100 text-xl text-black rounded-md mt-4"
                    placeholder="Digite o seu nome"
                    value={showText}
                    onChange={e => setShowText(e.target.value)}
                    />
                    <button onClick={handleBtnClick}>Repetir texto</button>
                </div>

                <div className="flex flex-col justify-center items-center bg-slate-500 text-black p-2 mb-5 ">

                    <input  type="text" 
                            placeholder="Nome" 
                            value={fullName.name} 
                            onChange={e => setFullName({ ...fullName, name: e.target.value })}   
                            className="p-1 m-2" />

                    <input  type="text" 
                            placeholder="Sobrenome" 
                            value={fullName.lastName} onChange={e => setFullName({ ...fullName, lastName: e.target.value })} 
                            className="p-1 m-2"/>

                    <p>Meu nome é: {fullName.name}</p>
                    <p>{fullName.lastName} </p>
                </div>


        </div>
    )



}