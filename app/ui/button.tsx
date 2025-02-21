export default function Button({ name, onClick, className = '' }:
    {
        name: string;
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
        className: string;
    }) {
    return (
        <button onClick={onClick}
            className={`border border-[var(--custom-border)] rounded p-2 bg-[var(--custom-bg)] bg-opacity-75 
            hover:text-blue-500 transition duration-100 ${className}`}
        >{name}</button>
    )
}