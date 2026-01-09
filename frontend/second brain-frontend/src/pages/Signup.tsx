import { Input } from "../components/Input"
import { Button } from "../components/ui/Button"
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp() {

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup` , {
                username,
                password
        })
        alert("You have signed up!")
        navigate("/signin")
    }
    return (
        <>
            <div className="h-screen w-screen bg-slate-200 flex justify-center items-center ">
                <div className="bg-white p-6 border border-gray-600 rounded-3xl  min-h-48 min-w-48">
                    <div className="p-4 space-y-2">
                        <Input reference={usernameRef} placeholder="Username" />
                        <Input reference={passwordRef} placeholder="Password" />
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={signup} variant="primary" loading={false} text="signup" fullWidth size="md"></Button>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}