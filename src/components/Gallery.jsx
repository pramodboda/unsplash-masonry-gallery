import {useState,forwardRef} from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context/GalleryContext/GalleryContext.js";



import ErrorImg from "./ErrorImg.jsx";

import Loader from "./Loader.jsx";
import WarningImg from "./WarningImg.jsx";

import LazyLoad from "react-lazyload";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Alert from "@mui/material/Alert";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';

import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Typography from "@mui/material/Typography";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



// If you clone or download this project from git repo, Then you need to create ".env" file in your local project folder.
// Then you need to set VITE_API_KEY="YOUR UNSPLASH ACCESS Key"
// Then this below url work properly.
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&per_page=30`;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Snacks",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    title: "Tower",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
    title: "Tree",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
    title: "Camping Car",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  // const [setNode, entry] = useIntersectionObserver({ threshold: 0.5 });
  // const isVisible = entry?.isIntersecting;

  const { searchTerm } = useGlobalContext();
  // Access the client
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data;
    },
  });


  
  // console.log(response);

  if (response.isLoading) {
    return (
      <Stack spacing={2}>
        {/* <h4>Loading...</h4> */}
        <Loader />
      </Stack>
    );
  }
  if (response.isError) {
    return (
      <Container maxWidth="sm">
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Box>
            <ErrorImg className="error-img" />
          </Box>
          <Alert variant="filled" severity="error">
            There was an error...
          </Alert>
        </Stack>
      </Container>
    );
  }

  const results = response?.data?.results;

  if (response.length < 1) {
    return (
      <Container maxWidth="sm">
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Box>
            <WarningImg className="warning-img" />
          </Box>
          <Alert variant="filled" severity="warning">
            No results found...
          </Alert>
        </Stack>
      </Container>
    );
  }



  const handleClickOpen = (ele) => {
    // console.log(ele.target);
    console.log(ele.target.src);
    console.log(ele.target.alt);
    setOpen(true);
    setSelectedImg({"url":ele.target.src, "alt":ele.target.alt});
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };
  return (
    <Box className="image-container">
      <Box sx={{ minHeight: 829 }}>
        <Masonry columns={{ xs: 2, md: 3 }} spacing={2}>
          {results?.map((item, index) => (
            <LazyLoad
              once={item.once}
              // throttle={50}
              debounce={600}
              height={100}
              key={index}
            >
              <img
              onClick={handleClickOpen}
                className="img-item"
                src={item?.urls?.regular}
                key={index}
                alt={item.alt_description}
                style={{
                  opacity: "1",
                  width: "100%",
                  transition: "all 1s ease-in",
                }}
              />
            </LazyLoad>
          ))}
        </Masonry>
      </Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {selectedImg&& (<img src={selectedImg.url} alt={selectedImg.alt} style={{ width: '100%' }} />)}

      </Dialog>
    </Box>
  );
}

export default Gallery;
