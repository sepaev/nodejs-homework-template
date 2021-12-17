const Jimp = require('jimp')

const resizeImage = path => {
  Jimp.read(path, (err, picture) => {
    if (err) throw err
    picture
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .write(path) // save
  })
}

module.exports = resizeImage
