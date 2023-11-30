
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

 

export const options = {
    title: "Publishers Posts",
};
const AdminPichart = () => {
    const [aljajiraPost,setAljajiraPost]=useState([])
    const [ReutersPost,setReutersPost]=useState([])
    const [BBCNEWSPost,setBBCNEWSPost]=useState([])
    const [cnnPosts,setCnnPost]=useState([])
    const [tmsPosts,setTmsPost]=useState([])
    const [ guardianPosts,setGradinPost]=useState([])
    const [ WiredPosts,setWiredPost]=useState([])
    const axiosSecure=useAxiosSecure()
    useEffect(()=>{
        axiosSecure.get('/articles?publisher=Al Jazeera')
        .then(res=>setAljajiraPost(res.data))

        axiosSecure.get('/articles?publisher=Reuters')
        .then(res=>setReutersPost(res.data))

        axiosSecure.get('/articles?publisher=BBC NEWS')
        .then(res=>setBBCNEWSPost(res.data))

        axiosSecure.get('/articles?publisher=CNN')
        .then(res=>setCnnPost(res.data))

        axiosSecure.get('/articles?publisher=The New York Times')
        .then(res=>setTmsPost(res.data))

        axiosSecure.get('/articles?publisher=The Guardian')
        .then(res=>setGradinPost(res.data))

        axiosSecure.get('/articles?publisher=Wired')
        .then(res=>setWiredPost(res.data))

    },[axiosSecure])


    const data = [
        ["Task", "Hours per Day"],
        ["Al Jazeera", aljajiraPost?.length],
        ["Reuters", ReutersPost?.length],
        ["BBC NEWS", BBCNEWSPost?.length],
        ["CNN", cnnPosts?.length],
        ["The New York Times", tmsPosts?.length],
        ["The Guardian", guardianPosts?.length],
        ["Wired", WiredPosts?.length],
    ];
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    );
};

export default AdminPichart;