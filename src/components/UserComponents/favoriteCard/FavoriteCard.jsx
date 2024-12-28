import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { favoriteContext } from "../../../context/FavoriteProvider";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { IconButton } from "@mui/material";
import { basketContext } from "../../../context/BasketProvider";

function FavoriteCard({ title, img, id }) {
  const { favorites, handleAddFavorites } = useContext(favoriteContext);
  let isExist = favorites.find((book) => book.id == id);

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
          {isExist ? (
            <IconButton
              size="small"
              sx={{ color: "red" }}
              onClick={() => handleAddFavorites(id)}
            >
              <FavoriteIcon />
            </IconButton>
          ) : (
            <IconButton
              size="small"
              sx={{ color: "red" }}
              onClick={() => handleAddFavorites(id)}
            >
              <FavoriteBorderIcon />
            </IconButton>
          )}
        </div>
      </CardActions>
    </Card>
  );
}

export default FavoriteCard;
