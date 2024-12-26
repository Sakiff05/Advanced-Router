import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function BookDetailsCard({ book, navigate }) {
  return (
    <Card sx={{ maxWidth: 500 }} className="w-full mt-32 mb-16">
      {book.image ? (
        <CardMedia sx={{ height: 280 }} image={book.image} title={book.title} />
      ) : (
        "NO IMAGE AVAILABLE"
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "1.25rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa
          placeat quibusdam inventore quo molestias! Omnis ab eos quis deleniti?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "1.25rem",
            paddingTop: "1rem",
          }}
        >
          Author:{book.author}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "1.25rem",
            paddingTop: "1rem",
          }}
        >
          Pages:{book.pagesCount}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "1.25rem",
            paddingTop: "1rem",
          }}
        >
          Published in:{book.publishedYear}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "1.25rem",
            paddingTop: "1rem",
          }}
        >
          Genre:{book.genre}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "1.25rem",
            paddingTop: "1rem",
          }}
        >
          Language:{book.language}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "1.25rem",
            paddingTop: "1rem",
          }}
        >
          Price:${book.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          <p className="text-xl">Go Back</p>
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookDetailsCard;
