import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import deleteIcon from '../../logos/trash-2 9.png'

const StyledTableCell = withStyles({
    head: {
        backgroundColor: '#F5F6FA',
        color: '#686868',
    },
    body: {
        fontSize: 14,
    },
})(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        background: 'white'
    },
}))(TableRow);

function createData(id, name, email, date, list) {
    return { id, name, email, date, list };
}


const useStyles = makeStyles({
    table: {
        minWidth: 700,
        borderRadius: 13,
    },
    tableBtn: {
        "&:hover": {
            boxShadow: "1px 1px 5px black"
        },
        width: 30,
        height: 30,
        background: '#FF444A',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        outline: 'none',
        transition: "box-shadow .2s ease"

    }
});

function UserList(props) {
    const classes = useStyles();
    const { volunteerList } = props;
    const rows = volunteerList.map(data => {
        return createData(data._id, data.displayName, data.email, data.date, data.activity)
    });

    const deleteUser = (id, event) => {
        fetch(`https://young-ocean-39701.herokuapp.com/deleteUser/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log(result))
        event.target.parentNode.parentNode.parentNode.style.display = 'none'
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="center">Email ID</StyledTableCell>
                        <StyledTableCell align="center">Registration Date</StyledTableCell>
                        <StyledTableCell align="center">Volunteer List</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.email}</StyledTableCell>
                            <StyledTableCell align="center">{row.date}</StyledTableCell>
                            <StyledTableCell align="center">{row.list}</StyledTableCell>
                            <StyledTableCell align="center">
                                <button type='button' onClick={(event) => deleteUser(row.id, event)} className={classes.tableBtn}>
                                    <img style={{ height: 30, padding: 4 }} src={deleteIcon} alt="deleteIcon" />
                                </button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default UserList;