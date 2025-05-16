import { X, Divide, Diff, Minus } from 'lucide-react';

export function ButtonPanel({ setInputValue, inputValue }: { setInputValue: React.Dispatch<React.SetStateAction<string | undefined>>; inputValue: string | undefined }) {

    function calculate() {
        try {
            if (inputValue) {
                const result = eval(inputValue);
                setInputValue(String(result).slice(0, 11));
                console.log(result);
            }
        } catch (error) {
            console.error("Error occurred when calculating:", error);
        }
    }

    function calculatorValidation(symbol: string) {
        setInputValue(prev => prev && !["+", "-", "*", "/"].includes(prev.slice(-1)) ? prev + symbol : prev);
    }

    return (
        <div className="bg-gray-950 p-3 rounded-b-xl">
            <div className="grid grid-cols-4 py-3 text-3xl">
                <button onClick={() => setInputValue("")}>C</button>
                <button className='flex justify-center items-center'><Diff size={30} /></button>
                <button>%</button>
                <button className='flex justify-center items-center' onClick={() => calculatorValidation("/")}><Divide size={30} /></button>
            </div>
            <div className="grid grid-cols-4 grid-rows-4 gap-2 text-3xl">
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800" onClick={() => setInputValue(prev => prev ? prev + "7" : "7")}>7</button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800" onClick={() => setInputValue(prev => prev ? prev + "8" : "8")}>8</button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800" onClick={() => setInputValue(prev => prev ? prev + "9" : "9")}>9</button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800 flex justify-center items-center" onClick={() => calculatorValidation("*")}><X size={30} /></button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800" onClick={() => setInputValue(prev => prev ? prev + "4" : "4")}>4</button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800" onClick={() => setInputValue(prev => prev ? prev + "5" : "5")}>5</button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800" onClick={() => setInputValue(prev => prev ? prev + "6" : "6")}>6</button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800 flex justify-center items-center" onClick={() => calculatorValidation("-")}><Minus size={30} /></button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800" onClick={() => setInputValue(prev => prev ? prev + "1" : "1")}>1</button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800" onClick={() => setInputValue(prev => prev ? prev + "2" : "2")}>2</button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800" onClick={() => setInputValue(prev => prev ? prev + "3" : "3")}>3</button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800 row-span-2" onClick={() => calculatorValidation("+")}>+</button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800 col-span-2" onClick={() => setInputValue(prev => prev ? prev + "0" : "")}>0</button>
                <button className="p-2 bg-gray-900 shadow-xl hover:bg-gray-800" onClick={() => calculate()}>=</button>
            </div>
        </div>
    )
}