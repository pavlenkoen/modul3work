import { Nav } from 'react-bootstrap'


export const LeftMenu = () => {
    return (
        <>
            <h5>Направления</h5>
            <Nav className="flex-column">
                <Nav.Link href="/countries#Egypt">Египет</Nav.Link>
                <Nav.Link href="/countries#Turkey">Турция</Nav.Link>
                <Nav.Link href="/countries#Thailand">Тайланд</Nav.Link>
                <Nav.Link href="/countries#UAE">ОАЭ</Nav.Link>
            </Nav>
        </>
    );
};
