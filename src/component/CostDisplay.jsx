import React from 'react'

export default function CostDisplay() {
  return (
    <section className=' rounded-xl bg-neutral-Very-dark-cyan text-neutral-Very-light-grayish-cyan py-10 px-5 lg:w-6/12'>
        <div className=' flex items-center justify-between'>
            <div>
                <p>Tip Amount</p>
                <h4 className=' text-neutral-Dark-grayish-cyan'>/ person</h4>
            </div>
            <h1 className=' text-primary-Strong-cyan'>$4.27</h1>
        </div>
        <div className=' my-5 flex items-center justify-between'>
            <div>
                <p>Total</p>
                <h4 className=' text-neutral-Dark-grayish-cyan'>/ person</h4>
            </div>
            <h1 className=' text-primary-Strong-cyan'>$32.79</h1>
        </div>
        <button className=' lg:mt-32 text-xl rounded-md w-full text-center text-neutral-Very-dark-cyan bg-primary-Strong-cyan py-2'>RESET</button>
    </section>
  )
}