"use client";

import React, { useEffect, useState } from "react";
import { Step } from "./plan/plan";
import { LucideLoader2 } from "lucide-react";
import decisionsfile from "@/../public/ibp_risks_decisions.json";
import { Button } from "@/components/ui/button";
const decision = decisionsfile;

const page = () => {
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [response, setResponse] = useState<typeof decision | null>(null);
    const [finalData, setfinalData] = useState<{
        context: any;
        risks_decisions: {
            risk: string;
            decision: string;
            approved: boolean;
            justification: string | null;
        }[];
    } | null>();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve(setResponse(decisionsfile));
                }, 2000)
            );
            setLoading(false);
        }
        if (data) {
            console.log("done");
            fetchData();
        }
        return;
    }, [data]);

    const handleStopSimulation = () => {
        if (response) {
            const filteredResponse = response.filter((item) => item.approved !== undefined);
            if (filteredResponse.length >= 2) {
                console.log(filteredResponse);
                // Do something with the filtered response
            } else {
                alert("Please approve or disapprove at least two items.");
            }
        }
    };

    return (
        <>
            <div className=" h-full w-full flex items-center justify-center ">
                {!data && <Step step={step} setStep={setStep} setData={setData} />}
                {loading && (
                    <div className="transition duration-500  animate-spin ease-in">
                        <LucideLoader2 className="" size={150} />
                    </div>
                )}

                {response && (
                    <div className="relative overflow-y-auto">
                        <Button className="fixed right-12 bottom-12" onClick={handleStopSimulation}>
                            Arreter Simulation
                        </Button>
                        {response.slice(1, 5).map((item, index: number) => (
                            <div key={index} className="mb-4 p-4 border rounded shadow">
                                <p>
                                    <strong>Risk:</strong> {item.Risque}
                                </p>
                                <p>
                                    <strong>Decision:</strong> {item.Decision}
                                </p>
                                <div className="mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name={`approval-${index}`}
                                            value="approve"
                                            onChange={() => {
                                                const updatedResponse = response.map((res, i) =>
                                                    i === index ? { ...res, approved: true, justification: null } : res
                                                );
                                                setResponse(updatedResponse);
                                            }}
                                        />
                                        Approve
                                    </label>
                                    <label className="ml-4">
                                        <input
                                            type="radio"
                                            name={`approval-${index}`}
                                            value="disapprove"
                                            onChange={() => {
                                                const justification = prompt("Please enter your justification:");
                                                const updatedResponse = response.map((res, i) =>
                                                    i === index ? { ...res, approved: false, justification } : res
                                                );
                                                setResponse(updatedResponse);
                                            }}
                                        />
                                        Disapprove
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default page;
