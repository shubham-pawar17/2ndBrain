import type { ReactElement } from "react";

interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text : string;
    startIcon? : ReactElement;
    endIcon? : ReactElement;
    onClick?: ()=>void;
    fullWidth?:boolean;
    loading?:boolean;
}
const variantStyles = {
  primary: "bg-purple-600 text-white ",
  secondary: "bg-purple-300 text-purple-600",
};


const sizeStyles ={
    "lg" :"px-8 py-4",
    "md" :"px-4 py-2",
    "sm" :"px-2 py-1",
}

const defaultStyles ="rounded-lg flex font-normal";

export const Button = ({ variant , startIcon,text , endIcon ,size , loading , fullWidth , onClick} : ButtonProps ) =>{

    return <button onClick={onClick} className={`${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyles}
     ${fullWidth? " w-5/6 flex justify-center items-center " : ""} ${loading ? "opacity-45" : ""}`} disabled={loading} >
        {startIcon ? <div className="pr-2">{startIcon}</div>:null}{text}{endIcon}</button>
}

<Button variant ="primary" size ="lg" onClick ={() =>{}} text ={"Share"}/>