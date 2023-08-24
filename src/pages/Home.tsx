import { FC } from 'react'
import { Main, Row } from '../components';
import requests from '../Requests';

const Home: FC = () => {
  return (
    <div>
        <Main />
        <Row  rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Row  rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
        <Row  rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
        <Row  rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row  rowID='5' title='Horror' fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home