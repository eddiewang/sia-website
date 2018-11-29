import { observable } from 'mobx'

class MainStore {
  @observable counter = 0
  @observable footerEmail = ''
  @observable footerMessage = null
  @observable footerStatus = 'hi'
  @observable navDropdown = false
}

const ms = new MainStore()

export default ms
