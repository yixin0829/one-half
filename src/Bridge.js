import { Button, Container, Row, Col } from "react-bootstrap";
import './Bridge.css';

function checkTile(tileID) {
  // alert("you clicked me! " + tileID);
  // game logic and fire modal accordingly
}

const Tile = (props) => {
  // console.log('returning Tiles ' + props.tileID)
  return (
      <Button onClick={() => {checkTile(props.tileID)}} className='normal-tile'></Button>
  );
};

const Bridge = props => {
  return (
      <Container>
        <Row>
          <Tile/>
        </Row>
        <Row>
          <Tile/>
        </Row>
      </Container>
  )

};

export default Bridge;