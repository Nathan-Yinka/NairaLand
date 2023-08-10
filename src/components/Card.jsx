import image from "../assest/testimage.png";
import message from "..//assest/card/Frame 1526.png";
import contact from "..//assest/card/contact.svg";

const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="card-img-con">
      <img
        src={post.urlToImage}
        className="card-img-top img-fluid"
        alt="..."
      />
      </div>
      <div className="card-body">
        <p className="card-title">{post.author}</p>
        <p className="card-text m-0 h-50">
            {post.title}
        </p>
        <div className="d-flex align-items-center justify-content-between mt-2 card-tag-con">
          <div className="d-flex align-items-center" style={{ width: "45%" }}>
            <img src={message} alt="" className="pe-2" />
            <p className="m-0 card-tag">100 Comments</p>
          </div>
          <div className="d-flex align-items-center" style={{ width: "45%" }}>
            <img src={contact} alt="" className="pe-2" />
            <p className="m-0 card-tag">100 Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
