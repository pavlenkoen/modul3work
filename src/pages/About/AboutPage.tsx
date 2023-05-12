import { Accordion } from 'react-bootstrap'


export const AboutPage = () => {
    return (
        <>
            <h5>О нас</h5>
            <div>Туры стоят немалых денег, а ваше время – и того больше! Поэтому мы создали сервис, благодаря которому вы можете сэкономить свои ценные ресурсы. Закажите готовый тур онлайн.

Все необходимые детали путешествия мы сообщим вам по телефону, а документы пришлем на email. С нами вы всегда будете уверены, что отдых пройдет на ура!</div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Проверенные туроператоры</Accordion.Header>
                    <Accordion.Body>
                    Мы предлагаем туры только от проверенных партнеров.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>100% гарантия отдыха</Accordion.Header>
                    <Accordion.Body>
                    Чтобы вы чувствовали себя спокойно и уверенно на отдыхе — предлагаем уникальные страховые программы
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};
