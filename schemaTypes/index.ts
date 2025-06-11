import {calendarBanner, calendarHeader, calendarType} from './calendar'
import {event} from './event'
import {updateDevelop, updateProdction} from './webhook-triggers'

export const schemaTypes = [
  updateDevelop,
  updateProdction,
  calendarHeader,
  calendarBanner,
  calendarType,
  event,
]
