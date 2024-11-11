import prismaClient from "../prisma"

class ListCustomerService {
    async execute() {
        const costumers = await prismaClient.customer.findMany()

        return costumers
    }
}

export { ListCustomerService }