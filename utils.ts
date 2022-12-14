
/**
 * 格式化时间戳
 * @param timestamp 秒级时间戳
 * @returns "YY-MM-DD hh:mm"
 */
const formatTimestamp = timestamp => {
    const year = new Date(timestamp * 1000).getFullYear();
    const month = new Date(timestamp * 1000).getMonth() + 1;
    const date = new Date(timestamp * 1000).getDate();
    const hour = new Date(timestamp * 1000).getHours();
    const minute = new Date(timestamp * 1000).getMinutes();
    const formatNumber = n => {
        const s = n.toString()
        return s[1] ? s : '0' + s
    }
    return [year, month, date].map(formatNumber).join('-') + " " + [hour, minute].map(formatNumber).join(':')
}