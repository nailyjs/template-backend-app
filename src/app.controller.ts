import { Get, Req, RestController } from '@nailyjs/backend'
import { AppService } from './app.service'

@RestController()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() _req: Request): Response {
    return new Response('Hello World')
  }
}
