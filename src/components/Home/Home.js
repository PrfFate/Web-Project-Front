import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("/posts")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPostList(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                    <Box sx={{ bgcolor: "#cfe8fc", minHeight: "100vh", p: 3 }}>
                        <Grid container spacing={3}>
                            {postList.map((post, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Post title={post.title} text={post.text} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;
