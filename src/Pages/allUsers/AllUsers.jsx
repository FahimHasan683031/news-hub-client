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
import { Link } from 'react-router-dom';






export default function AllUsers() {
    const axiosSecure = useAxiosSecure()
    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data;
        }
    })
   
    // make admin
    const adminHandle = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't  to make the user Admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0d9488",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${_id}`,{rol:'admin'})
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: "Success!",
                                text: "Now the user is a admin.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        });
    }
    // make subscriber
    const subscriberHandle = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to make the user subscriber!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0d9488",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, subscriber!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${_id}`,{rol:'subscriber'})
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: "Success!",
                                text: "Now the user is a subscriber.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        });
    }
    

    return (
        <TableContainer sx={{ maxWidth: 900, margin: '50px auto', }} component={Paper}>
            <Table sx={{ margin: '0 auto', px: '30px' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>No:</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Rol</TableCell>
                        <TableCell>Update</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allUser?.map((user, idx) => (
                        <TableRow
                            key={idx}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {idx + 1}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <img src={user.image} className='w-8 h-8 rounded-md' alt="" />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {user.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {user.email}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {user.rol}
                            </TableCell>
                            <TableCell component="th" scope="row">
                            {
                                user.rol==="subscriber"||user.rol==='premium'?<button onClick={()=>adminHandle(user._id)} className='px-4 py-[6px] ml-4 my-4 text-white bg-emerald-600 rounded-sm'>Make Admin</button>:<button onClick={()=>subscriberHandle(user._id)} className='px-4 py-[6px] ml-4 my-4 text-white bg-rose-600 rounded-sm'>Make subscriber</button>
                            }
                            </TableCell>
                            


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}