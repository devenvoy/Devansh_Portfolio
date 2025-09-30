// pages/achievements.jsx
'use client';
import React, { useState , useMemo } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Cancel } from "../components/icons/Icons"; // your custom icon
import { achievementsData } from "../data/achievements_data";

const Achievements = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const getColumnCount = () => {
    if (isMd) return 3;
    if (isSm) return 2;
    return 1;
  };

  const handleOpen = (imgSrc) => {
    setSelectedImage(imgSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  // Distribute images into columns for masonry effect
  const createColumns = (images, columns) => {
    const cols = Array.from({ length: columns }, () => []);
    images.forEach((img, i) => {
      cols[i % columns].push(img);
    });
    return cols;
  };

  return (
    <Box
      sx={{
        pt: { xs: 0, sm: 8 },
        minHeight: { xs: '100vh', sm: '100vh', md: '100vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
      }}
    >

      <Box sx={{ px: { xs: 2, sm: 4 }, py: 4, maxWidth: 1200, mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Achievements
        </Typography>

        {achievementsData.map((item, index) => {
          const columns = getColumnCount();
          const columnsContent = useMemo(() => createColumns(item.images, getColumnCount()), [item.images, isSm, isMd]);

          return (
            <Box key={index} sx={{ mb: 6 }}>
              {/* Title */}
              <Typography variant="h5" fontWeight="bold" mb={2} align="center">
                {item.title}
              </Typography>

              {/* Masonry Grid */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                {columnsContent.map((colImages, colIndex) => (
                  <Box
                    key={colIndex}
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    {colImages.map((imgSrc, imgIdx) => (
                      <Box
                        key={imgIdx}
                        onClick={() => handleOpen(imgSrc)}
                        sx={{
                          borderRadius: 2,
                          overflow: "hidden",
                          cursor: "pointer",
                          boxShadow: theme.shadows[3],
                          transition: "transform 0.25s ease, box-shadow 0.25s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: theme.shadows[8],
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={imgSrc}
                          alt={`Achievement ${imgIdx + 1}`}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            borderRadius: 8,
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                ))}
              </Box>

              {/* Description */}
              {item.description && (
                <Typography
                  variant="body1"
                  color="text.primary"
                  align="center"
                  maxWidth={800}
                  mx="auto"
                  mb={1}
                >
                  {item.description}
                </Typography>
              )}

              {/* Bullet Points */}
              {item.details?.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0.5,
                    mb: 1,
                  }}
                >
                  {item.details.map((point, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      • {point}
                    </Typography>
                  ))}
                </Box>
              )}

              {/* Date and Location */}
              {(item.date || item.location) && (
                <Box sx={{ textAlign: "center", color: "text.secondary" }}>
                  {item.date && (
                    <Typography variant="caption" display="block">
                      📅 {item.date}
                    </Typography>
                  )}
                  {item.location && (
                    <Typography variant="caption" display="block">
                      📍 {item.location}
                    </Typography>
                  )}
                </Box>
              )}
            </Box>
          );
        })}

        {/* Dialog for zoomed image */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle sx={{ position: "relative", p: 0 }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: theme.palette.text.secondary,
              }}
            >
              <Cancel />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ p: 0 }}>
            <Box
              component="img"
              src={selectedImage}
              alt="Selected Achievement"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Achievements;

