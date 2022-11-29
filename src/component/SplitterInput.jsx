import React from 'react'
import dollarImg from '../../public/images/icon-dollar.svg'
import personIcon from '../../public/images/icon-person.svg'
import CostDisplay from './CostDisplay'

export default function SplitterInput() {
  return (
    <section className=' max-w-4xl bg-neutral-White rounded-t-2xl p-5 mt-7 lg:flex lg:w-11/12 mx-auto space-x-6'>
        <div className=' lg:w-6/12'>
            <div className='mb-10'>
                <label htmlFor='Bill' className='block mb-2'>Bill</label>
                <img src={dollarImg} alt='dollarIcon' className=' absolute p-4'/>
                <input 
                    type='text' 
                    name='bill' 
                    className=' w-full py-2 px-4 rounded-md text-right outline-primary-Strong-cyan bg-neutral-Very-light-grayish-cyan text-neutral-Very-dark-cyan text-2xl'
                /><br />
            </div>
            <div className='mb-8'>
                <label htmlFor='Tip' className='block mb-4'>Select Tip %</label>
                <div className='text-2xl text-neutral-Very-light-grayish-cyan grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-4 w-full'>
                    <button 
                        className='bg-neutral-Very-dark-cyan rounded-md py-2 px-4 w-32'
                    >
                    5%
                    </button>
                    <button 
                        className='bg-neutral-Very-dark-cyan rounded-md py-2 px-4 w-32'
                    >
                    10%
                    </button>
                    <button 
                        className='bg-neutral-Very-dark-cyan rounded-md py-2 px-4 w-32'
                    >
                    15%
                    </button>
                    <button 
                        className='bg-neutral-Very-dark-cyan rounded-md py-2 px-4 w-32'
                    >
                    25%
                    </button>
                    <button 
                        className='bg-neutral-Very-dark-cyan rounded-md py-2 px-4 w-32'
                    >
                    50%
                    </button>
                    <input 
                        type='text' 
                        name='custom' 
                        placeholder='Custom'
                        className=' text-2xl text-center outline-primary-Strong-cyan bg-neutral-Very-light-grayish-cyan rounded-md placeholder:text-neutral-Dark-grayish-cyan text-neutral-Dark-grayish-cyan py-2 w-32'
                    />
                </div>
            </div>
            <div className='mb-7 lg:mb-0'>
                <label htmlFor='No of People' className='block mb-2'>Number of People</label>
                <img src={personIcon} alt='personIcon' className=' absolute p-4'/>
                <input 
                    type='text' 
                    name='noOfPeople' 
                    className=' w-full py-2 px-4 rounded-md text-right outline-primary-Strong-cyan bg-neutral-Very-light-grayish-cyan text-neutral-Very-dark-cyan text-2xl'
                />
            </div>
        </div>
        <CostDisplay />
    </section>
  )
}
