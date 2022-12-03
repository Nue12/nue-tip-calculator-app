import React, { useState } from 'react'
import dollarImg from '/images/icon-dollar.svg'
import personIcon from '../../public/images/icon-person.svg'
import CostDisplay from './CostDisplay'
import { billUpdate, tipUpdate, userUpdate, reset } from '../features/splitSlice'
import { useDispatch } from 'react-redux'

export default function SplitterInput() {
  const [bill, setBill] = useState('');
  const [user, setUser] = useState('');
  const [custom, setCustom] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [tipAmount, setTipAmount] = useState('');

  const dispatch = useDispatch();

  const customChange = (e) => {
    const customs = e.target.value.replace(/[^\dA-Z]/g, '');
    setCustom(customs);
    tipChange(customs);
  }

  const tipChange = (e) => {
    let tipAmounts
    setTipPercent(e);
    if (bill) {
        tipAmounts = (e * +bill) / 100; 
        setTipAmount(tipAmounts);
    }
    if(bill.length < 0 || user.length < 0) return;
    dispatch(tipUpdate({bill, user, tipAmounts}));
    console.log(total);
  }
  
  const userChange = (e) => {
    const users = e.target.value.replace(/[^\dA-Z]/g, '');
    setUser(users);
    if(bill.length < 0) return;
    dispatch(userUpdate({bill, users, tipAmount, tipPercent}))
  }

  const billChange = (e) => {
    const bills = e.target.value.replace(/[A-Z || a-z]/g, '');
    setBill(bills);
    if(user.length < 0) return;
    dispatch(billUpdate({bills, user, tipAmount, tipPercent}))
  }

  const resetChange = () => {
    setBill('');
    setCustom('');
    setTipAmount('');
    setUser('');
    dispatch(reset());
  }

  return (
    <section className=' max-w-4xl bg-neutral-White rounded-t-2xl p-5 mt-7 lg:flex lg:w-11/12 mx-auto space-x-6'>
        <div className=' lg:w-6/12'>
            <div className='mb-10'>
                <label htmlFor='Bill' className='block mb-2'>Bill</label>
                <img src={dollarImg} alt='dollarIcon' className=' absolute p-4'/>
                <input 
                    type='text' 
                    name='bill' 
                    value={bill}
                    onChange={(e) => billChange(e)}
                    className=' w-full py-2 px-4 rounded-md text-right outline-primary-Strong-cyan bg-neutral-Very-light-grayish-cyan text-neutral-Very-dark-cyan text-2xl'
                /><br />
            </div>
            <div className='mb-8'>
                <label htmlFor='Tip' className='block mb-4'>Select Tip %</label>
                <div className='text-2xl text-neutral-Very-light-grayish-cyan grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-4 w-full'>
                    <button 
                        className='focus:bg-neutral-Light-grayish-cyan focus:text-neutral-Very-dark-cyan hover:text-neutral-Very-dark-cyan hover:bg-neutral-Light-grayish-cyan bg-neutral-Very-dark-cyan rounded-md py-2 px-4 w-32'
                        onClick={() => tipChange(5)}
                    >
                    5%
                    </button>
                    <button 
                        className='focus:bg-neutral-Light-grayish-cyan focus:text-neutral-Very-dark-cyan hover:text-neutral-Very-dark-cyan hover:bg-neutral-Light-grayish-cyan bg-neutral-Very-dark-cyan rounded-md py-2 px-4 w-32'
                        onClick={() => tipChange(10)}
                    >
                    10%
                    </button>
                    <button 
                        className='focus:bg-neutral-Light-grayish-cyan focus:text-neutral-Very-dark-cyan hover:text-neutral-Very-dark-cyan hover:bg-neutral-Light-grayish-cyan bg-neutral-Very-dark-cyan rounded-md py-2 px-4 w-32'
                        onClick={() => tipChange(15)}
                    >
                    15%
                    </button>
                    <button 
                        className='focus:bg-neutral-Light-grayish-cyan focus:text-neutral-Very-dark-cyan hover:text-neutral-Very-dark-cyan hover:bg-neutral-Light-grayish-cyan bg-neutral-Very-dark-cyan rounded-md py-2 px-4 w-32'
                        onClick={() => tipChange(25)}
                    >
                    25%
                    </button>
                    <button 
                        className=' focus:bg-neutral-Light-grayish-cyan focus:text-neutral-Very-dark-cyan hover:text-neutral-Very-dark-cyan hover:bg-neutral-Light-grayish-cyan bg-neutral-Very-dark-cyan rounded-md py-2 px-4 w-32'
                        onClick={() => tipChange(50)}
                    >
                    50%
                    </button>
                    <input 
                        type='text' 
                        value={custom}
                        onChange={(e) => customChange(e)}
                        name='custom' 
                        placeholder='Custom'
                        className='pr-1 text-right text-2xl placeholder:text-center outline-primary-Strong-cyan bg-neutral-Very-light-grayish-cyan rounded-md placeholder:text-neutral-Dark-grayish-cyan text-neutral-Dark-grayish-cyan py-2 w-32'
                    />
                </div>
            </div>
            <div className='mb-7 lg:mb-0'>
                <label htmlFor='No of People' className='block mb-2'>Number of People</label>
                <img src={personIcon} alt='personIcon' className=' absolute p-4'/>
                <input 
                    type='text' 
                    value={user}
                    onChange={(e) => userChange(e)}
                    name='noOfPeople' 
                    className=' w-full py-2 px-4 rounded-md text-right outline-primary-Strong-cyan bg-neutral-Very-light-grayish-cyan text-neutral-Very-dark-cyan text-2xl'
                />
            </div>
        </div>
        <CostDisplay 
            resetChange={resetChange}
        />
    </section>
  )
}
