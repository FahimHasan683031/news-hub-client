import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from "sweetalert2";
import { useQuery } from '@tanstack/react-query';
import useAuthContext from '../../Hooks/useAuthContext';
import TabilRow from './TabilRow';
import toast from "react-hot-toast";





export default function AdminAllArticles() {
    const axiosSecure = useAxiosSecure()
    const { data: allUserArticles = [], refetch } = useQuery({
        queryKey: ['allUserArticles'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/articles`)
            return res.data;
        }
    })
    
    // delete article
    const deleteHandle = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't  to delete this Article!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0d9488",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/articles/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your article has been delete.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        });
    }
    // article approve
    const approveHandle = (_id) => {

            axiosSecure.patch(`/articles/${_id}`,{status:'approve'})
                .then(res => {
                    if(res.data.modifiedCount) {
                        refetch()
                        toast.success('Approved!')
                    }
                })
                .catch(err => console.log(err.message))
        
    }
    // article make premium
    const premiumHandle = (_id) => {
            axiosSecure.patch(`/articles/${_id}`,{type:'premium'})
                .then(res => {
                    if(res.data.modifiedCount) {
                        refetch()
                        toast.success('Successfully done premium!')
                    }
                })
                .catch(err => console.log(err.message))
        
    }
   
    

    return (
        <TableContainer sx={{ maxWidth: 1050, margin: '15px auto', }} component={Paper}>
            <Table sx={{ margin: '0 auto', px: '30px' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>No:</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell> Author Name</TableCell>
                        <TableCell> Author Image</TableCell>
                        <TableCell>Posted Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>publisher</TableCell>
                        <TableCell>Approve</TableCell>
                        <TableCell>Decline</TableCell>
                        <TableCell>Delete</TableCell>
                        <TableCell>premium</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allUserArticles?.map((article, idx) =><TabilRow 
                    key={idx}
                    article={article} 
                    idx={idx}
                    deleteHandle={deleteHandle}
                    approveHandle={approveHandle}
                    premiumHandle={premiumHandle}
                    refetch={refetch}
                    />)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}