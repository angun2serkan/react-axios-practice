import Title from './components/Title';
import Setup from './examples/1-first-request';
import HeaderSetup from './examples/2-headers';
import PostRequest from './examples/3-post-request';
import GlobalInstance from './examples/4-global-instance';
import CustomInstance from './examples/5-custom-instance';
import Interceptors from  './examples/6-interceptors';

import './axios/global';
function App() {
  return (
    <main>
      <Title />
      <Setup/>
      <HeaderSetup/>
      <PostRequest/>
      <GlobalInstance/>
      {/* <CustomInstance/> */}
      <Interceptors/>
    </main>
  );
}

export default App;
