// BY GOD'S GRACE ALONE

"use client"

import { useRouter } from "next/navigation"
import { Button, buttonVariants } from "@/components/ui/button"
import { ButtonHTMLAttributes } from "react"
import { VariantProps } from "class-variance-authority"

type Props = {
    title: string,
    className?: string,
} & VariantProps<typeof buttonVariants> & ButtonHTMLAttributes<HTMLButtonElement>

export function BackButton({title, variant, className, ...props} : Props){
    const router = useRouter()
    return(
        <Button
            variant={ variant ?? "default"}
            className={className}
            onClick={()=>router.back()}
            title={title}
            
        > {title} </Button>
    )
}

