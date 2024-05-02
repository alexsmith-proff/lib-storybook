import { FC } from 'react'

import s from './spiner_lds.module.scss'

interface SpinnerLdsProps{
    scale?: number
}

export const SpinnerLds: FC<SpinnerLdsProps> = ({ scale = 1}) => {
    return (
        <div className={s.spinnerLds} style={{transform: `scale(${scale})` }}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}