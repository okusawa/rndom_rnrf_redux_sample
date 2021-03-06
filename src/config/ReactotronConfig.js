/* -*- mode: web -*- */
/* eslint no-undef: 0 */
import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking
} from 'reactotron-react-native';

if (__DEV__) {
  Reactotron
    .configure()
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .connect();
}
