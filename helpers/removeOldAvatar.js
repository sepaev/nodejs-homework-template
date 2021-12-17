const path = require('path')
const fs = require('fs/promises')
const { AVATARS_DIR, PUBLIC_DIR } = process.env

async function removeOldAvatar(oldAvatar, userID) {
  if (oldAvatar && oldAvatar.indexOf(AVATARS_DIR) > 0) {
    const [n, ex] = path.win32.basename(oldAvatar).split(`_${userID}.`)
    await fs.unlink(path.join(PUBLIC_DIR, oldAvatar))
    console.log('old avatar ' + n + '.' + ex + ' was removed')
  }
}

module.exports = removeOldAvatar
