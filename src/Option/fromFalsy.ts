import type * as Type from '../types'
import { None } from './None'
import { Some } from './Some'
import { toBoolean } from '../utils'

type FromFalsy = {
  (value: 0 | '' | false | null | undefined): Type.None
  <T>(value: T): Type.Some<T>
}

export const fromFalsy: FromFalsy = <T>(value: T): any => {
  return toBoolean(value) ? Some(value) : None
}
