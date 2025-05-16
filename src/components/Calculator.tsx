import { useState } from 'react';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

export function Calculator() {
    const [inputValue, setInputValue] = useState<string>();
    return (
        <div className="shadow-xl bg-gray-900 w-sm rounded-xl">
            <div className='bg-gray-700 flex flex-row p-1 justify-center rounded-t-xl'>
                <div>
                    <p className='py-1'>Calculator</p>
                </div>
            </div>
            <Display inputValue={inputValue} />
            <ButtonPanel inputValue={inputValue} setInputValue={setInputValue} />
        </div>
    )
}