import React from 'react';

const RightBlock = () => {
    return (
        <div className='w-80'>
            <div>
                <div className='w-72 h-10 bg-gray-400 mb-6'>
                </div>

                <ul className='p-0 list-none mt-4'>
                    <li><input type='checkbox'/> - возрастанию цены</li>
                    <li><input type='checkbox'/> - по убыванию цены</li>
                    <li><input type='checkbox'/> - по времени в пути</li>
                </ul>
            </div>
            <div className='p-0 list-none mt-4'>
                <span><b>Фильтровать</b></span>
                <li className='mt-4'><input type='checkbox'/> - 1 пересадка</li>
                <li><input type='checkbox'/> - без пересадок</li>
            </div>
            <div className='mt-4'>
                <span><b>Цена</b></span>
                <form className='mt-2 flex flex-col'>
                    <div>
                        <span className='mr-2'>От</span>
                        <input type='number' placeholder='0' className='w-30 h-6'/>
                    </div>
                    <div className='mt-2'>
                        <span className='mr-2'>До</span>
                        <input type="number" placeholder='10000' className='w-30 h-6'/>
                    </div>
                </form>
            </div>
            <div className='mt-4'>
                <span><b>Авиакомпания</b></span>
            </div>
        </div>
    );
};

export default RightBlock;