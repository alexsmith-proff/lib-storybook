import React, { FC } from "react";

interface ButtonProps {
    children: React.ReactNode
    backgroundColor?: string
    color?: string
    borderRadius?: number
    padding?: string
}

const Button: FC<ButtonProps> = ({ backgroundColor = '#fff',  color = '#000', borderRadius = 0, padding = '15px 30px', children }) => {
    return(
        <button style={{backgroundColor, color, borderRadius, padding}}>{children}</button>
    )
}

export default Button