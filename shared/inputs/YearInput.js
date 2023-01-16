import { StyledTextField } from "../styles/ThemeConfig"

const YearInput = ({ register }) => {
    return (
            <StyledTextField
                fullWidth
                variant="filled"
                type="number"
                autoComplete='off'
                label="Year"
                defaultValue={new Date().getFullYear() - 1}
                {...register('year', { required: true, min: 0, valueAsNumber: true })}
            />
    )
}

export default YearInput