import './Banner.css';

const Banner = ({ banner }) => {
    return (
        <div className="banner">
            <img src={banner} alt="Banner" />
        </div>
    );
}

export default Banner;