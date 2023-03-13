import videoHomePage from '../../assets/video-homepage.mp4';
import Button from 'react-bootstrap/Button';

const HomePage = (props) => {
  return (
    <div className='homepage-container'>
      <video autoPlay muted loop>
        <source src={videoHomePage} type='video/mp4' />
      </video>
      <div className='homepage-content'>
        <h1 className='homepage-title'>There's a better way to ask</h1>
        <p className='homepage-subtitle'>
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </p>

        <Button variant='dark'>Get started - it's free</Button>
      </div>
    </div>
  );
};
export default HomePage;
