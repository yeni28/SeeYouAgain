import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function Heart({ isActive }: ButtonProps) {
    return <>{isActive ? <AiFillHeart className={` w-[1.75rem] h-[1.56rem]`} color={'red'} /> : <AiOutlineHeart className={` w-[1.75rem] h-[1.56rem]`} />}</>;
}

export default Heart;