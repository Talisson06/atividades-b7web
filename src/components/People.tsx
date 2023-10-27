import { peopleList } from "@/data/peopleList";


export const People = () => {
    
    
    const list = peopleList.map(person => 
        <li> {person.id} - {person.name} - {person.profession} </li>
        )
    return(
        <div className="text-white flex justify-center mt-5" >
            <ul>{list}</ul>
        </div>
    );
}