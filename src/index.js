import EmailGenerator from './email-generator'
import path from 'path'

export default class DefaultCustomizer {
  static customizerName = 'default'

  constructor () {
    this.emailGenerator = new EmailGenerator()
  }

  getEmailGenerator () {
    return this.emailGenerator
  }

  getEventTitle () {
    return 'VolgaCTF 2016 Quals'
  }

  getPartials () {
    return {
      footer: {
        path: path.join(__dirname, '..', 'partials', 'footer.html')
      },
      about: {
        path: path.join(__dirname, '..', 'partials', 'about.html')
      },
      intro: {
        path: path.join(__dirname, '..', 'partials', 'intro.html')
      }
    }
  }
}
