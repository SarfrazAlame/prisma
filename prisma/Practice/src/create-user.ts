import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const res = await prisma.user.create({
        data: {
            email: "sarfraz11@gmail.com",
            name: "Sarfraz"
        }
    })
    console.log(res)
}

main().then(async () => {
    console.log("doine")
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})