import  Header  from "../Header"
import Footer from "../Footer"
import { useRouter } from "next/router";

const Index = ({children}) => {
    const router = useRouter()
    const url = router.asPath   

    return (
        <>
            <Header />
            {children}
            {url !== "/" && <Footer /> }
        </>
    );
}

export default Index;
