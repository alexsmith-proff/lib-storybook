import React, { FC } from "react"

import s from './button_content.module.scss'

interface ButtonContentProps {
    text?: string
    textNoWrap?: boolean
    component?: React.ReactElement
    isComponentLeft?: boolean // Компонент в конткнте кнопки слева потом текст в контенте
    gap?: number
}

export const ButtonContent: FC<ButtonContentProps> = ({
    text,
    textNoWrap = true,
    component,
    isComponentLeft = true,
    gap = 0, // расстояние между текстом и компонентом
}) => {
    return (
        <>
            <div className={textNoWrap ? `${s.content} ${s.noWrap}` : `${s.content}`} style={
                {
                    flexDirection: isComponentLeft ? "row" : "row-reverse",
                    gap: gap,
                }
            }
            >
                {component}
                {text}
            </div>
        </>
    )
}