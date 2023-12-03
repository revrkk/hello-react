import { Card, CardMedia, CardActions, Typography, Button, CardContent } from '@mui/material';
import './Course.css'
import CourseItem from './CourseItem/CourseItem'

export default function Course({ courses }) {

    function onCourseItemClick(item) {
        alert("You clicked " + item.name);
    }

    return (
        <div className='course'>
            <div>{JSON.stringify(courses)}</div>
            {
                courses.map(x => <CourseItem item={x} onTouch={() => onCourseItemClick(x)}> {x.description} </CourseItem>)
            }

            {
                courses.map(c => 
                    <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                            title={c.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {c.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                </Card>)
            }
        </div>
    );
}