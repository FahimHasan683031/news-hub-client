import { TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import DeclineModal from "./DeclineModal";


const TabilRow = ({ article, idx, deleteHandle, approveHandle, premiumHandle, refetch }) => {
    const axiosSecure = useAxiosSecure()
    const [author,setAuthor]=useState()
    useEffect(()=>{
        axiosSecure.get(`/users/${article.email}`)
        .then(res=>setAuthor(res.data))
         
    },[article.email,axiosSecure])
    
    
    return (

        <TableRow

            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {idx + 1}
            </TableCell>

            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                {article.title.slice(0, 20) + '..'}
            </TableCell>
            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                {author?.name}
            </TableCell>

            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                <img src={author?.image} className="h-5 w-5 rounded-md" alt="" />
            </TableCell>
            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                {article.date}
            </TableCell>
            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                {article.status}
            </TableCell>
            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                {article.publisher}
            </TableCell>
            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                {
                    article.status === 'approve' ? '---' : <button onClick={() => approveHandle(article._id)} className='px-2 py-[6px] text-[10px] ml-4 my-4 text-white bg-emerald-600 rounded-sm'>Approve</button>
                }
            </TableCell>

            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">

                {
                     article.status === 'decline' ? '---' :<DeclineModal id={article._id} refetch={refetch}/>


                }

            </TableCell>
            <TableCell sx={{ fontSize: '10px' }} component="th" scope="row">
                <button onClick={() => deleteHandle(article._id)} className='px-2 py-[6px] ml-4 my-4 text-white bg-red-500 rounded-sm'>Delete</button>
            </TableCell>
            <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                {
                    article.type === 'premium' ? '---' : <button onClick={() => premiumHandle(article._id)} className='px-2 text-[10px] py-[6px] ml-4 my-4 text-white bg-purple-600 rounded-sm'>Premium</button>
                }

            </TableCell>


        </TableRow>

    );
};

export default TabilRow;