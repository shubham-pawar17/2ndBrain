import { Input } from "../components/Input"
import { Button } from "../components/ui/Button"
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignIn() {

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
            username,
            password
        })
        const jwt=response.data.token;
        localStorage.setItem("token" , jwt)
        //redirect user to the Dashboard
        navigate("/dashboard")
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
                            <Button onClick={signin} variant="primary" loading={false} text="Signin" fullWidth size="md"></Button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </>
        )
    }
