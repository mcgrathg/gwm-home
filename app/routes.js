/* eslint-disable no-unused-vars */

// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'homePage',
      getComponent(location, cb) {
        const importModules = Promise.all([
          System.import('containers/Videos/reducer'),
          System.import('containers/Videos/sagas'),
          System.import('containers/ContactForm/reducer'),
          System.import('containers/ContactForm/sagas'),
          System.import('containers/PortfolioPage'),
          System.import('containers/ContactPage'),
          System.import('containers/ResumePage'),
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(
          ([
            videoReducer,
            videoSagas,
            contactReducer,
            contactSagas,
            portComp,
            contactComp,
            resumeComp,
            component,
          ]) => {
            injectReducer('videosContainer', videoReducer.default);
            injectReducer('contactForm', contactReducer.default);
            injectSagas(videoSagas.default);
            injectSagas(contactSagas.default);
            renderRoute(component);
          }
        );

        importModules.catch(errorLoading);
      },
    },
  ];
}
