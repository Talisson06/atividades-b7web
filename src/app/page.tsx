'use client'
import { Card } from '@/components/Card'
import { EmojiRating } from '@/components/EmojiRaring'
import { People } from '@/components/People'
import {Person} from '@/components/Person'
import { Time } from '@/components/Time'
import { StudentTable } from '@/components/StudentsTable'
import { students } from '@/data/students'
import { TuristicPoints } from '@/components/TuristicPoint'
import { images, points } from '@/data/turistcPoint'
import { States } from '@/components/State'
import { ListaDeTarefa } from '@/components/ListaDeTarefa'
import { Galeria } from '@/components/Galeria' 
import { photoList } from '@/data/photoList'
import { useState } from 'react'
import { Modal } from '@/components/Modal'







const  Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [imageOfModal, setImageOfModal]  = useState('')

    const openModal = (id: number) => {
      const photo = photoList.find(item => item.id === id);
        if(photo){
          setImageOfModal(photo.url)
          setShowModal(true)
        }
    }
    const closeModal = () => {
      setShowModal(false)
    }

  return (
    <div className='flex  flex-col justify-center items-center w-100% h-100% bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  overflow-hidden' >

      {/* <div className=''>
          <Person 
            name = 'Talisson Dias'
            avatar="https://media.licdn.com/dms/image/C4E03AQF4aVFd_8lz7Q/profile-displayphoto-shrink_800_800/0/1661291932557?e=2147483647&v=beta&t=TUiAIcpw68dFeLsNLKzfxuQmoKwLIXkPOVGQzuYT6U8"
            age = {22}
          />
        </div>
        <div className='flex justify-center mt-5 '>
            <Card
              name='talisson '
              age= {22}
              profession='DEV FRONT-END'
              avatar='data:image/jpeg;base64,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'
            />
        </div>
        <div>
            <People/>
        </div> */}
        {/* <div>
            <Time/>
            <EmojiRating 
              rate={1}
            />
        </div>*/}
        
       {/* <div className=" text-white  w-2/4 h-1/2 ">
            <StudentTable
              students = {students}
            />
        </div> */}
        {/*
            <TuristicPoints
              points= {points}
              images={images}
              
            />

            <States/>
            <ListaDeTarefa />
          */}

            
         
                
          <h1 className='text-3xl text-white p-5'>Galeria Espacial</h1>

            <section className=" mt-14 container max-w5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10" >
                
                {photoList.map(item => 
                    <Galeria
                      key={item.id}
                      photo={item}
                      onClick={() => openModal(item.id)}
                    />
                    )}    

                  {showModal &&

                      <Modal 
                      image={imageOfModal}
                      closeModal={closeModal}
                      />
                  }

            </section>
        
    </div>
  )
}
export default Home