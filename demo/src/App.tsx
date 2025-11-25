import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { Carousel } from '@mui/carousel';
import DemoSection from './components/DemoSection';
import { imageSlides, testimonials } from './data/sampleData';

function App() {
  // State for image carousel
  const [imageIndex, setImageIndex] = React.useState(0);

  // State for testimonials carousel
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);

  // State for auto-play carousel
  const [autoPlayIndex, setAutoPlayIndex] = React.useState(0);

  // Handlers for image carousel
  const handleImageNext = () => {
    setImageIndex((prev) => (prev + 1) % imageSlides.length);
  };

  const handleImagePrev = () => {
    setImageIndex((prev) => (prev - 1 + imageSlides.length) % imageSlides.length);
  };

  // Handlers for testimonials carousel
  const handleTestimonialNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTestimonialPrev = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            @mui/carousel Demo
          </Typography>
          <Chip label="Early Preview" color="secondary" size="small" />
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom>
            Material UI Carousel
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            A production-ready carousel component that seamlessly integrates with Material UI
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Note: Navigation buttons are not yet built into the component (PR-004 pending).
            This demo uses external controlled navigation.
          </Typography>
        </Container>
      </Box>

      {/* Image Carousel Demo */}
      <DemoSection
        title="Image Carousel"
        description="A beautiful image carousel with external navigation controls. Images are displayed with captions and smooth transitions."
      >
        <Box>
          <Carousel
            activeIndex={imageIndex}
            onChange={(newIndex) => setImageIndex(newIndex)}
            aria-label="Image carousel"
          >
            {imageSlides.map((slide) => (
              <Box key={slide.id}>
                <CardMedia
                  component="img"
                  image={slide.url}
                  alt={slide.alt}
                  sx={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover',
                    borderRadius: 1,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  {slide.caption}
                </Typography>
              </Box>
            ))}
          </Carousel>

          {/* External Navigation Controls */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <IconButton
              onClick={handleImagePrev}
              color="primary"
              size="large"
              aria-label="Previous slide"
              sx={{
                bgcolor: 'action.hover',
                '&:hover': { bgcolor: 'action.selected' },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <Box sx={{ textAlign: 'center', minWidth: 100 }}>
              <Typography variant="body2" color="text.secondary">
                Slide
              </Typography>
              <Typography variant="h6">
                {imageIndex + 1} / {imageSlides.length}
              </Typography>
            </Box>

            <IconButton
              onClick={handleImageNext}
              color="primary"
              size="large"
              aria-label="Next slide"
              sx={{
                bgcolor: 'action.hover',
                '&:hover': { bgcolor: 'action.selected' },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>

          {/* Slide Indicators */}
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
            {imageSlides.map((_, index) => (
              <Box
                key={index}
                onClick={() => setImageIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: index === imageIndex ? 'primary.main' : 'action.disabled',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: index === imageIndex ? 'primary.dark' : 'action.hover',
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </DemoSection>

      <Divider />

      {/* Testimonials Carousel Demo */}
      <DemoSection
        title="Testimonials Carousel"
        description="Display customer testimonials with elegant card-based design and smooth navigation."
      >
        <Box>
          <Carousel
            activeIndex={testimonialIndex}
            onChange={(newIndex) => setTestimonialIndex(newIndex)}
            aria-label="Testimonials carousel"
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                elevation={0}
                sx={{
                  minHeight: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  p: 4,
                  bgcolor: 'background.default',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="blockquote"
                    sx={{
                      fontStyle: 'italic',
                      mb: 3,
                      color: 'text.primary',
                      '&::before': { content: '"""', color: 'primary.main', fontSize: '2rem' },
                      '&::after': { content: '"""', color: 'primary.main', fontSize: '2rem' },
                    }}
                  >
                    {testimonial.quote}
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.company}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Carousel>

          {/* External Navigation Controls */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Button
              onClick={handleTestimonialPrev}
              variant="outlined"
              startIcon={<ChevronLeftIcon />}
              size="large"
            >
              Previous
            </Button>

            <Typography variant="body1" color="text.secondary">
              {testimonialIndex + 1} of {testimonials.length}
            </Typography>

            <Button
              onClick={handleTestimonialNext}
              variant="outlined"
              endIcon={<ChevronRightIcon />}
              size="large"
            >
              Next
            </Button>
          </Stack>
        </Box>
      </DemoSection>

      <Divider />

      {/* Auto-Play Carousel Demo */}
      <DemoSection
        title="Auto-Play Carousel"
        description="Automatically advancing carousel with a 3-second interval. Perfect for hero sections and promotional content."
      >
        <Box>
          <Carousel
            activeIndex={autoPlayIndex}
            onChange={(newIndex) => setAutoPlayIndex(newIndex)}
            autoPlay
            autoPlayInterval={3000}
            enableLoop
            aria-label="Auto-play carousel"
          >
            {imageSlides.slice(0, 3).map((slide) => (
              <Box
                key={slide.id}
                sx={{
                  position: 'relative',
                  height: 400,
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  image={slide.url}
                  alt={slide.alt}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    p: 3,
                  }}
                >
                  <Typography variant="h4">{slide.caption}</Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Slide {slide.id} of {imageSlides.slice(0, 3).length}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Carousel>

          <Typography
            variant="caption"
            display="block"
            textAlign="center"
            sx={{ mt: 2, color: 'text.secondary' }}
          >
            This carousel automatically advances every 3 seconds and loops continuously
          </Typography>
        </Box>
      </DemoSection>

      {/* Footer */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 6, mt: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" gutterBottom>
            @mui/carousel
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            A native, production-ready Carousel component for Material UI
          </Typography>
          <Typography variant="caption" display="block" sx={{ mt: 2, opacity: 0.6 }}>
            Part of the Material UI ecosystem
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
