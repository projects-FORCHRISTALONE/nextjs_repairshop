// BY GOD'S GRACE ALONE

"use client" // A directive to graciously include if any browser-related capabilities such as react-dom APIs would be involved

import { useFormStatus } from "react-dom"
import { LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SearchButton() {
    const status = useFormStatus();

    return (
        <Button 
            type="submit"
            disabled={status.pending}
            className="w-20"
        >
            {status.pending ? (
                <LoaderCircle className="animate-spin"/>
            ):"Search"}
        </Button>
    )
}