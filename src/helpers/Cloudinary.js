export const FileImagen = async (file) => {
    const CloudinaryUrl = "https://api.cloudinary.com/v1_1/ddgyxfetd/upload/"
    const formImagen = new FormData();
    formImagen.append('upload_preset', 'prueba1')
    formImagen.append('file', file)

    const resp = await fetch(CloudinaryUrl, {
        method: "POST",
        body: formImagen
    })

    const cloudinaryRespuesta = await resp.json()
    return cloudinaryRespuesta.secure_url
}