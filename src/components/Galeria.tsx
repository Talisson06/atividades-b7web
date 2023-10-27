'use client'

import { Photo } from "@/types/Photo";


type Props = {
    photo: Photo ;
    onClick : ()=> void;
}

export const Galeria = ({ photo, onClick }:Props) => {


    return(

            <div className="cursor-pointer hover:opacity-80" onClick={onClick}>
                <img src={`/assets/${photo.url}`} alt={photo.url} className="w-full h-full" />
            </div>

    );
}