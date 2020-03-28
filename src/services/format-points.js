const formatPoints = (points) => {
    if (points > 999) {
        return `${Math.floor(points / 100) / 10}k`
    }
    return points
}

export default formatPoints