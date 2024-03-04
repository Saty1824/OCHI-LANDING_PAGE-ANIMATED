import React from 'react'

function Featured() {
  return (
    <div className='font-["Neue_Montreal"]'>
        <div className='border-b-[1px] pl-20 pb-10 mt-28 border-zinc-700 text-6xl text-zinc-600 font-["Neue_Montreal"]'>
            <h1>Featured Projects</h1>
        </div>
        <div className='px-20 pb-20'>
            <div className='cards flex items-center w-full gap-5 mt-10 '>
                <div className='w-1/2 h-[75vh]'>
                    
                    <h4 className='mb-6'>FYDE</h4>
                    <div className=' w-full h-[75vh]  bg-red-500 bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png")] bg-cover rounded-xl'></div>
                    <div className='flex justify-start items-center gap-4 mt-5'>
                        {["Audit","Copywriting","Sales Deck","Slide design"].map((item,index)=>{
                            return <div className='Btn uppercase border-[1px] px-4 border-zinc-700 rounded-2xl text-zinc-700'>{item}</div>
                        })}
                    </div>
                </div>
                <div className='w-1/2 h-[75vh]'>
                    
                    <h4 className='mb-6'>VISE</h4>
                    <div className='w-full h-[75vh] bg-red-500 bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg")] bg-cover rounded-xl'></div>
                    <div className='flex justify-start items-center gap-4 mt-5'>
                        {["Agency","Company Presentation"].map((item,index)=>{
                            return <div className='Btn uppercase border-[1px] px-4 border-zinc-700 rounded-2xl text-zinc-700'>{item}</div>
                        })}
                    </div>
                    

                </div>
                

            </div>
        </div>
        <div className='px-20 pt-5'>
            <div className='cards flex items-center w-full gap-5 mt-10 '>
                <div className='w-1/2 h-[75vh]'>
                    
                    <h4 className='mb-6'>TRAWA</h4>
                    <div className=' w-full h-[75vh]  bg-red-500 bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg")] bg-cover rounded-xl'></div>
                    <div className='flex justify-start items-center gap-4 mt-5'>
                        {["brand identity","design research","investor deck"].map((item,index)=>{
                            return <div className='Btn uppercase border-[1px] px-4 border-zinc-700 rounded-2xl text-zinc-700'>{item}</div>
                        })}
                    </div>
                </div>
                <div className='w-1/2 h-[75vh]'>
                    
                    <h4 className='mb-6'><div></div>PREMIUM BLEND</h4>
                    <div className='w-full h-[75vh] bg-red-500 bg-[url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png")] bg-cover rounded-xl'></div>
                    <div className='flex justify-start items-center gap-4 mt-5'>
                        {["branded template"].map((item,index)=>{
                            return <div className='Btn uppercase border-[1px] px-4 border-zinc-700 rounded-2xl text-zinc-700'>{item}</div>
                        })}
                    </div>
                    

                </div>
                

            </div>
        </div>
        
        <div className=' flex justify-center items-center w-full mt-48 '>
            <h3 className=' flex justify-center items-center gap-10 py-4 px-6 text-zinc-100 bg-black rounded-full text-md'>
                VIEW ALL CASE STUDIES
                <div className='w-2 h-2 rounded-full bg-zinc-100 '>

                </div>
            </h3>
        </div>
    </div>
  )
}

export default Featured