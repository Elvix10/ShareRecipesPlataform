import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        title={<Typography variant="h6"  noWrap={!expanded}>
       
        {data?.title}
      </Typography>}
       
        subheader="Published by:"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://z-p3-scontent.frai2-1.fna.fbcdn.net/v/t39.30808-6/240732521_253362726656570_2978354159663101127_n.jpg?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHpPMIAo1iUXVGJLFMtHTJkZwSVPcxSpQFnBJU9zFKlASoiEaIraBwELh-rTcJgNNNPBJY5ZtJX_EhUEDVoCnYC&_nc_ohc=LuQc4oxTVScAX_vMiN8&_nc_zt=23&_nc_ht=z-p3-scontent.frai2-1.fna&oh=00_AfC74-5Emynkm0N3XqDTvqwUkLAApgo1iwKdplNn7yzWeA&oe=64BE8175"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" noWrap={!expanded}>
          {"INGREDIENTS: "}
          {data?.ingredients}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{data?.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
