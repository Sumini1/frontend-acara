import Image from "next/image";
import {Button} from "@heroui/react";
import { useRouter } from 'next/router';

const RegisterSuccess = () => {
    const router = useRouter()
    return (
        <div className="flex w-screen flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-10">
         <Image
                  src="/images/general/logo.png"
                  alt="logo"
                  width={180}
                  height={180}
                />
                <Image
                  src="/images/ilustration/email-send.svg"
                  alt="success"
                  width={300}
                  height={300}
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-3xl font-bold text-danger-500">Create Account Success</h1>
                <p>check your email for account activation</p>
                <Button className="mt-4 w-fit" variant='bordered' color="danger" onClick={() => router.push("/") }>Back To Home</Button>
            </div>
        </div>  
    );
};

export default RegisterSuccess; 