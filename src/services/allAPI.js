import commonAPI from "./commonAPI"
import serverURL from "./serverURL"


export const registerUserAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/register`, reqBody)
}
export const loginUserAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/login`, reqBody)
}
export const generateInterviewtAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverURL}/generate`, reqBody, reqHeader)
}
export const getInterviewAPI = async (ID, reqHeader) => {
    return await commonAPI("PUT", `${serverURL}/getInterview/${ID}`, {}, reqHeader)
}
export const submitInterviewAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverURL}/submit/${reqBody.id}`, reqBody, reqHeader)
}
export const deleteInterviewAPI = async (id, reqHeader) => {
    return await commonAPI("POST", `${serverURL}/delete/${id}`, {}, reqHeader)
}
export const getResultAPI = async (id, reqHeader) => {
    return await commonAPI("GET", `${serverURL}/result/${id}`, {}, reqHeader)
}
export const getHistoryAPI = async (reqHeader) => {
    return await commonAPI("GET", `${serverURL}/history`, {}, reqHeader)
}
export const generateUsingResumeAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POSt", `${serverURL}/generate-usingResume`, reqBody, reqHeader)
}
