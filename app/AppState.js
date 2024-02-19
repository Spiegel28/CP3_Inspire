import { backgroundImage1 } from './models/BackgroundImage.js'
import { Weather } from './models/Weather.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

   /**
   * @type {backgroundImage1 | null}
   */
  // NOTE this will not be an array of data coming, so we do not set up an array placeholder.
  backgroundImage1 = null

  /**
   * @type {Weather | null}
   */
  weather = null
}

export const AppState = createObservableProxy(new ObservableAppState())