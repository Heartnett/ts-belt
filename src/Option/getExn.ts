import type { Option } from '../types'
import { isNone } from './isNone'

export const getExn = <T>(option: Option<T>): NonNullable<T> | never => {
  if (isNone(option)) {
    throw new Error('None')
  }

  return option.value
}
