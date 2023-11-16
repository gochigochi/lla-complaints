import getSuspender from "./getSuspender"

const fetchData = (url, options = {}) => {

    //https://www.youtube.com/watch?v=GR5-aao7Y-0    MINUTE 9.20
    const promise = fetch(url, options)
    .then(res => res.json())
    .then(data => data)

    return getSuspender(promise)
}

export default fetchData