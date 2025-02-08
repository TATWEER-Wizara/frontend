"use client";

import React, { useEffect, useState } from "react";
import { Step } from "./plan/plan";
import { LucideLoader2 } from "lucide-react";

const page = () => {
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("step", step);
        async function fetchData() {
            console.log("done");
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setLoading(false);
        }
        if (step > 2) {
            console.log("done");
            fetchData();
            return;
        }
    }, [step]);

    return (
        <>
            <div className=" h-full w-full flex items-center justify-center ">
                {step <= 2 && <Step step={step} setStep={setStep} />}
                {loading && step > 2 && (
                    <div className="transition duration-500  animate-spin ease-in">
                        <LucideLoader2 className="" size={150} />
                    </div>
                )}
                {step > 2 && !loading && <div className="text-4xl">Voici les risques et leurs solutions</div>}
            </div>
        </>
    );
};

export default page;
