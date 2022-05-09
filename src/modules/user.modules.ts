import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export = {
    async userListAll () {
        const data = await prisma.user.findMany()
        if(data) {
            return {status: 200, data: data}
        }
    }
}