import React, { FC } from "react";

import './Button.css'

interface ButtonProps {
    children: React.ReactNode
    backgroundColor?: string
    color?: string
    borderRadius?: number
    padding?: string
    fontSize?: number
    fontWeight?: 'normal' | 'bold'
}

export const Button: FC<ButtonProps> = ({
    children,
    backgroundColor = '#fff',
    color = '#000',
    borderRadius = 0,
    padding = '15px 30px',
    fontSize = 18,
    fontWeight = 'normal'
}) => {
    return (
        <button className="btn" style={{ backgroundColor, color, borderRadius, padding, fontSize, fontWeight }}>{children}</button>
    )
}