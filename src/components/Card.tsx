type Props = {
    phrase?: string,
    author?: string,
    name?: string,
    age?: number,
    profession?: string,
    avatar?: string
}

export const Card = ({ phrase, author, name, age, profession,avatar}: Props) =>{
    
        return(
            <div>
                {/* <div className=" w-96 border-2 border-x-blue-500 p-3 text-3xl text-center italic  ">
                    <h2 className="font-bold italic"> {phrase} </h2>
                    {author && 
                        <p className=" text-right text-sm"> {author} </p>
                    }
                </div>*/}
                <div className= " flex  justify-center flex-col  mt-10 border-2 border-purple-500  text-white text-center uppercase  bg-slate-700 w-52">
                        <img src={avatar} alt={name} className="w-30"/> 
                        <h1>{name}</h1>
                        <p>{age}</p>
                        <p>{profession}</p>
                </div>
            </div>
        );
}