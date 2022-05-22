import {Header} from "./components/header";
import {Index} from "./pages/Index";
import {Footer} from "./components/footer";
import {Loader} from "./components/loader";

function App() {
    return (
        <>
            {/*<Loader/>*/}
            <Header/>
                <Index/>
            <Footer/>
        </>
    );
}

export default App;
