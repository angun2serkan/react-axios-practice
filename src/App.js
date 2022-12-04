import Title from './components/Title';
import Setup from './examples/1-first-request';
import HeaderSetup from './examples/2-headers';
import PostRequest from './examples/3-post-request';
function App() {
  return (
    <main>
      <Title />
      <Setup/>
      <HeaderSetup/>
      <PostRequest/>
    </main>
  );
}

export default App;
