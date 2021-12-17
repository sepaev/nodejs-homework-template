const path = require('path')
const fs = require('fs/promises')
const { updateAvatar } = require('../../model/users')
const { resizeImage, removeOldAvatar } = require('../../helpers/')
const { PORT, PUBLIC_DIR, AVATARS_DIR } = process.env

async function uploadAvatarController(req, res) {
  const { path: tempPath, originalname } = req.file
  const [filename, exstension] = originalname.split('.')
  const { _id: userID, avatarUrl: oldAvatar } = req.user
  const HOST = req.hostname

  const avatarName = filename + '_' + userID + '.' + exstension
  const avatarUrl = `/${AVATARS_DIR}/${avatarName}`
  const targetPath = path.join(__dirname, '../../', PUBLIC_DIR, AVATARS_DIR, avatarName)

  try {
    await fs.rename(tempPath, targetPath)
    await resizeImage(path.join(PUBLIC_DIR, avatarUrl))
    await removeOldAvatar(oldAvatar, userID)
    await updateAvatar(userID, avatarUrl)
    res.status(200).json({ avatarUrl: `${HOST}:${PORT}${avatarUrl}` })
  } catch (error) {
    await fs.unlink(tempPath)
    res.status(401).json({ message: 'Not authorized' })
  }
}

module.exports = uploadAvatarController
