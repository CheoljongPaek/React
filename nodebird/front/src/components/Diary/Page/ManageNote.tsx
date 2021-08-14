import React, { useCallback, useEffect, useState } from 'react';
import { DataGrid, GridCellEditCommitParams, GridColDef, GridEditRowsModel, GridRowModel } from '@material-ui/data-grid'; 
import { createTheme, makeStyles } from '@material-ui/core';
import { format } from 'date-fns';

const getThemePaletteMode = (palette: any): string => {
  return palette.type || palette.mode
}

const defaultTheme = createTheme();
const useStyles = makeStyles((theme) => {
  const backgroundColor = 
    getThemePaletteMode(theme.palette) === 'dark' ? '#376331' : 'rgb(217 243 190)';
  return {
    root: {
      '& .MuiDataGrid-cell--editable': {
        backgroundColor,
        },
      },
    };
  },
  { defaultTheme }
);

const ManageNote = () => {
  const [notes, setNotes] = useState<GridRowModel[]>([]);
  const [editRowsModel, setEditRowsModel] = useState({});
  const classes = useStyles();

  // console.log(notes);
  
  const handleEditRowsModelChange = useCallback((model: GridEditRowsModel) => {
    // console.log('handleEditRowsModelChange');
    
    setEditRowsModel(model);
  }, []);

  const handleCellEditCommit = useCallback(async({ id, field, value }: GridCellEditCommitParams) => {
    console.log('handleCellEditCommit', id, field, value);
    if (field === 'title') {
      await fetch('http://localhost:8000/notes/' + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "title": value,
          "id": id,
        })
      }) 
    } else if (field === 'category') {
      await fetch('http://localhost:8000/notes/' + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "category": value,
          "id": id,
        })
      }) 
    }
  }, []);

  const handleCellEditStart = useCallback(() => {
    console.log('CellEditStart');
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => {
        console.log(data[0]);
        data.map((eachnote: {title: string, details: string, category: string, id: number, date: string}) => {
          eachnote.date = format(Date.parse(eachnote.date), 'do MMMM Y');
        })
        console.log('1', data);
        
        return setNotes(data)
      })
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90 },
    { field: 'title', headerName: "TITLE", width: 150, editable: true },
    { field: 'category', headerName: "CATEGORY", width: 150, editable: true },
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
            isCellEditable={(params) => params.row.id }
            onCellEditCommit={handleCellEditCommit}
            onCellEditStart={handleCellEditStart}
          />
        </div>
      </div>
      <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
    </div>
  )
};

export default ManageNote;