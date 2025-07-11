export function toFormData(data: any): FormData {
    const form = new FormData()
    for (const key of Object.keys(data)) {
      const value = data[key]
      if (Array.isArray(value) && value.length > 0 && value[0] instanceof File) {
        value.forEach((v) => form.append(key, v))
      } else if (value != undefined) {
        if (value instanceof Date) {
          form.append(key, value.toISOString())
        } else {
          form.append(key, value)
        }
      }
    }
    return form
  }