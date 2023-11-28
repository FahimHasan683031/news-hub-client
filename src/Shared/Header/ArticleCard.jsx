import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ArticleCard({ article }) {
  const { image, title, publisher, description, email, date, type } = article

  const axiosSecure = useAxiosSecure()
  const { data: author = [] } = useQuery({
    queryKey: ['author'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${email}`)
      return res.data;
    }
  })

  const { data: publisherInfo = [] } = useQuery({
    queryKey: ['publisher'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/publishers/${publisher}`)
      return res.data;
    }
  })


  return (
    <Grid item xs={12} sm={6} md={6} lg={4} >


      <Card sx={{ maxWidth: 345, backgroundColor: '#e5faf4' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={author?.image} alt="" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={author?.name}
          subheader={date}
        />
        <img style={{ height: '200px', width: '100%' }} src={image} alt="" />
        <CardContent>
          <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }} variant="body1" color="#059569">
            {title}
          </Typography>
        </CardContent>
        <CardContent sx={{ mt: "-20px" }}>
          <Typography sx={{ fontSize: '14px', fontWeight: 'normal' }} color="#6a7180">
            {description.slice(0, 220) + '...'}
          </Typography>
        </CardContent>
        <CardContent sx={{ mt: "-20px" }}>
          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }} color="#1c1b1a">
            Publish By: {publisher}
          </Typography>
        </CardContent>
        
        {
            type==="premium"?<div className='flex justify-between items-center'>
            <Link to={`/subscription`}><button className='px-4 py-[6px] ml-4 my-4 text-white bg-emerald-600 rounded-sm'>Tack Subscription</button></Link>
            <button className='text-emerald-600 px-2 py-1 h-9 mr-4 rounded-full bg-emerald-200 border border-emerald-600'>Premium</button>
          </div> :<Link to={`/articleSingle/${article._id}`}><button className='px-4 py-[6px] ml-4 my-4 text-white bg-emerald-600 rounded-sm'>Details</button></Link>
          }


      </Card>
    </Grid>
  );
}