import { FC } from "react"
import { Button } from "../button/button"
import { ProgressBar } from "components/progressbar"

interface ButtonWithProgressProps {
    text?: string
    textSize?: number
    textColor?: string
    textColorHover?: string
    textWeight?: 'norm' | 'bold'
    component?: React.ReactElement
    isComponentLeft?: boolean // Компонент в конткнте кнопки слева потом текст в контенте
    gap?: number
    backgroundColor?: string
    backgroundColorHover?: string
    borderRadius?: number
    transitionHover?: string //плавность перехода background при наведении
    padding?: string
    progressIsVisible: boolean
    progressWidth: number | string
    progressHeight: number | string
    progressValue: number
    progressFontSize?: number
    progressBackgroundColor?: string
    isEnable?: boolean
    tabIndex?: number
    refEl?: any
    className?: string
    onBlur?: () => void
    onClick?: () => void
}
export const ButtonWithProgress: FC<ButtonWithProgressProps> = ({
    text,
    textSize,
    textColor,
    textColorHover,
    textWeight,
    component,
    isComponentLeft,
    gap,
    backgroundColor,
    backgroundColorHover,
    borderRadius,
    transitionHover,
    padding,
    progressIsVisible,
    progressWidth,
    progressHeight,
    progressValue,
    progressFontSize,
    progressBackgroundColor,
    isEnable,
    tabIndex,
    refEl,
    className,
    onBlur,
    onClick
}) => {
    return (
        <div>
            <Button
                width={150}
                isComponentLeft={isComponentLeft}
                text={text}
                textColor={textColor}
                textColorHover={textColorHover}
                textSize={textSize}
                textWeight={textWeight}
                backgroundColor={backgroundColor}
                backgroundColorHover={backgroundColorHover}
                borderRadius={borderRadius}
                padding={padding}
                gap={gap}
                transitionHover={transitionHover}
                isEnable={isEnable}
                tabIndex={tabIndex}
                className={className}
                component={component}
                refE={refEl}
                onBlur={onBlur}
                onClick={onClick}
            />
            <ProgressBar isVisible={progressIsVisible} progressValue={progressValue} width={progressWidth} height={progressHeight} fontSize={progressFontSize} backgroundColor={progressBackgroundColor} />
        </div>
    )
}