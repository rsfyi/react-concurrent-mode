import { lazy, Suspense } from 'react';
import './App.css';
import ErrorBoundary from './error-boundaries';

const PokedoxDetail = lazy(() => import('./PokedoxDetail'));
// const PokedoxDetail = lazy(() => Promise.reject());
// const PokedoxDetail = lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(
//         () => resolve({ default: () => <div>[Fake] Pokemon</div> } as any),
//         3000
//       )
//     )
// );

// since promise has 3 states
// pending - pending state is catched by suspense fallback
// success
//reject - if promise is rejected - Error boundary will catch the error

function App() {
  return (
    <div className='App'>
      <h1>React Suspense</h1>
      <ErrorBoundary fallback="Error boundary fallback - Couldn't catch 'em all.">
        <Suspense fallback='Suspense fallback - Loading Pokemon .....'>
          <PokedoxDetail />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
