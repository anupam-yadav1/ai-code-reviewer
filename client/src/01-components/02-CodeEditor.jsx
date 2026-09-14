import { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Write or paste your code here\n');

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
      </div>

      <Editor
        height="500px"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: '20px 30px',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
  },
  select: {
    padding: '6px 10px',
    fontSize: '14px',
    borderRadius: '4px',
  },
};

export default CodeEditor;