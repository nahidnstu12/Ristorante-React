import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function Home(props) {

    return(
      <div className="container">
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMsg}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leader} isLoading={props.leaderLoading} errMess={props.leaderErrMess}/>
            </div>
        </div>
      </div>
    );
}

export function RenderCard ({item,isLoading,errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else { 
    return(
        <FadeTransform in transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'}}>
    <Card>
        <CardImg src={baseUrl+item.image} alt={item.name} />
        <CardBody>
            <CardTitle><strong>{item.name}</strong></CardTitle>
            {item.designation ? <CardSubtitle><em>{item.designation}</em></CardSubtitle> : null}
            <CardText>{item.description}</CardText>
        </CardBody>
    </Card>
    </FadeTransform>
    )}
}

export default Home;  