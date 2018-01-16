import { observable } from 'mobx'

class MainStore {
  @observable counter = 0
  @observable footerEmail = ''
  @observable navDropdown = false
}

const ms = new MainStore()

export default ms
