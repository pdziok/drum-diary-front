import { truncate } from 'lodash'

export function smartTruncate(input, length) {
  return truncate(input, {length, separator: /[,.]? +/})
}
