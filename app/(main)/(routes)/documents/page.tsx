"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const Documentspage = () => {
    const {user} = useUser ();
    const create = useMutation(api.documents.create);

    const onCreate = () =>{
        const promise = create({title: "Untitled"});

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note."
        })
    }

    return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image
            src="empty-light.svg"
            height="600"
            width="600"
            alt="Empty"
            className="dark:hidden"
        />
        <Image
            src="empty-dark.svg"
            height="600"
            width="600"
            alt="Empty"
            className="hidden dark:block"
        />
        <h2 className="text-lg font-medium">
            Welcome to {user?.username}&apos;s NoteCraft
        </h2>
        <Button onClick={onCreate}>
            <PlusCircle className="h-4 w-4 mr-2"/>  
            Create a note
        </Button>
    </div>
    );
}

export default Documentspage;
