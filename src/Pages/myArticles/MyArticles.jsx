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
import ReasonModal from './ReasonModal';





export default function MyArticles() {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuthContext()
    const { data: myArticles = [],refetch } = useQuery({
        queryKey: ['myArticles'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/articles?email=${user?.email}`)
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

    return (
        <TableContainer sx={{ maxWidth: 1200, margin: '50px auto', }} component={Paper}>
            <Table sx={{ margin: '0 auto', px: '30px' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>No:</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Details</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {myArticles?.map((article, idx) => (
                        <TableRow
                            key={idx}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {idx + 1}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <img src={article.image} className='w-8 h-8 rounded-md' alt="" />
                            </TableCell>
                            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                                {article.title}
                            </TableCell>
                            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                                {article.status}
                                {
                                    article.status === 'decline' ? <ReasonModal id={article._id}/>:''
                                }
                            </TableCell>
                            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                                {article.type}
                            </TableCell>
                            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                                <Link to={`/articleSingle/${article._id}`}><button className='px-4 py-[6px] ml-4 my-4 text-white bg-emerald-600 rounded-sm'>Details</button></Link>
                            </TableCell>

                            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                                <Link to={`/updateArticles/${article._id}`}>
                                    <button className='px-4 py-[6px] ml-4 my-4 text-white bg-sky-600 rounded-sm'>Update</button>
                                </Link>
                            </TableCell>
                            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                                <button onClick={()=>deleteHandle(article._id)} className='px-4 py-[6px] ml-4 my-4 text-white bg-red-500 rounded-sm'>Delete</button>
                            </TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}