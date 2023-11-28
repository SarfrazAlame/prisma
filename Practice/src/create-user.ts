import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: "sarfraz@gmail.com",
            name: "Sarfraz"
        }
    })
}

main().then(async () => {
    console.log("doine")
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})