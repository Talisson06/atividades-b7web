type Props = {
    rate: number;
}



export const EmojiRating = ({ rate }: Props) => {

    if ( rate >= 5 ) {
        rate = 5
    } 
    if  (rate <= 0) {
        rate = 0
    }

    
    return(
        <div className="flex justify-center items-center ">
                {rate}
        </div>
    );
}