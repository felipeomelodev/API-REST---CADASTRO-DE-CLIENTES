import { FastifyRequest, FastifyReply } from "fastify"
import { ListCustomerService } from "../services/ListCustomerService"

class ListCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomerService = new ListCustomerService()

        const costumer = await listCustomerService.execute()

        reply.send(costumer)

    }
}

export { ListCustomerController }