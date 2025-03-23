export const formatDate = (date: string | Date, locale = 'en-GB'): string => {
    const d = new Date(date)

    const dateFormatter = new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })

    return dateFormatter.format(d)
}

export const trimMessage = (message: string, maxLength: number = 50) => {
    if (message.length <= maxLength) return message
    return message.substring(0, maxLength) + '...'
}

export const tryPrettifyJson = (str: string | null | undefined): string => {
    if (!str) return ''

    try {
        const parsed = JSON.parse(str)
        if (parsed === null || parsed === undefined) return ''
        return JSON.stringify(parsed, null, 2)
    } catch (e) {
        // More specific error handling
        if (e instanceof SyntaxError) {
            // It's definitely not JSON, return original string
            return str
        }
        // Handle other potential errors
        return str
    }
}
