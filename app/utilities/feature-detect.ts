const noop = () => {
  return undefined
}
type TSupports = boolean | null

let supportsPassive: TSupports = null

let supportsOnce: TSupports = null

export function supportsEventListenerOnceOption() {
  if (supportsOnce !== null) {
    return supportsOnce
  }
  try {
    const opts = Object.defineProperty({}, 'once', {
      get() {
        supportsOnce = true
      }
    })
    document.addEventListener('test', noop, opts)
  } catch (error) {
    supportsOnce = false
  }
  document.removeEventListener('test', noop)
  return supportsOnce
}

export function supportsEventListenerPassiveOption() {
  if (supportsPassive !== null) {
    return supportsPassive
  }
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        supportsPassive = true
      }
    })
    document.addEventListener('test', noop, opts)
  } catch (error) {
    supportsPassive = false
  }
  document.removeEventListener('test', noop)
  return supportsPassive
}

export function isUrlExternal(url) {
  const host = window.location.hostname

  const linkHost = u => {
    if (/^https?:\/\//.test(u)) {
      // Absolute URL.
      // The easy way to parse an URL, is to create <a> element.
      // @see: https://gist.github.com/jlong/2428561
      const parser = document.createElement('a')
      parser.href = u

      return parser.hostname
    } else {
      // Relative URL.
      return window.location.hostname
    }
  }

  const testHost = linkHost(url)

  return host !== testHost
}
