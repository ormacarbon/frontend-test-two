import instance from "../libs/axios"

const estimate = async (data) => {
    const response = await instance.post("/estimate", data)
    return response.data
}

export { estimate }