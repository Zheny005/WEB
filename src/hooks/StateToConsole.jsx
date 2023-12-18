import { useEffect } from 'react';

function useLogData(data) {
    useEffect(() => {
        console.log('State data:', data);
    }, [data]);
}

export default useLogData;