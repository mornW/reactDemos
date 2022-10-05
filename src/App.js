import {unstable_HistoryRouter as HistoryRouter,Routes,Route} from 'react-router-dom'
import { AutoComponent } from './components/AuthComponent';

import { history } from './utils'
import { lazy,Suspense } from 'react';

// 按需导入组件
const Login = lazy(() => import('./pages/Login'))
const Layout = lazy(() => import('./pages/Layout'))
const Home = lazy(() => import('./pages/Home'))
const Article = lazy(() => import('./pages/Article'))
const Publish = lazy(() => import('./pages/Publish'))

function App() {
  return (
    
    <HistoryRouter history={history}>
      <div className="App">
      <Suspense
          fallback={
            <div
              style={{
                textAlign: 'center',
                marginTop: 200
              }}
            >
              loading...
            </div>
          }
        >

        <Routes>
          <Route path="/" element={<AutoComponent><Layout/></AutoComponent>}>
            <Route index element={<Home />}></Route>
            <Route path='article' element={<Article />}></Route>
            <Route path='Publish' element={<Publish />}></Route>
          </Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        </Suspense>
        
      </div>
    </HistoryRouter>
    
  );
}

export default App;
