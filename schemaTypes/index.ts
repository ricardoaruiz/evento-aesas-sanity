import {calendar, calendarBanner, calendarHeader} from './calendar'
import {event} from './event'
import {person} from './person'
import {updateDevelop, updateProdction} from './webhook-triggers'

export const schemaTypes = [
  updateDevelop,
  updateProdction,
  calendarHeader,
  calendarBanner,
  calendar,
  event,
  person,
]
