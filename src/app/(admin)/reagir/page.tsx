import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";

const page = () => {
    return (
        <div className="flex items-center justify-center w-full h-full fkex-col gap-4">
            <Card className="w-[600 px] p-6 h-[400px] ">
                <CardTitle className="text-xl">Explique le problème confronté</CardTitle>
                <CardDescription>
                    Basé sur vos simulations passés, j'essaierai de trouver une solution à votre problème !{" "}
                </CardDescription>
                <textarea className="w-full border-2 border-gray-200 p-4 shadow-lg" />
            </Card>
        </div>
    );
};

export default page;
