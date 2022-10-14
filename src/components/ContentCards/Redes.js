import React from "react";
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import { uno, dos, tres } from '../../config';

const Redes = ({ data }) => {
    const { imagenes } = data;
    return (
        <Carousel style={{ margin: "5.5rem 7.5rem 4.5rem" }}>
            {imagenes.map((image, i) => {
                return (
                    <Carousel.Item>
                        <img
                            key={i}
                            className="d-block w-100"
                            src={`${image.nombre}`}
                            alt={image.alt}
                            style={{
                                maxHeight: '360px',
                                margin: '0.5rem',
                                borderRadius: '10%',
                                width: 'auto',
                            }}
                        />
                        <Carousel.Caption style={{ position:"initial", color:"black"}}>
                            <h3>{image.alt}</h3>
                            <p>
                               {`Imagen del caso No: ${i +1}`}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );

}

Redes.propTypes = {
    data: PropTypes.shape({
        redes: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default Redes;


