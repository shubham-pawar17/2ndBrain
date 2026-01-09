import { forwardRef } from "react";

export function Input({reference , placeholder}: {placeholder:string ; reference:any}){
    return <div>
        <input ref={reference} placeholder={placeholder} type={"text"} className=" px-4 py-2 min-w-48 border border-black rounded m-2"></input>
    </div>
}