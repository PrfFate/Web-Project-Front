import React, { useState } from 'react';
import "./Post.scss";
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand",
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Post({ title, text, userId, userName }) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false); // Kalp durumu

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    setLiked(!liked); // Kalp tıklanınca durum değiştir
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Link to={`/users/${userId}`} style={{ textDecoration: "none" }}>
            <Avatar sx={{ bgcolor: red[500], cursor: "pointer" }} aria-label="recipe">
              {userName ? userName.charAt(0).toUpperCase() : "?"}
            </Avatar>
          </Link>
        }
        title={title}
        sx={{ textAlign: "center" }}
      />

      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {text}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
          <FavoriteIcon sx={{ color: liked ? "red" : "gray" }} /> {/* Kalp rengi */}
        </IconButton>
        <ExpandMore
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CommentIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More details...</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Post;
