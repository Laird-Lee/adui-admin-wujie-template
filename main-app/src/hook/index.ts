import request from "../utils/request";

const useHttp = ({url, method, data}: { url: string, method: string, data: unknown }) => {
    return new Promise(async resolve => {
        try {
            const {data: res} = await request({
                url,
                method,
                data,
                params: data
            })
            if (res.code !== 200) {
                resolve([res.result, null])
            } else {
                resolve([null, res])
            }
        } catch (e) {
            resolve([null, e])
        }
    })
}

export {
    useHttp
}