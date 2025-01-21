import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // Importing the link icon

export const ProjectCard = ({ title, description, imgUrl, link, tech }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded((prev) => !prev);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: '100%',
          marginBottom: 2,
          overflow: 'hidden',
          borderRadius: 4,
          backgroundColor: '#1e1e1e',
          color: '#f5f5f5',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.6)',
          },
          cursor: 'default',
          position: 'relative', // To position the icon inside the card
        }}
      >
        <CardActionArea
          className='!cursor-default'
        >
          <Box className="!h-[240px] overflow-hidden " style={{
             backgroundImage: `url(${imgUrl})`,
             backgroundSize: 'cover'
          }}>
            {/* <CardMedia
              component="img"
              height="416"
              image={imgUrl}
              alt={title}
              sx={{
                objectFit: 'contain !important',
                borderRadius: '4px 4px 0 0',
                position: 'relative', // Make sure the link icon is positioned relative to this
              }}
            /> */}
          </Box>

          {/* Hover link icon */}
          {link &&
            <IconButton
              title="Link"
              component={Link}
              to={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                color: '#90caf9',
                opacity: 1,  // Initially hidden
                transition: 'opacity 0.3s ease',
                '&:hover': {
                  opacity: 1,  // Show icon on hover
                },
              }}
            >
              <OpenInNewIcon />
            </IconButton>
          }
          <CardContent sx={{ textAlign: 'center', padding: 2 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: 'bold',
                color: '#90caf9',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#64b5f6' },
                textAlign: 'left',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#bdbdbd',
                textAlign: 'justify',
              }}
            >
              {isDescriptionExpanded ? description : `${description.substring(0, 100)}...`}
              <button
                onClick={openModal}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#90caf9',
                  cursor: 'pointer',
                  fontSize: 'inherit',
                }}
              >
                {isDescriptionExpanded ? 'Read Less' : 'Read More'}
              </button>
            </Typography>
            <Stack direction="row" spacing={1} mt={2} justifyContent="left">
              {tech.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  sx={{
                    backgroundColor: '#2e2e2e',
                    color: '#90caf9',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                  }}
                />
              ))}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Modal Dialog */}
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="project-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="project-dialog-title">{title}</DialogTitle>
        <DialogContent dividers>
          <CardMedia
            component="img"
            image={imgUrl}
            alt={title}
            sx={{
              maxHeight: '300px',
              objectFit: 'contain',
              marginBottom: 2,
              borderRadius: 2,
            }}
          />
          <Typography variant="body1" sx={{ color: '#333', marginBottom: 2 }}>
            {description}
          </Typography>
          <Stack direction="row" spacing={1} mb={2}>
            {tech.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                sx={{
                  backgroundColor: '#2e2e2e',
                  color: '#90caf9',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                }}
              />
            ))}
          </Stack>
          {link && (
            <Button
              variant="contained"
              color="primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: 'none' }}
            >
              Visit Project
            </Button>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} sx={{ color: '#f50057' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};



// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl, link }) => {
//   return (
//     <>
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           {link && <h6><a href={link} target="_blank">{title}</a></h6> }
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//     </>
//   )
// }
