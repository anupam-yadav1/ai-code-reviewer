import CodeEditor from '../01-components/02-CodeEditor';

function Home() {
  return (
    <div>
      <div style={{ padding: '30px 30px 0' }}>
        <h1>Welcome to AI Code Reviewer</h1>
        <p>Paste your code below and get instant AI-powered feedback on bugs, quality, and optimization.</p>
      </div>
      <CodeEditor />
    </div>
  );
}

export default Home;