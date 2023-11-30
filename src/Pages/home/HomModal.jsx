import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';


export default function HomModal() {

    const [open, setOpen] = React.useState(false);
    const [iscalled,setIsCalled]=React.useState(true)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    if (iscalled) {
        setTimeout(handleClickOpen, 10000);
        setIsCalled(false)
    }


    return (
        <React.Fragment>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth='xs'
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{ textAlign: 'center' }} id="alert-dialog-title">
                    {"Tack 50% OF any Subscription plan ."}
                </DialogTitle>
                <DialogContent>

                    <h1 className='text-xl font-bold text-center'>Join With Us.</h1>
                </DialogContent>
                <DialogActions>
                    <Link to='/subscription'><Button onClick={handleClose} style={{ padding: '6px 6px', fontSize: '12px' }} variant="contained" >Tack Subscription</Button></Link>
                    <Button onClick={handleClose} style={{padding:'6px 6px',fontSize:'12px', backgroundColor:"tomato"}} variant="contained" autoFocus>
                        Cancel
                    </Button>
                    
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}