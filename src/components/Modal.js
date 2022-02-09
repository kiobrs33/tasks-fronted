import React from 'react';

export const Modal = ({ funtion, title, description }) => {
    return (
        <div className={`modal-container`}>
            <div className='modal'>
                <h4 className='modal__title'>{title}</h4>
                <p className='modal__content'>{description}</p>
                <div className='modal__buttons'>
                    <button
                        className='modal__buttons__cancelar'
                        onClick={() => funtion(false)}
                    >
                        Cancelar
                    </button>
                    <button
                        className='modal__buttons__aceptar'
                        onClick={() => funtion(true)}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};
