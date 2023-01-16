import instance from "../libs/axios"

const estimate = async (data) => {
    const response = await instance.post("/estimate", data)
    return response.data
}

const search = async ({query}) => {
    const response = await instance.get("/search", { params: query })
    return response.data
}

export { estimate, search }