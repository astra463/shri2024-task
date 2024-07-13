import React from 'react';

const ImageComponent = ({ src, alt, formats, sizes, width, height }) => {
    const getSrcSet = () => {
        if (!formats) return src;

        return formats.map(format => `${format.src} ${format.size}w`).join(', ');
    };

    return (
        <img
            src={src}
            alt={alt}
            srcSet={getSrcSet()}
            sizes={sizes}
            width={width}
            height={height}
            loading="lazy"
        />
    );
};

export default ImageComponent;