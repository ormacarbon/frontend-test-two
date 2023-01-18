export const titleCase = text => {

    if (text?.length > 0) {
        return text.toLowerCase()
            .split(' ')
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            }).join(' ')
    }

    return ""
}