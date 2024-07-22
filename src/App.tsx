
import { Card } from "./Components/Card/Card";
import myImg from "./images/PictureCard.png"

function App() {
  return (
    <Card
      src={myImg}
      title='Headline'
      description="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
    />
  );
}

export default App;


