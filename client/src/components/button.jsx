import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage() {
    const [count, setCount] = useState(0);

    return (
        <Button 
        variant="contained"
        className='spin'
        onClick={() => {
            if (count >= 10) setCount((count) => count = -1)
            setCount((count) => count + 1)
        }}
        >
            count is {count}
        </Button>
    )
}