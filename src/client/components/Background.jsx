import MeteroBottomLeft from '../assets/meteors/meteor_bottom_left.svg';
import MeteroBottomRight from '../assets/meteors/meteor_bottom_right.svg';
import MeteroTopLeft from '../assets/meteors/meteor_top_left.svg';
import MeteroTopRight from '../assets/meteors/meteor_top_right.svg';
import '../style/Background.scss';

const Background = () => {
  return (
    <div id="background">
      <h1 className="site-title">Ad Astra</h1>
      <img className="BL" src={MeteroBottomLeft} alt="Meteor Bottom Left" />
      <img className="BR" src={MeteroBottomRight} alt="Meteor Bottom Right" />
      <img className="TL" src={MeteroTopLeft} alt="Meteor Top Left" />
      <img className="TR" src={MeteroTopRight} alt="Meteor Top Right" />
    </div>
  );
};

export default Background;
