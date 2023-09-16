import React, { useState } from 'react';
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagination = () => {
    const [page, setPage] = useState(1); 

    const handlePageChange = (event, value) => {
        setPage(value); 
    }

    return (
        <Stack spacing={2}>
            <MuiPagination 
                count={10} 
                variant="outlined" 
                page={page} 
                onChange={handlePageChange} 
            />
        </Stack>
    );
};

export default Pagination;
