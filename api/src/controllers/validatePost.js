const validate = (req, res, next) => {
    const { name, description, platforms, image, released, rating, genres } = req.body
    if( !name || !description || !platforms || !image || !released || !rating || !genres ) return res.status(400).json({ error: "Datos incompletos"})
    next();
};

module.exports = validate;