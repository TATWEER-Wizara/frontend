"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { BoxIcon, Github, Mail } from "lucide-react";
import GoogleIcon from "@mui/icons-material/Google";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";

const login = () => {
    const router = useRouter();

    return (
        <>
            <div
                className="w-screen h-screen flex items-center justify-center backdrop-blur-lg"
                style={{
                    backgroundImage: `linear-gradient(to right top, #9fc4ff, #bfd1ff, #d9dffe, #eeeefe, #ffffff)`,
                }}
            >
                <Card className="w-[800px] p-8 flex flex-col gap-8">
                    <div className="flex justify-center w-[200px]  overflow-clip m-auto">
                        <Image src={"/logo.png"} width={250} alt="" height={250} />
                    </div>
                    <div className=" flex ">
                        <div className="flex flex-col gap-12 w-1/2 border-r-2 p-4">
                            <CardTitle className=" flex items-center text-2xl justify-center">Sign up</CardTitle>
                            <div className="flex flex-col gap-12 items-center ">
                                <Button variant={"outline"} size={"lg"} className="text-lg rounded-full py-6">
                                    <GoogleIcon /> Continue with Google
                                </Button>
                                <Button variant={"outline"} size={"lg"} className="text-lg rounded-full py-6">
                                    <Mail /> Continue with Email
                                </Button>
                            </div>
                            <div className="text-xs flex  items-center flex-col w-full">
                                <p>
                                    By signing up, you agree to the <span className="underline">terms of serivice</span>
                                </p>
                                <p>
                                    and aknowledge you've read our <span className="underline">Privacy Policy</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-12 w-1/2 p-4 pl-8">
                            <CardTitle className=" flex items-center text-2xl justify-center">Log in</CardTitle>
                            <div className="flex flex-col gap-12 items-center w-full">
                                <div className="relative w-full">
                                    <p className="absolute -top-6 text-sm text-gray-500">Username</p>
                                    <Input className="text-lg rounded-lg py-6 " />
                                </div>
                                <div className="relative w-full">
                                    <p className="absolute -top-6 text-sm text-gray-500">Password</p>

                                    <Input type="password" className="text-lg rounded-lg py-6" />
                                    <p className="flex justify-end text-xs text-gray-500 hover:underline p-1 cursor-pointer">
                                        Forgot Password?
                                    </p>
                                </div>
                                <CardFooter className="flex justify-end">
                                    <Button
                                        className="text-md bg-blue-300 h-12 rounded-xl"
                                        onClick={() => router.push("/dashboard")}
                                    >
                                        Accéder à la Plateforme
                                    </Button>
                                </CardFooter>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default login;
