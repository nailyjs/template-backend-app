import { Value } from '@nailyjs/config'
import { Service } from '@nailyjs/ioc'

@Service()
export class AppService {
  @Value('naily')
  private readonly naily: string

  getHello() {
    return new Response('Hello World', {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
}
