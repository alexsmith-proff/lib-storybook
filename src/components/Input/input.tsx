import { FC } from 'react'
import s from './input.module.scss'

// Стилизованная надстройка над <input>
interface InputProps {
    value: any | null
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    error?: boolean // TODO: 
    // width?: number
    tabIndex?: number | undefined// TODO:
    autoFocus?: boolean
    type?: 'text' | 'password'
    placeholder?: string
    className?: string
    refE?: any
    onBlur?: (a: any) => void
}

export const Input: FC<InputProps> = ({ value, disabled = false, error = false, onChange, autoFocus, type, placeholder, className, tabIndex, refE, onBlur }) => {

    return (
        <input className={`${className} ${s.input} ${error ? s.error : ''} ${disabled ? s.disable : ''}`} type={type} placeholder={placeholder} tabIndex={tabIndex}
            ref={refE} onBlur={onBlur} value={value} disabled={disabled} onChange={onChange} autoFocus={autoFocus} />
    )
}