const formidable = require('formidable')

const uploadMiddleware = settings => (req, res, next) => {
    const ct = req.get('content-type')
    if(!ct || !ct.startsWith('multipart/form-data')){
        return next()
    }

    const form = formidable({
        uploadDir: settings.uploadDir,
        keepExtensions: true,
        maxFiles: 1
    })

    form.parse(req, (err, fields, files) => {
        req.body = {
            ...fields,
        }
        for(const fileField of Object.keys(files)){
            req.body[
                fileField+'Url'
            ] = settings.baseUrl + files[fileField].newFilename
        }

        next(err)
    })
}

module.exports = uploadMiddleware
