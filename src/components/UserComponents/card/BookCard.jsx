import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

function BookCard({ title, img, id }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="w-full">
      <CardMedia sx={{ height: 140 }} image={img} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small">
          <Link to={id} className="text-sm">
            Learn More
          </Link>
        </Button>
        <div>
          <Button size="small" sx={{ color: "blue" }}>
            <ShoppingBasketIcon />
          </Button>
          <Button size="small" sx={{ color: "red" }}>
            <FavoriteIcon />
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

export default BookCard;
