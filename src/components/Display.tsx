export function Display({ inputValue }: { inputValue: string | undefined }) {
    return (
        <input type="text" value={inputValue} className="outline-0 text-right py-3 px-3 w-full text-6xl [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
    )
}