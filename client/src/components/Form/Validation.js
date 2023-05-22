

const validation = (formData) => {
    const errors = {}

    if (!formData.name) {
        errors.name = "debe ingresar un nombre"
    }
    if (!formData.released) {
        errors.released = "debe ingresar una fecha de creacion"
    }
    if (!formData.rating || formData.rating <= 0 || formData.rating > 5) {
        errors.rating = "debe ingresar un rating entre 1 y 5 de valoracion. Puede contener decimales"
    }
    if (!formData.image) {
        errors.image = "debe ingresar una imagen"
    }
    if (!formData.image.includes("https://")) {
        errors.image = "debe ingresar una imagen de tipo URL"
    }
    if (!formData.description) {
        errors.description = "debe ingresar una descripcion para su juego"
    }
    if (!formData.genres.length) {
        errors.genres = "debe seleccionar al menos 1 genero"
    }
    if (!formData.platforms.length) {
        errors.platforms = "debe seleccionar al menos 1 plataforma"
    }
    

    return errors
}

export default validation;