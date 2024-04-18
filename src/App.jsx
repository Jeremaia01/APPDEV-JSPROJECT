import Heading from "./Heading";
import Footer from "./Footer";
import Body from "./Body";
export default function App(){ 
    return(
        <>
        <Heading />
        <Body name="Jeremaia" food="Fried Chicken" isHealthy={false} age={22}/>
        <br />
        <Body name="Demi" food="Pasta" isHealthy={false} age={23}/>
        <br />
        <Body name="Nicole" food="Chicken" isHealthy={false} age={21}/>
        <br />
        <Body name="Clyde" food="Creme Brulee" isHealthy={false} age={20}/>
        <br />  
        <Body />
        <Footer />
        </>
    );
}