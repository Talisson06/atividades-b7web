import { Student } from "@/types/Student";


type Props = {
    students: Student[];
}

export const  StudentTable = ({ students }:Props) =>{
        return (
            
                <table className=" p-3 w-full  border-1 border-emerald-800 rounded-md overflow-hidden">
                    <thead>
                        <tr className=" border-b border-emerald-800  bg-emerald-900 text-left ">
                            <th>Name</th>
                            <th>Status</th>
                            <th>Grade 1</th>
                            <th>Grade 2</th>
                            <th>Final grade</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(item => 
                            <tr key={item.id} className=" bg-cyan-900 border-b border-x-gray-800">
                                <td className=" p-3 flex flex-row items-center">
                                    <img src={item.avatar} alt={item.name} className="p-10 w-32 " />
                                    <div className="flex flex-col">
                                        <div className="font-bold"> {item.name} </div>
                                        <div> {item.email} </div>
                                    </div>
                                </td>
                                <td >
                                    {item.active && 
                                    <div className=" px-2 py-1 inline-block rounded-md text-sm bg-green-800 w-14 font-semibold italic ">Active</div> }
                                    {!item.active && 
                                    <div className=" px-2 py-1 inline-block rounded-md text-sm bg-red-800  w-14 font-semibold italic ">Inactive</div> }
                                </td>
                                <td >
                                    {item.grade1.toFixed(2)}
                                </td>
                                <td>
                                    {item.grade2.toFixed(2)}
                                </td>
                                <td className="font-bold">
                                    {item.active ? ( (item.grade1 + item.grade2) / 2).toFixed(1)  : "--" }
                                </td>
                                <td>

                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
        );
}