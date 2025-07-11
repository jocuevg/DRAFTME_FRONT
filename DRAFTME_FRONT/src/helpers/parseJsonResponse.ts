const isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,7})?(?:[-+]\d{2}:?\d{2}|Z)?$/

function isDateString(value: any): boolean {
  return value && typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)
}

function isIsoDateString(value: any): boolean {
  return value && typeof value === 'string' && isoDateFormat.test(value)
}

function getYear(isoDate: string): number {
  return +isoDate.substring(0, 4)
}

function getMonthIndex(isoDate: string): number {
  return +isoDate.substring(5, 7) - 1
}

function getDate(isoDate: string): number {
  return +isoDate.substring(8).substring(0, 2)
}

function getHours(isoDate: string): number {
  return +isoDate.substring(11).substring(0, 2)
}

function getMinutes(isoDate: string): number {
  return +isoDate.substring(14).substring(0, 2)
}

function getSeconds(isoDate: string): number {
  return +isoDate.substring(17).substring(0, 2)
}

function getMilliseconds(isoDate: string): number {
  const match = isoDate.match(/\.\d{1,7}/)
  if (!match) return 0

  // Tomamos los primeros 3 dígitos, y si hay menos, rellenamos con ceros a la derecha
  const msStr = match[0].substring(1, 4).padEnd(3, '0')

  return +msStr
}

export function parseJsonResponse(body: any) {
  if (body === null || body === undefined || typeof body !== 'object') return body

  for (const key of Object.keys(body)) {
    const value = body[key]
    if (isIsoDateString(value)) {
      body[key] = new Date(
        getYear(value),
        getMonthIndex(value),
        getDate(value),
        getHours(value),
        getMinutes(value),
        getSeconds(value),
        getMilliseconds(value)
      )
    } else if (isDateString(value)) {
      body[key] = new Date(getYear(value), getMonthIndex(value), getDate(value))
    } else if (value === null) {
      body[key] = undefined
    } else if (typeof value === 'object') {
      parseJsonResponse(value)
    }
  }
}
