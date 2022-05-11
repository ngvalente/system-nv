import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export = {
    async usersAll() {
        const data = await prisma.user.findMany()
        if (data.length) {
            return { status: 200, data: data }
        }
    },
    async userById(id: string) {

        const data = await prisma.user.findUnique({ where: { id: Number(id) } })
        if (data) {
            return { status: 200, data: data }
        }
        return { status: 204 }
    },

    async createUser(body:any){
        const data = await prisma.user.create({data:body})
        if (data) {
            return { status: 200, data: data }
        }
    }
}