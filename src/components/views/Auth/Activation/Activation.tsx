import Image from "next/image";
import {Button} from "@heroui/react";
import { useRouter } from 'next/router';

interface propTypes {
    status: 'success' | 'error'
}
const Activation = (props: propTypes) => {
    const router = useRouter()
    const {status} = props

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
                  src={status === 'success' ? '/images/ilustration/email-send.svg' : '/images/ilustration/pending.svg'}
                  alt="success"
                  width={300}
                  height={300}
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-3xl font-bold text-danger-500">{status === 'success' ? 'Account Success' : 'Activation Failed'}</h1>
                <p className="text-xl font-bold text-default-500">{status === 'success' ? 'Thank you for register account in Acara' : 'Convermation code is invalid'}</p>
                <Button className="mt-4 w-fit" variant='bordered' color="danger" onClick={() => router.push("/") }>Back To Home</Button>
            </div>
        </div>  
    );
};

export default Activation; 