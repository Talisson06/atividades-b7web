import { TodoItem } from "@/types/TodoItem";
import { useState } from "react"

export const ListaDeTarefa = () => {



    const [itemInput, setItemInput] = useState('')
    const [list, setList] = useState < TodoItem[] > ( [] );

    const handleAddBuntton = () => {

        if ( itemInput.trim() === '') return;
            setList([
                ...list,
                {id: list.length +1,  label: itemInput, checked: false}
            ]);
            setItemInput('');

    }
    const deleteItem =(id : number) => {
        setList(
            list.filter((item => item.id!== id))
            );
    }

    const toggleItem = (id : number) =>{
        let newList = [...list];
        for(let i in newList) {
            if(newList[i].id === id) {
                newList[i].checked = !newList[i].checked;
            }
        }

        setList(newList);
    }

    return(

        <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl">
            <h1 className="text-4xl mt-5">Lista de Tarefas</h1>
            <div className=" mt-5 p-2 bg-rose-300">
                <input  type="text"
                        placeholder="Sua tarefá"
                        className="flex-1 border border-b-black p-3 text-2xl text-black rounded-md mr-3"
                        value={itemInput}
                        onChange={ e => setItemInput(e.target.value)}
                        />
                <button onClick={handleAddBuntton}> Adicionar </button>
                
            </div>
            <p className="mt-4"> Itens na lista: {list.length}</p>

            <ul className=" mt-5 ">
                {list.map((item => 
                <li key={item.id}>
                    
                  <span className="mr-1">{item.id} - </span> <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} className=" w-5 h-5 mr-2" />
                    {item.label} - 
                <button onClick={() => deleteItem(item.id)} className="hover:underline">[ deletar ]</button> </li>
                ))}
            </ul>
            
        </div>

    );
}