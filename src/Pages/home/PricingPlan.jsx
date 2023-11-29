import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";

export default function PricingPlan() {
    return (
        <div className='max-w-screen-lg mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center text-emerald-600 mb-14'>OUR SUBSCRIPTION PLANS</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            <Card size="lg" sx={{backgroundColor:'#e5faf4'}} variant="outlined">
                <Chip size="sm" variant="outlined" color="neutral">
                    BASIC
                </Chip>
                <Typography level="h2">For 6 Month</Typography>
                <Divider inset="none" />
                <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Read Article
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Read Premium Article
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Post Article
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Update and Delete your article
                    </ListItem>
                </List>
                <Divider inset="none" />
                <CardActions>
                    <Typography level="title-lg" sx={{ mr: 'auto' }}>
                        9.99${' '}
                        
                    </Typography>
                    <Link to='/subscription'><Button
                        
                        color="neutral"
                        endDecorator={<KeyboardArrowRight />}
                        sx={{backgroundColor:'#059669',color:'white'}}
                    >
                        Start now
                    </Button></Link>
                </CardActions>
            </Card>

            <Card size="lg" sx={{backgroundColor:'#ccf7fd'}} variant="outlined">
                <Chip size="sm" variant="outlined" color="neutral">
                    Popular
                </Chip>
                <Typography level="h2">For 1 Year</Typography>
                <Divider inset="none" />
                <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Read Article
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Read Premium Article
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Post Article
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Update and Delete your article
                    </ListItem>
                </List>
                <Divider inset="none" />
                <CardActions>
                    <Typography level="title-lg" sx={{ mr: 'auto' }}>
                       49.99${' '}
                        
                    </Typography>
                    <Link to='/subscription'><Button
                        
                        color="neutral"
                        endDecorator={<KeyboardArrowRight />}
                        sx={{backgroundColor:'#06b5d4',color:'white'}}
                    >
                        Start now
                    </Button></Link>
                </CardActions>
            </Card>
            <Card size="lg" sx={{backgroundColor:'#ece8fd'}} variant="outlined">
                <Chip size="sm" variant="outlined" color="neutral">
                    Premium
                </Chip>
                <Typography level="h2">Lifetime</Typography>
                <Divider inset="none" />
                <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Read Article
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Read Premium Article
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Post Article
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Update and Delete your article
                    </ListItem>
                </List>
                <Divider inset="none" />
                <CardActions>
                    <Typography level="title-lg" sx={{ mr: 'auto' }}>
                       149.99${' '}
                        
                    </Typography>
                    <Link to='/subscription'><Button
                        
                        color="neutral"
                        endDecorator={<KeyboardArrowRight />}
                        sx={{backgroundColor:'#793cec',color:'white'}}
                    >
                        Start now
                    </Button></Link>
                </CardActions>
            </Card>
        </div>
        </div>
    );
}