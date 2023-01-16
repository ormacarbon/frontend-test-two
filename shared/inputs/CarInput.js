const CarInput = ({ register }) => {

    return (
        <>
            <input
                type="number"
                autoComplete='off'
                placeholder="Cargo weight (kg)"
                {...register('weight', { required: true, min: 0, valueAsNumber: true })}
            />
            <input
                type="number"
                autoComplete='off'
                placeholder="Distance (Km)"
                {...register('distance', { required: true, min: 0, valueAsNumber: true })}
            />
        </>
    )
}

export default CarInput