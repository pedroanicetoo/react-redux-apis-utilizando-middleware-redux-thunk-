import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import  './home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingBasket, faCheck} from '@fortawesome/free-solid-svg-icons';
const Home = (props) => (

    <div className="page-container">
      
      <div className="new-list-container">
        <Card className="card">
          <CardActionArea className="card-action-area">
            <CardContent className="card-content">
              <div>
                <p className="title">Adicionar Novas Listas</p>
              </div>
            </CardContent>
          </CardActionArea>    
        </Card>  
      </div>

      <div className="list-container">
        <Card className="card">
          <CardActionArea className="card-action-area">
            <CardContent className="card-content">
              <div>
                <p className="title">Mês</p>
                <div className="list-card-body">
                  <div className="list-card-itens">
                  <FontAwesomeIcon icon={faShoppingBasket} size="sm" />
                    <p>1 Item(s) Restante</p>
                  </div>
                  <div className="list-card-itens">
                  <FontAwesomeIcon icon={faCheck} size="sm" />
                    <p>2 Item(s) Comprados</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
          <Divider />
          <CardActions className="card-footer">
            <p>16/08/1995</p>
            <p>100.00</p>  
          </CardActions>    
        </Card>  
      </div> 

    </div>
);

export default Home;