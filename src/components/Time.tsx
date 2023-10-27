export const Time = () => {


    const fullTime = new Intl.DateTimeFormat('pt-br', {
        timeStyle: 'short',
        hour12: false
    }).format();

    const hour =  new Date().getHours();
    let greeting = '';

    if( hour >= 0 && hour < 12){
        greeting = 'BOM  DIA'
    } else if (hour >= 12 && hour < 18){
        greeting = 'BOA TARDE'
    } else{
        greeting = 'BOA NOITE'
    }
    

    return (
        <div className=" w-screen h-screen flex flex-col justify-center items-center  text-white">
                <div className="  text-5xl"> {fullTime} </div>
                <div className= "text-4xl font-bold"> {greeting} </div>
        </div>
    );
} 