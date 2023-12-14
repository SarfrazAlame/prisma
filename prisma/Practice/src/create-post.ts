import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const res = await prisma.post.create({
        data: {
            title: "Machine Learning",
            content: "Amazing",
            published: true,
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
    console.log(res)
}
main().then(async()=>{
    console.log("done")
    await prisma.$disconnect()
}).catch(async(e)=>{
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})