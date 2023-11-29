import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

export default function DeclineModal({id,refetch}) {
    const axiosSecure=useAxiosSecure()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [reasonText,setReasonText]=React.useState()
    const declineHandle=()=>{

        axiosSecure.patch(`/articles/${id}`, { status: 'decline',reason:reasonText })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    refetch()
                    toast.success('Declined!')
                    handleClose()
                }
            })
            .catch(err => console.log(err.message))
        
    }

    return (
        <React.Fragment>
            <Button style={{padding:'6px 6px',fontSize:'10px'}} variant="contained" onClick={handleClickOpen}>
                Decline
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth='xs'
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{textAlign:'center'}} id="alert-dialog-title">
                    {"What is decline reason?"}
                </DialogTitle>
                <DialogContent>
                        <textarea onChange={(e)=>setReasonText(e.target.value)} placeholder='Type decline reason...' style={{border:"2px solid #ddd",padding:'5px'}} name="reason" id="" cols="40" rows="6"></textarea>
                    
                </DialogContent>
                <DialogActions>
                <Button onClick={declineHandle} style={{padding:'6px 6px',fontSize:'12px'}} variant="contained" >Confirm</Button>
                    <Button onClick={handleClose} style={{padding:'6px 6px',fontSize:'12px', backgroundColor:"tomato"}} variant="contained" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog> 
        </React.Fragment>
    );
}