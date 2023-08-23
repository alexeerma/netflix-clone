import { FC } from 'react'
import { Main, Row } from '../components';
import requests from '../Requests';

const Home: FC = () => {
  return (
    <div>
        <Main />
        <Row  title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Row  title='Popular' fetchURL={requests.requestPopular}/>
        <Row  title='Trending' fetchURL={requests.requestTrending}/>
        <Row  title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row  title='Horror' fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home