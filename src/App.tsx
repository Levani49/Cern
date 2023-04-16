import { lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';

import Navigation from './components/navigation/Index';
import FlyOverlay from './components/three/FlyGraph.component';
import Stats from './components/three/Stats.component';
import ModelInfo from './components/modals/modelInfo/ModelInfo.component';
import { messages } from './translations';

const Tree = lazy(() => import('./components/tree/Tree.component'));
const Scene = lazy(() => import('./three'));
const Logo = lazy(() => import('./components/logo/Logo.component'));

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  const locale = navigator.language.split('-')[0];

  // Check if the locale exists in the messages object, and if not, use the default locale
  const localeMessages = messages[locale];

  return (
    <IntlProvider locale={locale} messages={localeMessages}>
      <div className="flex">
        <Navigation />
      </div>
      <div className="absolute z-10 w-full h-full top-0 left-0">
        <div className="bg-transparent absolute z-[2002] top-14  max-h-[80%] overflow-y-auto">
          <Suspense>
            <Tree />
          </Suspense>
        </div>
        <FlyOverlay />
        <Stats />
        <ModelInfo />
        <Suspense>
          <Scene />
          <Logo />
        </Suspense>
      </div>
    </IntlProvider>
  );
}

export default App;
