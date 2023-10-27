'use client'
import { TuristicPoint, ImagesBarra } from "@/types/PointTuristic";
import { data } from "autoprefixer";
import { Swiper, SwiperSlide } from 'swiper/react'


type Props = {
    points: TuristicPoint[];
    images: ImagesBarra[];
}

export const TuristicPoints = ({ points, images }:Props) => {

    return (
        <div className="flex flex-col items-center m-5 ">
            <div >
                {points.map(item =>
                    <ul>
                        <li>
                            {item.name}
                            <img className="w-32" src={item.picture1} alt={item.name}  />
                        </li>
                    </ul>
                    )}
            </div>
            <div className="bg-pink-200 m-3" >
                <Swiper 
                    slidesPerView={1}
                    pagination = {{clickable: true}}
                    navigation
                    className="  w-96 bg-slate-900 "
                    >
                        {
                            images.map((item) => 
                            <SwiperSlide key={item.id} className=" w-32 h-32 p-10 ">
                                <div className= " flex flex-col justify-center items-center  mt-10   text-white text-center uppercase ">
                                    <div className="p-10 m-4 bg-slate-500">
                                        <img src={item.images} alt={item.name} className="flex justify-center items-center p-2 w-48 h-48"/> 
                                        <h1>{item.name}</h1>    
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                            )
                        }
                </Swiper>
            </div>
            

        </div>
            


    );
}