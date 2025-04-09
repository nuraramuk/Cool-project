import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from '@mui/icons-material';
import {
    Container,
    Typography,
    Button,
    Box,
    CardMedia,
    Grid,
    Card,
    CardContent,
    Chip,
    Divider,
    IconButton
} from '@mui/material';
import {
    ArrowBack as ArrowBackIcon,
    ShoppingCart,
    FavoriteBorder,
    Share
} from '@mui/icons-material';
import { useEffect } from 'react';

const ProductDetailPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { state } = useLocation();
    const navigate = useNavigate();
    const product = state?.product;

    // Filter out the current product from related products
    const filteredRelatedProducts = product?.relatedProducts
        ? product.relatedProducts.filter(related => related.id !== product.id)
        : [];

    const getImagePath = (imgPath) => {
        // if (imgPath.startsWith('http')) return imgPath;
        // return process.env.PUBLIC_URL + '/' + imgPath;
        return imgPath;
    };

    const handleAddToCart = () => {
        navigate('/cart');
    };

    const handleBuyNow = () => {
        navigate('/checkout');
    };

    const handleProductClick = (clickedProduct) => {
        window.scrollTo(0, 0);

        // Filter out the clicked product from the related products
        const newRelatedProducts = product.relatedProducts
            ? product.relatedProducts.filter(related => related.id !== clickedProduct.id)
            : [];

        navigate(`/product/${clickedProduct.id}`, {
            state: {
                product: clickedProduct,
                relatedProducts: newRelatedProducts
            }
        });
    };

    const renderSpecifications = (specs) => {
        if (!specs) return null;

        return (
            <>
                {Object.entries(specs).map(([key, value]) => (
                    <Typography key={key} variant="body1" sx={{
                        color: '#555',
                        mb: 1,
                        lineHeight: 1,
                        fontSize: '14px',
                    }}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </Typography>
                ))}
            </>
        );
    };

    if (!product) {
        return (
            <Container sx={{ py: 4, textAlign: 'center' }}>
                <Typography variant="h4">Product not found</Typography>
                <Button onClick={() => navigate('/')} sx={{ mt: 2 }}>
                    Back to Home
                </Button>
            </Container>
        );
    }

    const renderProductSlider = (products, title) => (
        <Box sx={{ mt: 8 }}>
            <Typography variant="h5" sx={{
                
                fontWeight: 'bold',
                mb: 3,
                color: '#333',
                fontSize: '1.5rem',
                position: 'relative',
                '&:after': {
                    content: '""',
                    display: 'block',
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'red',
                    marginTop: '10px'
                }
            }}>
                {title}
            </Typography>
            <Box sx={{
                display: 'flex',
                overflowX: 'auto',
                gap: 3,
                py: 2,
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' }
            }}>
                {products.map((item) => (
                    <Card
                        key={item.id}
                        sx={{
                            minWidth: 220,
                            flexShrink: 0,
                            cursor: 'pointer',
                            border: '1px solid #f0f0f0',
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                                borderColor: '#FF6B00'
                            }
                        }}
                        onClick={() => handleProductClick(item)}
                    >
                        <Box sx={{
                            height: 180,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#D4C9BE',
                            p: 2
                        }}>
                            <CardMedia
                                component="img"
                                image={getImagePath(item.src)}
                                alt={item.name}
                                sx={{
                                    height: '100%',
                                    width: 'auto',
                                    maxWidth: '100%',
                                    objectFit: 'contain'
                                }}
                                onError={(e) => {
                                    e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
                                }}
                            />
                        </Box>
                        <CardContent sx={{ p: 2 }}>
                            <Typography variant="subtitle1" sx={{
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                mb: 1,
                                color: '#333'
                            }}>
                                {item.name}
                            </Typography>
                            {item.price && (
                                <Typography variant="h6" sx={{
                                    fontWeight: 'bold',
                                    color: '#FF6B00'
                                }}>
                                    ₹{item.price}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );

    return (
        <Container sx={{
            py: 4,
            maxWidth: 'lg',
            backgroundColor: '#fff',
            fontFamily: 'Roboto',
        }}>
            <Button
                onClick={() => navigate(-1)}
                sx={{
                    mb: 3,
                    color: '#FF6B00',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    fontFamily: 'Roboto',
                    fontSize: '1rem',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 107, 0, 0.1)'
                    }
                }}
                startIcon={<ArrowBackIcon />}
            >
                Back to Products
            </Button>

            <Grid container spacing={3}>
                {/* Product Image */}
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        width: '100',
                        height: '100',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '19px',
                        p: 3,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        border: '1px solid #eee'
                    }}>
                        <CardMedia
                            component="img"
                            image={getImagePath(product.src)}
                            alt={product.name}
                            sx={{
                                maxHeight: '400px',
                                width: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain'
                            }}
                            onError={(e) => {
                                e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
                            }}
                        />
                    </Box>
                </Grid>

                {/* Product Details */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 2 }}>
                        {product.tag && (
                            <Chip
                                label={product.tag}
                                size="small"
                                sx={{
                                    backgroundColor: 'green',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontFamily: 'Roboto',
                                    mb: 1
                                }}
                            />
                        )}
                        <Typography variant="h4" sx={{
                            fontWeight: 'bold',
                            color: '#F97300',
                            fontSize: { xs: '1.5rem', md: '1.8rem' },
                            fontFamily: 'Roboto',
                            mb: 1
                        }}>
                            {product.name}
                        </Typography>

                        {product.price && (
                            <Typography variant="h4" sx={{
                                fontWeight: 'bold',
                                color: '#FF6B00',
                                mb: 3
                            }}>
                                ₹{product.price}
                            </Typography>
                        )}
                    </Box>

                    <Divider sx={{ my: 1 }} />

                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{
                            fontWeight: 'bold',
                            mb: 1,
                            color: '#333',
                            
                        }}>
                        </Typography>
                        <Typography variant="body1" sx={{
                            color: '#555',
                            mb: 2,
                            lineHeight: 1.6,
                            
                        }}>

                            {product.description}

                        </Typography>
                        <Typography variant="h6" sx={{
                            fontWeight: 'bold',
                            mb: 1,
                            color: '#F97300',
                            marginTop: '20px',
                            fontFamily: 'Roboto',
                            
                        }}>
                            Specifications
                        </Typography>
                        <Box sx={{ mb: 3 }}>
                        <Typography variant="body1" sx={{
                            color: 'blue',
                            mb: 1,
                            lineHeight: 1,
                            fontSize: '14px',
                        }}>
                            {renderSpecifications(product.specification)}
                        </Typography>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap',
                        mb: 2
                    }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleBuyNow}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontWeight: 'bold',
                                backgroundColor: '#FF6B00',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#E05D00'
                                }
                            }}
                        >
                            Buy Now
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={handleAddToCart}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontWeight: 'bold',
                                borderColor: '#FF6B00',
                                color: '#FF6B00',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 107, 0, 0.1)',
                                    borderColor: '#E05D00'
                                }
                            }}
                        >
                            Add to Cart
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton sx={{
                            color: '#666',
                            '&:hover': {
                                color: '#FF6B00',
                                backgroundColor: 'rgba(255, 107, 0, 0.1)'
                            }
                        }}>
                            <FavoriteBorder />
                        </IconButton>
                        <IconButton sx={{
                            color: '#666',
                            '&:hover': {
                                color: '#FF6B00',
                                backgroundColor: 'rgba(255, 107, 0, 0.1)'
                            }
                        }}>
                            <Share />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: '#666',
                                '&:hover': {
                                    color: '#FF6B00',
                                    backgroundColor: 'rgba(255, 107, 0, 0.1)'
                                }
                            }}
                            component="a"
                            href="https://youtu.be/_DzU8cwphwM?si=_PEMMzZ57b_4069F" // Replace with the actual YouTube video URL
                            target="_blank" // Opens the video in a new tab
                        >
                            <Link />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Related Products Section */}
            {filteredRelatedProducts.length > 0 && (
                renderProductSlider(filteredRelatedProducts, "You May Also Like")
            )}
        </Container>
    );
};

export default ProductDetailPage;