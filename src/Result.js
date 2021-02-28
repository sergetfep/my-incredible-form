import React from 'react';
import { MainContainer } from './components/MainContainer';
import Typography from '@material-ui/core/Typography';
import { useData } from './DataContext';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { InsertDriveFile } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginBottom: '30px',
  },
  table: {
    marginBottom: '30px',
  },
});

export const Result = () => {
  const styles = useStyles();
  const { data } = useData();
  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const { files } = data;

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        ✈️ ✈️ ✈️ Form Values
      </Typography>
      <TableContainer className={styles.root} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component="h2" variant="h5">
            👉👌 Files
          </Typography>
          <List>
            {files.map((f, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Link to="/">Start over</Link>
    </MainContainer>
  );
};
