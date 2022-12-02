import React from 'react'
import { useSelector } from 'react-redux'

export default function CostDisplay() {
    const {total, tipAmount} = useSelector(state => state.spliter)
    // const totalExist = total.length > 0;
    // console.log(totalExist)
  return (
    <section className=' rounded-xl bg-neutral-Very-dark-cyan text-neutral-Very-light-grayish-cyan py-10 px-5 lg:w-6/12'>
        <div className=' flex items-center justify-between'>
            <div>
                <p>Tip Amount</p>
                <h4 className=' text-neutral-Dark-grayish-cyan'>/ person</h4>
            </div>
            <h1 className=' text-primary-Strong-cyan'>{tipAmount ? `$${tipAmount.toFixed(2)}` : `0.00`}</h1>
        </div>
        <div className=' my-5 flex items-center justify-between'>
            <div>
                <p>Total</p>
                <h4 className=' text-neutral-Dark-grayish-cyan'>/ person</h4>
            </div>
            <h1 className=' text-primary-Strong-cyan'>{total ? `$${total.toFixed(2)}` : `0.00`}</h1>
        </div>
        <button className=' hover:bg-neutral-Light-grayish-cyan lg:mt-32 text-xl rounded-md w-full text-center text-neutral-Very-dark-cyan bg-primary-Strong-cyan py-2'>RESET</button>
    </section>
  )
}
