import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

export default function ReasonModal({ id}) {
    const axiosSecure = useAxiosSecure()
    const [article,setArticle]=React.useState({})
    React.useEffect(()=>{
        axiosSecure.get(`/articles/${id}`)
        .then(res=>setArticle(res.data))
         
    },[id,axiosSecure])
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    return (
        <React.Fragment>
            <Button style={{ padding: '6px 6px', fontSize: '10px',backgroundColor: "tomato",marginLeft:'7px' }} variant="contained" onClick={handleClickOpen}>
                Reason
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth='xs'
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{ textAlign: 'center' }} id="alert-dialog-title">
                    {"Decline Reason."}
                </DialogTitle>
                <DialogContent>
                    <p>{article?.reason}</p>

                </DialogContent>
                <DialogActions>
                    
                    <Button onClick={handleClose} style={{ padding: '6px 6px', fontSize: '12px',  }} variant="contained" autoFocus>
                        close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}