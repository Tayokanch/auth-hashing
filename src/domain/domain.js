const prisma = require('../utils/prisma')

const newUserDb = async (username, hashedPassword)=>{
    return await prisma.user.create({
        data:{
            username: username,
            password: hashedPassword
        }
    })
}

module.exports = {
    newUserDb
}