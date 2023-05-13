"use client"
import { cn } from "@/util/lib";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const ButtonVarientProps = cva(
    'px-2 py-1 border-black rounded-full active:scale-95',
    {
        variants : {
            kind : {
                main : 'hover:bg-slate-50/50 dark:text-[#fff] text-#fff',
                info : 'border-slate-800'
            },
            size : {
                tiny : 'text-xs',
                medium : 'text-sm',
                bigb : 'text-lg'
            }
        },
        defaultVariants : {
            kind : 'main',
            size : 'medium'
        }
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVarientProps> {
    loading ?: boolean;
}

const Button : React.FC<ButtonProps> = ({className, kind, size, children, loading, ...props}) => {
    return (
        <button
        className={cn(ButtonVarientProps({className, kind, size}))}
        disabled={loading}
        {...props}
        >
        {children}            
        </button>
    )
}

export default Button;
