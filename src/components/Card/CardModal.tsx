import { Modal, Button, Row, Col } from 'react-bootstrap'
import './CardModal.css'
import { Hotel } from '../../interfaces';

interface Props {
    /** Описание товара */
    order: Hotel;
    /** Отображать модальное окно. */
    show: boolean;
    /** Событие закрытия модального окна. */
    onHide: () => void;
}

/** Компонент модального окна с подробностями карточки. */
export const CardModal = (props: Props) => {
    return (
        <Modal show={props.show} onHide={props.onHide} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>{props.order.name ? props.order.name : 'Описание отсутствует'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <img alt={props.order.name} src={props.order.imgSrc ? props.order.imgSrc : '/logo192.png'} className='card-img' />
                    </Col>
                    <Col>
                        <p>Описание товара:</p>
                        <p>{props.order.description ? props.order.description : 'отсутствует'}</p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};
