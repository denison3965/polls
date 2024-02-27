import { FastifyInstance} from "fastify"
import { build } from '../src/http/app' 
describe('First', () => {

    let app: FastifyInstance

    beforeAll(() => {
        app = build
    })

    it("deve ser possível somar 2 numeros", () => {
        expect(2+2).toBe(4);
    })

    it("should create a poll", async () => {
        const response = await app.inject({
            method: "POST",
            url: '/polls'
        }) 
        console.log(response.body)
        expect(response.statusCode).toBe(201)
    })  
})