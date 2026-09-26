import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { reviewCode } from '../03-services/01-api';

function CodeEditor() {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Write or paste your code here\n');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleReview = async () => {
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const data = await reviewCode(code, language);
      setResult(data);
    } catch (err) {
      setError('Failed to get review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.toolbar}>
        <label style={styles.label}>Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={styles.select}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>

        <button onClick={handleReview} disabled={loading} style={styles.button}>
          {loading ? 'Reviewing...' : 'Review Code'}
        </button>
      </div>

      <Editor
        height="400px"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
        options={{ fontSize: 14, minimap: { enabled: false } }}
      />

      {error && <p style={styles.error}>{error}</p>}

      {result && (
        <div style={styles.resultContainer}>
          <div style={styles.scoreCard}>
            <h3>Quality Score</h3>
            <p style={styles.scoreNumber}>{result.qualityScore}/100</p>
          </div>

          <div style={styles.card}>
            <h4>🐞 Bugs</h4>
            {result.bugs?.length > 0 ? (
              <ul>{result.bugs.map((b, i) => <li key={i}>{b}</li>)}</ul>
            ) : (
              <p>No bugs found.</p>
            )}
          </div>

          <div style={styles.card}>
            <h4>💡 Suggestions</h4>
            <ul>{result.suggestions?.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </div>

          <div style={styles.card}>
            <h4>⏱ Complexity</h4>
            <p>Time: {result.complexity?.time}</p>
            <p>Space: {result.complexity?.space}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: '20px 30px' },
  toolbar: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' },
  label: { fontWeight: 'bold' },
  select: { padding: '6px 10px', fontSize: '14px', borderRadius: '4px' },
  button: {
    padding: '8px 18px',
    fontSize: '14px',
    backgroundColor: '#2e6f63',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: { color: 'red', marginTop: '10px' },
  resultContainer: { marginTop: '20px', display: 'grid', gap: '15px' },
  scoreCard: {
    backgroundColor: '#1f2a44',
    color: '#fff',
    padding: '15px 20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  scoreNumber: { fontSize: '28px', fontWeight: 'bold', margin: 0 },
  card: {
    backgroundColor: '#f5f6f8',
    padding: '15px 20px',
    borderRadius: '8px',
  },
};

export default CodeEditor;
