import NavBar from '../Components/NavBar/index'
import BannerScreen from '../Components/Banner/FirstBanner/index'
import RowPost from '../Components/RowPost/index'
import SecondBanner from '../Components/Banner/secondBanner'
import { GENRES } from '../constants/endpoints'
import Footer from '../Components/Footer'


export default function HomeScreen() {
    return (
        <>
            <NavBar />
            <BannerScreen />
            <RowPost title={"New & Trading"} generes={GENRES.COMEDY}/>
            <SecondBanner />
            <RowPost bigPost={true} title={"Stream Every Episode"} generes={GENRES.DRAMA} />
            {/* big here  */}
            <RowPost bigPost={false} title={"Most Popular"} generes={GENRES.DOCUMENTARIES} />
            <RowPost bigPost={false} title={"BBC News"} generes={GENRES.HORROR}/>
            <RowPost bigPost={false} title={"Documentaries"} generes={GENRES.ENTERTAINMENT}/>
            <RowPost bigPost={false} title={"Drama"} generes={GENRES.DRAMA}/>
            <RowPost bigPost={false} title={"Comedy"} generes={GENRES.COMEDY}/>
            <RowPost bigPost={false} title={"Entertainment"} generes={GENRES.DOCUMENTARIES}/>
            <RowPost bigPost={false} title={"Here Comes the Summer"} generes={GENRES.HORROR}/>
            <RowPost bigPost={false} title={"South Asian Voices"} generes={GENRES.ENTERTAINMENT}/>
            <Footer/>
        </>
    )
}
