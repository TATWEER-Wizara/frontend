"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import first from "@/../public/first.png";
import second from "@/../public/second.png";
import third from "@/../public/third.png";
import Image from "next/image";
import { Loader2, Trash2, Upload } from "lucide-react";
import file from "@/../public/ibp_processes.json";
import file2 from "@/../public/ibp_constraints.json";
export const Step = ({
    step,
    setStep,
    setData,
}: {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    setData: any;
}) => {
    const [prevision, setPrevision] = useState("");
    const [process, setProcess] = useState<string[]>([]);
    const [constraints, setConstraints] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchProceess = () => {
        setLoading(true);
        setTimeout(() => {
            setProcess(file.map((e) => e.Processus));
            setLoading(false);
        }, 8000);
    };

    const fetchConstraints = () => {
        setLoading(true);
        setTimeout(() => {
            setConstraints(file2.map((e) => e.Constraint_Type));
            setLoading(false);
        }, 8000);
    };

    return (
        <div className="w-[600px] h-[400px] flex flex-col p-8 items-center  justify-between py-12  bg-neutral-100 rounded-2xl">
            <div className="flex flex-col justify-center items-center gap-6">
                <h1 className="text-xl font-bold flex  justify-center ">
                    {step == 0 && "ÉTAPE 01 : Prévision"}
                    {step == 1 && "ÉTAPE 02 : Déclaration des processus"}
                    {step == 2 && "ÉTAPE 03 : Déclaration des contraintes"}
                </h1>

                <Image src={step == 0 ? first : step == 1 ? second : third} height={30} alt="" />
            </div>
            {step == 0 && (
                <>
                    <div className=" w-3/4  relative group">
                        <label
                            htmlFor="prevision"
                            className=" group-focus-within:text-blue-600 text-gray-500 absolute -top-3 left-2 bg-neutral-100"
                        >
                            Prevision
                        </label>
                        <Input
                            placeholder="Enter votre prevision pour étudier les risques"
                            value={prevision}
                            id="prevision"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setStep(step + 1);
                                }
                            }}
                            className="m-auto !text-md !py-6 !px-4 w-full self-center border-2 shadow-lg shadow-gray-300 border-gray-500 !ring-0 focus:border-blue-600"
                            onChange={(e) => setPrevision(e.target.value)}
                        />
                    </div>
                </>
            )}
            {step == 1 && (
                <>
                    <div className="flex flex-col  w-full">
                        {process.length == 0 && !loading && (
                            <Button
                                className="h-14 w-64 hover:bg-blue-500 rounded-full bg-blue-700  min-w-24 text-lg font-bold self-center my-12"
                                onClick={fetchProceess}
                            >
                                Charger les processus <Upload />
                            </Button>
                        )}
                        {loading && (
                            <div className="!bg-gray-100 flex items-center  flex-col">
                                <h4 className="text-lg font-bold flex items-center gap-4">
                                    Chargement en cours <Loader2 className="animate-spin ease-out" />
                                </h4>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        "preparation de la connexion avec le systeme ...",
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        "connexion établie avec l'ERP ...",
                                        1200,
                                        "extraction des données en cours ...",
                                        1700,
                                        "traitement des données en cours ...",
                                        1300,
                                    ]}
                                    cursor={false}
                                    wrapper="span"
                                    speed={70}
                                    deletionSpeed={99}
                                    style={{ fontSize: "1em", display: "inline-block", color: "gray" }}
                                />
                            </div>
                        )}

                        {/*display the processes and give the user the capacity to modify them and delete some of them */}
                        {process.length > 0 && (
                            <div className="flex flex-col gap-4  max-h-[200px] overflow-y-auto w-full  shadow-gray-300">
                                {process.map((p, i) => (
                                    <div key={i} className="flex justify-between items-center gap-2 w-full">
                                        <Input
                                            value={p}
                                            onChange={(e) => {
                                                const newProcess = [...process];
                                                newProcess[i] = e.target.value;
                                                setProcess(newProcess);
                                            }}
                                            className=" !text-md rounded-none !py-5 border-0 border-b-2 border-transparent  !px-4 w-full self-center  shadow-lg focus:border-b-2  border-gray-500 !ring-0 focus:border-blue-600"
                                        />

                                        <Button
                                            className="h-8 bg-red-500 text-white px-5 py-5 rounded w-fit  flex "
                                            onClick={() => {
                                                const newProcess = [...process];
                                                newProcess.splice(i, 1);
                                                setProcess(newProcess);
                                            }}
                                        >
                                            <Trash2 size={24} className="w-full h-full" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}
            {step == 2 && (
                <>
                    <div className="flex flex-col  w-full">
                        {constraints.length == 0 && !loading && (
                            <Button
                                className="h-14 w-68 hover:bg-blue-500 rounded-full bg-blue-700  min-w-24 text-lg font-bold self-center my-12"
                                onClick={fetchConstraints}
                            >
                                Charger les contraintes <Upload />
                            </Button>
                        )}
                        {loading && (
                            <div className="!bg-gray-100 flex items-center  flex-col">
                                <h4 className="text-lg font-bold flex items-center gap-4">
                                    Chargement en cours <Loader2 className="animate-spin ease-out" />
                                </h4>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        "preparation de la connexion avec le systeme ...",
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        "connexion établie avec l'ERP ...",
                                        1200,
                                        "extraction des données en cours ...",
                                        1700,
                                        "traitement des données en cours ...",
                                        1300,
                                    ]}
                                    cursor={false}
                                    wrapper="span"
                                    speed={70}
                                    deletionSpeed={99}
                                    style={{ fontSize: "1em", display: "inline-block", color: "gray" }}
                                />
                            </div>
                        )}

                        {/*display the processes and give the user the capacity to modify them and delete some of them */}
                        {constraints.length > 0 && (
                            <div className="flex flex-col gap-4  max-h-[200px] overflow-y-auto w-full  shadow-gray-300">
                                {constraints.map((p, i) => (
                                    <div key={i} className="flex justify-between items-center gap-2 w-full">
                                        <Input
                                            value={p}
                                            onChange={(e) => {
                                                const newConstraints = [...constraints];
                                                constraints[i] = e.target.value;
                                                setProcess(newConstraints);
                                            }}
                                            className=" !text-md rounded-none !py-5 border-0 border-b-2 border-transparent  !px-4 w-full self-center  shadow-lg focus:border-b-2  border-gray-500 !ring-0 focus:border-blue-600"
                                        />

                                        <Button
                                            className="h-8 bg-red-500 text-white px-5 py-5 rounded w-fit  flex "
                                            onClick={() => {
                                                const newConstraints = [...constraints];
                                                newConstraints.splice(i, 1);
                                                setProcess(newConstraints);
                                            }}
                                        >
                                            <Trash2 size={24} className="w-full h-full" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}

            <Button
                onClick={() => {
                    if (step <= 1) {
                        setStep(step + 1);
                    } else {
                        setData({ previsions: [prevision], processes: process, constraints });
                    }
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded w-fit self-end mt-4"
            >
                Suivant
            </Button>
        </div>
    );
};
