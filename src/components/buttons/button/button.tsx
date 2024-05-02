import React, { FC, useState } from "react"
import { ButtonContent } from "./button_content/button_content"

import s from './button.module.scss'

interface ButtonProps {
    width?: number
    height?: number
    text?: string
    textSize?: number
    textColor?: string
    textColorHover?: string
    textWeight?: 'norm' | 'bold'
    textNoWrap?: boolean
    component?: React.ReactElement
    isComponentLeft?: boolean // Компонент в конткнте кнопки слева потом текст в контенте
    gap?: number
    backgroundColor?: string
    backgroundColorHover?: string
    backgroundColorDisable?: string
    borderRadius?: number
    transitionHover?: string //плавность перехода background при наведении
    padding?: string
    isEnable?: boolean
    autoFocus?: boolean
    isFocusEnable?: boolean
    tabIndex?: number
    refE?: any
    tag?: any
    className?: string
    onClick?: (e?: any) => void
    onBlur?: () => void
}

export const Button: FC<ButtonProps> = ({
    width,
    height,
    text,
    textSize = 16,
    textColor = '#FAFAFA',
    textWeight = 'norm',
    textNoWrap = true,
    component,
    isComponentLeft = true,
    gap = 0, // расстояние между текстом и компонентом
    backgroundColor = '#0B1331',
    textColorHover = backgroundColor,
    backgroundColorHover,
    backgroundColorDisable = 'rgba(11, 19, 49, 0.6)',
    borderRadius = 0,
    transitionHover = '.3s',
    padding = '10px 35px',
    isEnable = true,
    autoFocus,
    isFocusEnable = true,
    tabIndex,
    refE,
    className,
    onClick,
    onBlur
}) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    return (
        <button
            className={className + ' ' + s.btn}
            style={{
                width,
                height,
                fontSize: textSize,
                fontWeight: textWeight,
                color: isHover ? textColorHover : textColor,
                backgroundColor: isEnable ? (isHover ? backgroundColorHover : backgroundColor) : backgroundColorDisable,
                border: isHover ? `1px solid ${backgroundColor}` : '1px solid transparent',
                borderRadius: borderRadius,
                padding: padding,
                transition: transitionHover,                
            }
        }
            tabIndex={tabIndex}
            autoFocus={autoFocus}
            ref={refE}
            onFocus={(e) => {
                if (!isFocusEnable) e.target.blur()
            }}
            onBlur={onBlur}
            onMouseMove={() => isEnable ? setIsHover(true) : null}
            onMouseLeave={() => isEnable ? setIsHover(false) : null}
            onClick={(e: any) => {
                if (onClick && isEnable) onClick(e)
            }}
        >
            <ButtonContent text={text} component={component} gap={gap} isComponentLeft={isComponentLeft} textNoWrap={textNoWrap} />
        </button>
    )
}