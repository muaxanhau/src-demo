const development = {
  baseUrl: 'http://example.abc-xyz',
  description: 'only for development',
  status: 'live'
}
const test = {
  baseUrl: '',
  description: '',
  status: ''
}
const production = {
  baseUrl: '',
  description: '',
  status: ''
}

const baseUrl = development.baseUrl

export { baseUrl }
