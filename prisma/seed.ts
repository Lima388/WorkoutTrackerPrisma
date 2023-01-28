import { Console } from "console";
import prisma from "../src/database/database.js"

async function main(){
    await prisma.weeks.create({data:{}});
    await prisma.weeks.create({data:{}});
    await prisma.exercises.createMany({
        data:[
            {
                name:"Abdominal"
            },
            {
                name:"Supino"
            },
            {
                name:"Flexão"
            }
        ]
    })
}
main()
    .then()
    .catch(e=>{
        console.error(e);
        process.exit(1);

    })
    .finally(async() => {
        await prisma.$disconnect()
    })