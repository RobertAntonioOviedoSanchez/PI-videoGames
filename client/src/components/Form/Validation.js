

const validation = (formData) => {
    const errors = {}

    if (!formData.name) {
        errors.name = "you must enter a name"
    }
    if (!formData.released) {
        errors.released = "You must enter a creation date"
    }
    if (!formData.rating || formData.rating <= 0 || formData.rating > 5) {
        errors.rating = "You must enter a rating between 1 and 5. May contain decimals"
    }
    if (!formData.image) {
        errors.image = "you must enter an image"
    }
    if (!formData.image.includes("https://")) {
        errors.image = "you must enter an image of type URL"
    }
    if (!formData.description) {
        errors.description = "you must enter a description for your game"
    }
    if (formData.genres.length === 0) {
        errors.genres = "You must select at least one gender"
    }
    if (formData.platforms.length === 0) {
        errors.platforms = "You must select at least one platform"
    }
    

    return errors
}

export default validation;