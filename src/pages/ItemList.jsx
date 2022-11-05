import { Link } from "react-router-dom";

const ItemList = (props) => {
  const {
    name,
    id,
    description,
    image,
    start_point,
    address,
    price
  } = props;

  const Rating = () => {

    return (
      <div className="f919b8b3d5">
        <span className="cb5ebe3ffb">
          <div className="e4755bbd60" aria-expanded="false">
            <div data-testid="rating-stars" className="fbb11b26f5" role="img">
              
                <span
                  aria-hidden="true"
                  className="b6dc9a9e69 adc357e4f1 fe621d6382"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
                  </svg>
                </span>
                <span
                  aria-hidden="true"
                  className="b6dc9a9e69 adc357e4f1 fe621d6382"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
                  </svg>
                </span>
                <span
                  aria-hidden="true"
                  className="b6dc9a9e69 adc357e4f1 fe621d6382"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
                  </svg>
                </span>
                <span
                  aria-hidden="true"
                  className="b6dc9a9e69 adc357e4f1 fe621d6382"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
                  </svg>
                </span>
                <span
                  aria-hidden="true"
                  className="b6dc9a9e69 adc357e4f1 fe621d6382"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
                  </svg>
                </span>

            </div>
          </div>
        </span>
      </div>
    );
  };
  return (
    <div
      data-testid="property-card"
      className="a826ba81c4 fe821aea6c fa2f36ad22 afd256fc79 d08f526e0d ed11e24d01 ef9845d4b3 da89aeb942"
    >
      <div className="d20f4628d0">
        <div className="f9d4f2568d">
          <div className="c90a25d457">
            <Link>
              <img
                src={image}
                alt="La Siesta Hoi An Resort & Spa"
                width={200}
                height={200}
                className="b8b0793b0e"
                data-testid="image"
              />
            </Link>
          </div>
        </div>
        <div className="b978843432">
          <div className="a1b3f50dcd f7c6687c3d a1f3ecff04 f996d8c258">
            <div className="a1b3f50dcd b2fe1a41c3 a7c67ebfe5 d19ba76520 d14b211b4f">
              <div className="b1e6dd8416 aacd9d0b0a">
                <div className="a1b3f50dcd f7c6687c3d ef8295f3e6">
                  <div>
                    <div className="dd023375f5">
                      <h3 className="a4225678b2">
                        <Link
                          to={`/detail-hotel/${id}`}
                          className="e13098a59f"
                        >
                           <div
                            data-testid="title"
                            className="fcab3ed991 a23c043802"
                          >
                            {name}
                          </div>
                        </Link>
                      </h3>
                      {/* rating */}
                      <Rating />
                      <span className="cb5ebe3ffb">
                        <span
                          aria-expanded="false"
                          data-testid="preferred-badge"
                          className="b6dc9a9e69 c79b3cbed2 fe53650a13 e6c50852bd fe3639fe67"
                          aria-hidden="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 28.52 16"
                          >
                            <rect
                              width="28.52"
                              height={16}
                              fill="#febb02"
                              rx="1.22"
                              ry="1.22"
                            />
                            <path
                              fill="#fff"
                              d="M12.27 13.26H6.76V7.43l1.29-3.89c.65-2.27 2.6-1.62 1.95.32l-.65 2.27h4.22a1.19 1.19 0 0 1 1 1.94 1.36 1.36 0 0 1 0 1.95A1.41 1.41 0 0 1 13.9 12s0 1.26-1.63 1.26zm-9.44 0V7.42H6v5.84zm17.36-9.09a2 2 0 0 0-.1.91v1.49h-1.48a2.29 2.29 0 0 0-.92.09.93.93 0 0 0-.38.38 2.29 2.29 0 0 0-.09.92v.09a2.23 2.23 0 0 0 .09.91.87.87 0 0 0 .38.38 2.08 2.08 0 0 0 .92.1h1.48v1.48a2.08 2.08 0 0 0 .1.92.87.87 0 0 0 .38.38 2.23 2.23 0 0 0 .91.09h.1a2.23 2.23 0 0 0 .91-.09.87.87 0 0 0 .38-.38 2.08 2.08 0 0 0 .1-.92V9.44h1.48a2 2 0 0 0 .91-.1.78.78 0 0 0 .38-.34 2 2 0 0 0 .1-.91V8a2.08 2.08 0 0 0-.1-.92.82.82 0 0 0-.38-.38 2.21 2.21 0 0 0-.91-.09H23V5.08a2 2 0 0 0-.1-.91.78.78 0 0 0-.38-.38 2 2 0 0 0-.91-.1h-.1a2 2 0 0 0-.91.1.78.78 0 0 0-.41.38z"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="a1fbd102d9" data-testid="location">
                      <Link
                        to={`/detail-hotel/${id}`}
                        className="fc63351294 a168c6f285 e0e11a8307 a25b1d9e47"
                        >
                                                    <span>
                          <span
                            className="f4bd0794db b4273d69aa"
                            data-testid="address"
                          >
                            {address}
                          </span>
                          <span className="f4bd0794db b4273d69aa">
                            Xem trên bản đồ
                          </span>
                        </span>
                        </Link>
                    </div>
                  </div>
                  <div className="d8eab2cf7f f0d4d6a2f5 ff07fc41e3">
                    <span
                      data-testid="icon-with-text-icon"
                      className="b6dc9a9e69 e492382468 e25355d3ee"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z" />
                      </svg>
                    </span>
                    <span className="a51f4b5adb">
                      Chỗ nghỉ Du lịch Bền vững
                    </span>
                  </div>
                  <div className="d8eab2cf7f">
                   {description}
                  </div>
                </div>
              </div>
              <div className="a1b3f50dcd f7c6687c3d bdf0df2d01 f920833fe5">
                <div className="a1b3f50dcd f7c6687c3d ef8295f3e6">
                  <Link
                    to={`/detail-hotel/${id}`}
                    className="fc63351294 a168c6f285 aeccf0d865 a25b1d9e47">
                    <span>
                      <div
                        data-testid="review-score"
                        className="a1b3f50dcd cbb2d85c33 a1f3ecff04 db7f07f643 d19ba76520 d02f1578ba d17b3fe5e2"
                      >
                        <div
                          aria-label="Đạt điểm 9,3"
                          className="b5cd09854e d10a6220b4"
                        >
                          {start_point}
                        </div>
                        <div className="b1e6dd8416 aacd9d0b0a b48795b3df">
                          <div
                            aria-label="Tuyệt hảo"
                            className="b5cd09854e f0d4d6a2f5 e46e88563a"
                          >
                            Tuyệt hảo{/* */}{" "}
                          </div>
                          <div className="d8eab2cf7f c90c0a70d3 db63693c62">
                            279 đánh giá
                          </div>
                        </div>
                      </div>
                    </span>
                    </Link>
                </div>
                <div>
                  <span className="cb5ebe3ffb">
                    <div className="">
                      <b>{ price}</b>
                    </div>
                    <button
                      aria-expanded="false"
                      type="button"
                      className="fc63351294 a822bdf511 d4b6b7a9e7 f7db01295e f4605622ad"
                    >
                      <span className="e57ffa4eb5">Đặt Ngay</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ea6e492f88" />
    </div>
  );
};

export default ItemList;
