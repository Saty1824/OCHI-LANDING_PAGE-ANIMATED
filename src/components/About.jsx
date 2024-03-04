import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.15" className='w-full   bg-[#CDEA67] font-["Neue_Montreal"] rounded-2xl'>
        <h1 className='text-5xl text-zinc-800 pl-20 pb-12 py-20 pr-48 border-b-[1px] border-zinc-400'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='pl-20 flex justify-between mt-5 pb-28 border-b-[1px] border-zinc-400'>
            <div>
                <h3 className=''>What you can expect:</h3>
            </div>
            <div className='flex justify-between mr-48'>
                <div className='w-64 mr-60 '>
                    <h3 className='mb-4'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</h3>
                    <h3>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating</h3>
                </div>
                <div className='pt-24'>
                    {["S:","Instagram","Behance","Facebook","LinkedIn"].map((item,index)=>{
                        return <div><a key={index} className={`${index>0 &&"underline"}`}>{item}</a></div>
                    })}

                </div>
            </div>
        </div>
        <div className='flex pb-20'>
            <div className=' w-1/2 mt-10 pl-20'>
                <h1 className='text-5xl'>Our approach:</h1>
                <button className='bg-black flex gap-10 items-center rounded-full text-zinc-100 px-8 py-3 mt-4'>Read More <div className='w-2 h-2 bg-zinc-100 rounded-full'></div></button>
            </div>
            <div className='w-1/2 h-[50vh] bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")] rounded-3xl mt-10 mr-20 ml-10'>
                
            </div>
        </div>
    </div>
  )
}

export default About