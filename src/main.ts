import { NodeBootstrap } from '@nailyjs/backend/node-adapter'
import './app.controller'

new NodeBootstrap().run(5173).then(() => {
  console.log('Server is running on http://localhost:5173')
})
