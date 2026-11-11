export function toFormData(data: object): FormData {
    const form = new FormData()
    const record = data as Record<string, unknown>
    for (const key of Object.keys(record)) {
      const value = record[key]
      if (Array.isArray(value) && value.length > 0 && value[0] instanceof File) {
        value.forEach((v) => form.append(key, v))
      } else if (value != undefined) {
        if (value instanceof Date) {
          form.append(key, value.toISOString())
        } else {
          form.append(key, String(value))
        }
      }
    }
    return form
  }
