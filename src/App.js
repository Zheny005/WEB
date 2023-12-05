import { useState  } from 'react';
import useStatus from './hooks/StatusHook';
import useLogData from './hooks/StateToConsole';

function App(initialStatus) {
  const [data, setData] = useState('Data from the component');
  const [status, updateStatus] = useStatus('Active');

  useLogData(data);

  return (
    <div>
      <p>{data}</p>
      <p>Status: {status}</p>
      <button onClick={() => updateStatus('Inactive')}>Change status</button>
    </div>
  );
}

export default App;