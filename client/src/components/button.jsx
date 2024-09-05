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
            setCount((count) => count + 1)
            if (count >= 10) setCount((count) => count = 0)
        }}
        >
            count is {count}
        </Button>
    )
}