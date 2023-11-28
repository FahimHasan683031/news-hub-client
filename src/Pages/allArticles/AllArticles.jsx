import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Container, Grid } from "@mui/material";
import ArticleCard from "../../Shared/Header/ArticleCard";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";

const AllArticles = () => {
    const axiosSecure = useAxiosSecure()
    const [articles, setArticles] = useState()
    const [searchText, setSearchText] = useState("")
    const [publisherText,setPublisherText]=useState('')
    const [tagsText,setTagText]=useState('')

    useEffect(() => {
        
        axiosSecure.get(`/articles?title=${searchText}&publisher=${publisherText}&tags=${tagsText}&status=pending`)
            .then(data => setArticles(data.data))
    }, [searchText, axiosSecure,publisherText,tagsText])
    const searchInputHandle = e => {
        const value = e.target.value
        setSearchText(value)
    }
    const { data: publisher = [] } = useQuery({
        queryKey: ['publishers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/publishers')
            return res.data;
        }
    })
    const { data: tags = [] } = useQuery({
        queryKey: ['tags'],
        queryFn: async () => {
            const res = await axiosSecure.get('/articlesTags')
            return res.data;
        }
    })


    return (
        <div>
            <div className="bg-[url('')]   bg-no-repeat bg-cover relative bg-top py-8 mb-10 lg:py-8">
                <div className="absolute h-full w-full top-0 z-0 left-0 bg-[#080808de]"></div>
                <div className="text-center relative z-20">
                    <h1 className="text-4xl lg:text-5xl  font-bold text-teal-500">All Articles</h1>
                    <div className=" flex items-center justify-center">
                        <input className="w-3/5 md:w-2/5 lg:w-1/3 px-3 py-[6px] lg:py-[9px] text-sm rounded-sm my-5 lg:my-7 " placeholder="Search Article By Title..." onChange={searchInputHandle} type="text" name="search" id="" />
                        <AiOutlineSearch className="text-teal-500 text-2xl -ml-8 md:-ml-10"></AiOutlineSearch>
                        
                    </div>
                    <div className="flex gap-5 justify-center">
                            <div>
                                <select required onChange={(e)=>setPublisherText(e.target.value)} name="publisher" defaultValue='deafult' className="px-4  w-full py-2 drop-shadow-lg rounded-sm mb-4" id="">
                                    <option disabled value='deafult' >Filter by publisher</option>
                                    {
                                        publisher?.map(provider => <option key={provider._id} value={provider?.name}>{provider.name}</option>)
                                    }

                                </select>
                            </div>
                            <div>
                                <select  onChange={(e)=>setTagText(e.target.value)}  name="publisher" defaultValue='deafult' className="px-4  w-full py-2 drop-shadow-lg rounded-sm mb-4" id="">
                                    <option disabled value='deafult' >Filter by tag name</option>
                                    {
                                        tags[0]?.tags.map((tag,index) => <option key={index} value={tag}>{tag}</option>)
                                    }

                                </select>
                            </div>
                            
                        </div>
                </div>

            </div>
            <Container sx={{ margin: '0 auto' }}>
                <Grid container spacing={4}>

                    {
                        articles?.map(article => <ArticleCard key={article._id} article={article} />)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default AllArticles;