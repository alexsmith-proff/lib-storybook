import { FC } from "react"

interface ProgressBarProps {
    width: number | string
    height: number | string
    progressValue: number
    isVisible?: boolean
    fontSize?: number
    backgroundColor?: string
}
export const ProgressBar: FC<ProgressBarProps> = ({ width, height, progressValue, isVisible = false, fontSize = 12, backgroundColor = '#0B1331' }) => {
    return (
        <div style={{ opacity: isVisible ? 1 : 0 }}>
            <div style={{ width: width, height: height, border: `1px solid ${backgroundColor}`, borderRadius: '5px', marginTop: '7px' }}>
                <div style={{ width: `${progressValue}%`, height: '100%', backgroundColor: backgroundColor, transition: '.7s linear' }}></div>
            </div>
            <p style={{ width, fontSize: `${fontSize}px`, textAlign: "center" }}>{progressValue}%</p>
        </div>
    )
}