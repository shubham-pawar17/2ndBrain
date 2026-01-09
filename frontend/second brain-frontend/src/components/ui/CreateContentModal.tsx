import { useState, useRef } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "../Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

export function CreateContentModal({ open, onClose }) {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const linkRef = useRef<HTMLInputElement | null>(null);
    const typeRef = useRef<HTMLInputElement | null>(null);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const type = typeRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content` , {
            link,
            title,
            type
        } , {
            headers :{
                "Authorization": localStorage.getItem("token")
            }
        })

    }
    return <>
        {open && <div className="h-screen w-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center items-center ">
            <div className=" flex flex-col justify-center">
                <div className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon />
                        </div>
                    </div>
                    <div>
                        <Input reference={titleRef} placeholder={"title"} />
                        <Input reference={linkRef} placeholder={"link"} />
                        <Input reference={typeRef} placeholder={"type"} />
                    </div>
                    <div className="flex justify-center m-2 p-2 ">
                        <Button onClick={addContent} variant="primary" size="md" text="Add Content"></Button>
                    </div>
                </div>
            </div>
        </div>}
    </>
}
