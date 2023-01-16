import { useState } from "react"
import useLocation from "../../hooks/useLocation"
import ReactFlagsSelect from "react-flags-select"
import InputAdornment from '@mui/material/InputAdornment'
import { StyledTextField } from "../styles/ThemeConfig"

const EnergyInput = ({ register }) => {
    const { countryCode, setCountryCode } = useLocation()
    const [selected, setSelected] = useState(countryCode)

    const updateCountryCode = (code) => {
        setSelected(code)
        setCountryCode(code)
    }

    return (
        <>
            <StyledTextField
                fullWidth
                variant="filled"
                type="number"
                autoComplete='off'
                label="Energy amount"
                InputProps={{
                    endAdornment: <InputAdornment position="end">kWh</InputAdornment>,
                }}
                {...register('energy', { required: true, min: 0, valueAsNumber: true })}
            />
            <ReactFlagsSelect
                selected={selected}
                onSelect={updateCountryCode}
                fullWidth
            />
        </>
    )
}

export default EnergyInput