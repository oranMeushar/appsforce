

export const get = async(url, token=null) => {
    let headers = {}

    token && (headers.Authorization = `Bearer ${token}`)
    
    try{
        const result = await fetch(url, {
            method: 'GET',
            headers
        });
        const data = await result.json();
        return {result, data};
    }catch(err){
        console.log(err);
    }
}