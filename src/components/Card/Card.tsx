import './Card.css'
import { Card as ButCard, Button } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { useState } from 'react'



interface Props {
    order: any;
}


export const Card = ({ order }: Props) => {
              const [confirm, setConfirm] = useState<boolean>(false);
   
    return (
        <>
            
           
        <ButCard key={order.id} border="info" style={{ minWidth: '1000px', maxHeight: '600px'}}> 
            
            <ButCard.Body style={{display:'flex', flexDirection:'row', padding:'20px'}}>
            <ButCard.Img variant='top' src={order.imgSrc ? order.imgSrc : '/logo192.png'} style={{ width: "30%", margin: 'left', height:'20%', left: '30px'}}  />
            {order.rusname ?  
                <ButCard.Title style={{paddingLeft:'30px', paddingTop:'30px'}}>
                    {order.rusname ? order.rusname : 'Страна'}
                </ButCard.Title> : 
                       
            <ButCard.Title style={{paddingLeft:'30px', paddingTop:'30px'}}>
                {order.name ? order.name : 'Страна'}
            </ButCard.Title>  
                             
                }
           
                <ButCard.Text style={{paddingLeft:'30px', paddingTop:'30px'}}>
                    {order.description ? order.description : 'Описание отсутствует'}
                </ButCard.Text>
               
                </ButCard.Body>
                <div className='buttons'>
                    { order.price ? <Button size='sm' variant={confirm ? 'light' : 'primary'} onClick={() => setConfirm((prev) => !prev)}>{confirm ? 'Отменить' : 'Забронировать отель'}</Button>
                   :
                    <Nav.Link className="flex-column"  style={{paddingLeft:'30px', paddingBottom:'20px', fontSize:'x-large', color:'blue'}} href={"/countries#"+`${order.name}`}>Подобрать отель</Nav.Link>} 
                     {order.price ?  <p style={{justifyContent:'right', display:'flex', paddingRight:'40px', marginLeft:'auto', color:'blue'}}>Цена от: {order.price}</p> : ''}
                </div>
               
            
        </ButCard>
    </>
    );
};
