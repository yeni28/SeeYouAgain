import { backgroundColor, txtColor } from './color';

function Round({ bgColor, textColor, innerValue, onClick }: ButtonProps) {
    return (
        <button
            className={` flex justify-center items-center text-center rounded-[50rem] px-[1rem] h-[2rem] font-bold text-[1rem] ${backgroundColor[bgColor]} ${txtColor[textColor]}`}
            type="button"
            onClick={onClick}
        >
            {innerValue}
        </button>
    );
}

export default Round;