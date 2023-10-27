const getWeekday = () => {
    return new Intl.DateTimeFormat('pt-br', {weekday: 'long'}).format(new Date());
}


type Props = {
    name : string,
    avatar: string,
    age: number;
    
}

export const Person = ({name, avatar, age}: Props) => {

    
    return (
        <div className="pt-20 flex justify-center items-center flex-col text-slate-100 uppercase  ">
            <p>{name} - {getWeekday()}</p>
            <p>{age} anos</p>
            <img src={avatar} alt={name}
                className="w-40 " />
            
        </div>
    )
}