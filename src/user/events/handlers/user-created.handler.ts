import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { UserCreatedEvent } from '../user-created.event'

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  handle(event: UserCreatedEvent): any {
  }
}
