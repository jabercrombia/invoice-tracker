"use client";

import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'name' },
    { field: 'email', headerName: 'email'  },
    { field: 'amount', headerName: 'amount' },
    {
      field: 'message',
      headerName: 'Message',
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: false,
    },
  ];

  
export default function Submissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/get-submissions");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const responseData = await res.json(); // Rename `data` to `responseData`
        
        if (responseData.success) {
          setSubmissions(responseData.data);
        } else {
          throw new Error("Data fetch unsuccessful");
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
        <h1>Form Submissions</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <Paper sx={{width: '100%' }}>
            <DataGrid
                rows={submissions}
                columns={columns}
                initialState={{ pagination: { paginationModel: { pageSize: 20, page: 0 } } }}
                pageSizeOptions={[5, 10]}
                sx={{ border: 0 }}
            />
        </Paper>
    </div>
  );
}
