import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridEditRowsModel, GridRowModel } from '@material-ui/data-grid'; 
import { NoteProps } from './Note';
import { createTheme, makeStyles } from '@material-ui/core';

const getThemePaletteMode = (palette: any): string => {
  return palette.type || palette.mode
}

const defaultTheme = createTheme();
const useStyles = makeStyles((theme) => {
  const backgroundColor = 
    getThemePaletteMode(theme.palette) === 'dark' ? '#376331' : 'rgb(217 243 190)';
  return {
    root: {
      // '& .MuiDataGrid-cell--editable': {
        backgroundColor,
        // },
      },
    };
  },
  { defaultTheme }
);

const ManageNote = () => {
  const [notes, setNotes] = useState<GridRowModel[]>([]);
  const [editRowsModel, setEditRowsModel] = React.useState({});
  const classes = useStyles();

  
  const handleEditRowsModelChange = React.useCallback((model: GridEditRowsModel) => {
    setEditRowsModel(model);
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90 },
    { field: 'title', headerName: "TITLE", width: 150, editable: true },
    { field: 'category', headerName: "ID", width: 150 },
    { field: 'date', headerName: "DATE", width: 150 },
  ]

  return (
    <div style={{ height: 600, width: '100%', backgroundColor: 'pink' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid 
            // autoHeight
            className={classes.root}
            rows={notes}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            // checkboxSelection
            // disableSelectionOnClick
            editRowsModel={editRowsModel}
            onEditRowsModelChange={handleEditRowsModelChange}
          />
        </div>
      </div>
    </div>
  )
};

export default ManageNote;