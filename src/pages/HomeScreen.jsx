import HeaderScreen from "../components/header/HeaderScreen";
import HomeRecommand from "../components/homeRecommand/HomeRecommand";
import SearchMain from "../components/searchMain/SearchMain";

const HomeScreen = () => {

  return (
    <>
      <HeaderScreen />
      <SearchMain/>

      <div id="bodyconstraint" className="">
        <div id="bodyconstraint-inner">
          <div className="lp_flexible_layout_content_wrapper">
           
            <div id="basiclayout" role="main" className="basiclayout_pe">

              <div
                className=" bui-spacer--largest popular-destinations-carousel-block  "
              >
                <div className=" bui-title  bui-title--headline_3  bui-spacer--large ">
                  <span className="bui-title__text">Khám phá Việt Nam</span>
                  <span className="bui-title__subtitle">
                    Các điểm đến phổ biến này có nhiều điều chờ đón bạn
                  </span>
                </div>
                <div
                  role="region"
                  className=" bui-carousel  bui-carousel--small  bui-u-bleed@small "
                  data-bui-component="Carousel"
                >
                  <ul
                    className="bui-carousel__inner"
                    data-bui-ref="carousel-container"
                  >
                    <li
                      className="bui-carousel__item"
                   
                    >
                      <a
                        className="bui-card bui-card--media bui-card--transparent popular-destinations-carousel-link"
                       href="#"
                      >
                        <div className="bui-card__image-container">
                          <img
                            className="bui-card__image"
                            src="https://cf.bstatic.com/xdata/images/city/square250/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
                            alt="Đà Lạt"
                          />
                        </div>
                        <div className="bui-card__content">
                          <div className="bui-title bui-title--strong_1 bui-card__title">
                            <span className="bui-card__title">Đà Lạt</span>
                            <span className="bui-title__subtitle">
                              2,145 chỗ nghỉ
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="bui-carousel__item"
                      
                    >
                      <a
                        className="bui-card bui-card--media bui-card--transparent popular-destinations-carousel-link"
                        href="#"
                      >
                        <div className="bui-card__image-container">
                          <img
                            className="bui-card__image"
                            src="https://cf.bstatic.com/xdata/images/city/square250/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o="
                            alt="Hà Nội"
                          />
                        </div>
                        <div className="bui-card__content">
                          <div className="bui-title bui-title--strong_1 bui-card__title">
                            <span className="bui-card__title">Hà Nội</span>
                            <span className="bui-title__subtitle">
                              3,805 chỗ nghỉ
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="bui-carousel__item"
                      
                    >
                      <a
                        className="bui-card bui-card--media bui-card--transparent popular-destinations-carousel-link"
                        href="#"
                      >
                        <div className="bui-card__image-container">
                          <img
                            className="bui-card__image"
                            src="https://cf.bstatic.com/xdata/images/city/square250/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o="
                            alt="Vũng Tàu"
                          />
                        </div>
                        <div className="bui-card__content">
                          <div className="bui-title bui-title--strong_1 bui-card__title">
                            <span className="bui-card__title">Vũng Tàu</span>
                            <span className="bui-title__subtitle">
                              1,822 chỗ nghỉ
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="bui-carousel__item"
                    
                    >
                      <a
                        className="bui-card bui-card--media bui-card--transparent popular-destinations-carousel-link"
                     href="#"
                      >
                        <div className="bui-card__image-container">
                          <img
                            className="bui-card__image"
                            src="https://cf.bstatic.com/xdata/images/city/square250/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o="
                            alt="TP. Hồ Chí Minh"
                          />
                        </div>
                        <div className="bui-card__content">
                          <div className="bui-title bui-title--strong_1 bui-card__title">
                            <span className="bui-card__title">
                              TP. Hồ Chí Minh
                            </span>
                            <span className="bui-title__subtitle">
                              5,605 chỗ nghỉ
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="bui-carousel__item"
                     
                    >
                      <a
                        className="bui-card bui-card--media bui-card--transparent popular-destinations-carousel-link"
                    href="#"
                      >
                        <div className="bui-card__image-container">
                          <img
                            className="bui-card__image"
                            src="https://cf.bstatic.com/xdata/images/city/square250/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
                            alt="Đà Nẵng"
                          />
                        </div>
                        <div className="bui-card__content">
                          <div className="bui-title bui-title--strong_1 bui-card__title">
                            <span className="bui-card__title">Đà Nẵng</span>
                            <span className="bui-title__subtitle">
                              2,509 chỗ nghỉ
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="bui-carousel__item"
                     
                    >
                      <a
                        className="bui-card bui-card--media bui-card--transparent popular-destinations-carousel-link"
                       href="#"
                      >
                        <div className="bui-card__image-container">
                          <img
                            className="bui-card__image"
                            src="https://cf.bstatic.com/xdata/images/city/square250/688879.jpg?k=82ca0089828054a1a9c46b14ea7f1625d73d42505ae58761e8bcc067f9e72475&o="
                            alt="Phú Quốc"
                          />
                        </div>
                        <div className="bui-card__content">
                          <div className="bui-title bui-title--strong_1 bui-card__title">
                            <span className="bui-card__title">Phú Quốc</span>
                            <span className="bui-title__subtitle">
                              672 chỗ nghỉ
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="bui-carousel__item"
                    
                    >
                      <a
                        className="bui-card bui-card--media bui-card--transparent popular-destinations-carousel-link"
                     href="#"
                      >
                        <div className="bui-card__image-container">
                          <img
                            className="bui-card__image"
                            src="https://cf.bstatic.com/xdata/images/city/square250/688898.jpg?k=cf02624b12e35e7e5c6e7b1323f3fd4ef10b8b0676b84ff91b27c8a77f1b5d33&o="
                            alt="Sa Pa"
                          />
                        </div>
                        <div className="bui-card__content">
                          <div className="bui-title bui-title--strong_1 bui-card__title">
                            <span className="bui-card__title">Sa Pa</span>
                            <span className="bui-title__subtitle">
                              443 chỗ nghỉ
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="bui-carousel__item"
                     
                    >
                      <a
                        className="bui-card bui-card--media bui-card--transparent popular-destinations-carousel-link"
                     href="#"
                      >
                        <div className="bui-card__image-container">
                          <img
                            className="bui-card__image"
                            src="https://cf.bstatic.com/xdata/images/city/square250/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o="
                            alt="Nha Trang"
                          />
                        </div>
                        <div className="bui-card__content">
                          <div className="bui-title bui-title--strong_1 bui-card__title">
                            <span className="bui-card__title">Nha Trang</span>
                            <span className="bui-title__subtitle">
                              1,658 chỗ nghỉ
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="bui-carousel__item"
                     
                    >
                      <a
                        className="bui-card bui-card--media bui-card--transparent popular-destinations-carousel-link"
                      >
                        <div className="bui-card__image-container">
                          <img
                            className="bui-card__image"
                            src="https://cf.bstatic.com/xdata/images/city/square250/688866.jpg?k=fc9d2cb9fe2f6d1160e10542cd2b83f5a8008401d33e8750ee3c2691cf4d4f7e&o="
                            alt="Hội An"
                          />
                        </div>
                        <div className="bui-card__content">
                          <div className="bui-title bui-title--strong_1 bui-card__title">
                            <span className="bui-card__title">Hội An</span>
                            <span className="bui-title__subtitle">
                              1,008 chỗ nghỉ
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="bui-carousel__item"
                     
                    >
                      <a
                        className="bui-card bui-card--media bui-card--transparent popular-destinations-carousel-link"
                      >
                        <div className="bui-card__image-container">
                          <img
                            className="bui-card__image"
                            src="https://cf.bstatic.com/xdata/images/city/square250/688886.jpg?k=91c47e49d89f3a4c2408a360bbbe8b08d11e35e3d6d253c7efb27b5ca4d40a61&o="
                            alt="Huế"
                          />
                        </div>
                        <div className="bui-card__content">
                          <div className="bui-title bui-title--strong_1 bui-card__title">
                            <span className="bui-card__title">Huế</span>
                            <span className="bui-title__subtitle">
                              426 chỗ nghỉ
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="bui-carousel__nav">
                    <button
                      type="button"
                      className="bui-carousel__button"
                    >
                      <svg
                        className="bk-icon -streamline-arrow_nav_left bui-carousel__prev"
                        height={32}
                        width={32}
                        viewBox="0 0 24 24"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="bui-carousel__button"
                      aria-label="Kế tiếp"
                      data-bui-ref="carousel-next"
                    >
                      <svg
                        className="bk-icon -streamline-arrow_nav_right bui-carousel__next"
                        height={32}
                        width={32}
                        viewBox="0 0 24 24"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <svg
                className="bk-icon -iconset-heart"
                height={128}
                style={{ display: "none" }}
                width={128}
                viewBox="0 0 128 128"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z" />
              </svg>
              <h2 className="screen_reader_heading">
                Các điểm đến được giới thiệu
              </h2>
              <div
                className="d-index__section bui-spacer--large  "
               
              >
                <div className="promotion-postcards__row js-ds-layout-events-postcards u-clearfix  ">
                  <div
                    className="promotion-postcard__large"
                   
                  >
                    <div
                     
                    >
                      <div
                        className="unified-postcard unified-postcard--no-description-padding with_airport_tooltip   unified-postcard__pe      unified-postcard--padding"
                        style={{}}
                        data-idr-ufi={-3712045}
                      >
                        <div
                          className="unified-postcard__content   unified-postcard__content_pe "
                          style={{
                            background:
                              "url(https://cf.bstatic.com/xdata/images/city/540x270/688828.jpg?k=6ff2042e10f68221007161a36c476226806abfe0a511a9104d45263cc0cedf55&o=) no-repeat center center",
                            backgroundSize: "cover",
                          }}
                        >
                          <div className="unified-postcard__overlay">
                            <div className="unified-postcard__header">
                              <h3>
                                <a
                                  href="#"
                                >
                                  Đà Lạt
                                  <img
                                    src="https://cf.bstatic.com/static/img/flags/24/vn/baf61f68aef5e509e90f3aee952893b6ff23fe4e.png"
                                    alt="Việt Nam"
                                    valign="middle"
                                  />
                                </a>
                              </h3>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="promotion-postcard__large"
                  >
                    <div
                  
                    >
                      <div
                        className="unified-postcard unified-postcard--no-description-padding with_airport_tooltip   unified-postcard__pe      unified-postcard--padding"
                        style={{}}
                        data-idr-ufi={-3712125}
                      >
                        <div
                          className="unified-postcard__content   unified-postcard__content_pe "
                          style={{
                            background:
                              "url(https://cf.bstatic.com/xdata/images/city/540x270/688843.jpg?k=cf7302d43a44850ddf8509da48c3198d4dda0aa75832b5737cc241249bf394aa&o=) no-repeat center center",
                            backgroundSize: "cover",
                          }}
                        >
                          <div className="unified-postcard__overlay">
                            <div className="unified-postcard__header">
                              <h3>
                                <a
                                  href="#"
                                >
                                  Đà Nẵng
                                  <img
                                    src="https://cf.bstatic.com/static/img/flags/24/vn/baf61f68aef5e509e90f3aee952893b6ff23fe4e.png"
                                    alt="Việt Nam"
                                    valign="middle"
                                  />
                                </a>
                              </h3>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="promotion-postcards__row js-ds-layout-events-postcards  u-clearfix  ">
                  <div
                    className="promotion-postcard__small"
                  >
                    <div
                    >
                      <div
                        className="unified-postcard unified-postcard--no-description-padding with_airport_tooltip   unified-postcard__pe      unified-postcard--padding"
                        style={{}}
                      >
                        <div
                          className="unified-postcard__content   unified-postcard__content_pe "
                          style={{
                            background:
                              "url(https://cf.bstatic.com/xdata/images/city/540x270/688906.jpg?k=6b660c5d295f53392879d35893e48b7cf96be8311cca62eb903eaaed02090ad2&o=) no-repeat center center",
                            backgroundSize: "cover",
                          }}
                        >
                          <div className="unified-postcard__overlay">
                            <div className="unified-postcard__header">
                              <h3>
                                <a
                                  href="#"
                                >
                                  Nha Trang
                                  <img
                                    src="https://cf.bstatic.com/static/img/flags/24/vn/baf61f68aef5e509e90f3aee952893b6ff23fe4e.png"
                                    alt="Việt Nam"
                                    valign="middle"
                                  />
                                </a>
                              </h3>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="promotion-postcard__small"
                  >
                    <div
                    >
                      <div
                        className="unified-postcard unified-postcard--no-description-padding   unified-postcard__pe      unified-postcard--padding"
                      >
                        <div
                          className="unified-postcard__content   unified-postcard__content_pe "
                          style={{
                            background:
                              "url(https://cf.bstatic.com/xdata/images/city/540x270/688864.jpg?k=8bb91fdac1606b7b219eb65b9b2ee6b275a5ed1bfc192dcdcf1191a86a5bcc71&o=) no-repeat center center",
                            backgroundSize: "cover",
                          }}
                        >
                          <div className="unified-postcard__overlay">
                            <div className="unified-postcard__header">
                              <h3>
                                <a
                                  href="#"
                                >
                                  Hội An
                                  <img
                                    src="https://cf.bstatic.com/static/img/flags/24/vn/baf61f68aef5e509e90f3aee952893b6ff23fe4e.png"
                                    alt="Việt Nam"
                                    valign="middle"
                                  />
                                </a>
                              </h3>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="promotion-postcard__small"
                 
                  >
                    <div
                      data-et-click="  customGoal:cCHObTULHfAFFQZcXCEFRURURHe:3 customGoal:cCHObVZMYCAFFQZcEAC:2 customGoal:cCHObVZMYCAFFQZccWRBfBFXBeVYWe:2 customGoal:cCHObVZMYCAFFQZcNKNMC:2 customGoal:cCHObVZMYCAFFQZcbNXGDJEbOMNMTbYIPfZET:2 customGoal:cCHObVZMYCAFFQZcacYPNAWBLULECC:2 customGoal:cCHObVZMYCAFFQZccGBXFGZJae:2  "
                      className="   "
                    >
                      <div
                        className="unified-postcard unified-postcard--no-description-padding with_airport_tooltip   unified-postcard__pe      unified-postcard--padding"
                        style={{}}
                        data-idr-ufi={-3730078}
                      >
                        <div
                          className="unified-postcard__content   unified-postcard__content_pe "
                          style={{
                            background:
                              "url(https://cf.bstatic.com/xdata/images/city/540x270/688892.jpg?k=ab98c6d1cae80333bbd3129cfeb692f9fd1b17caa359d2fb4fdf35a4160e5ccf&o=) no-repeat center center",
                            backgroundSize: "cover",
                          }}
                          data-url="#
"
                          data-target
                          data-no-follow-link={1}
                        >
                          <div className="unified-postcard__overlay">
                            <div className="unified-postcard__header">
                              <h3>
                                <a
                                  href="#
"
                                >
                                  TP. Hồ Chí Minh
                                  <img
                                    src="https://cf.bstatic.com/static/img/flags/24/vn/baf61f68aef5e509e90f3aee952893b6ff23fe4e.png"
                                    alt="Việt Nam"
                                    valign="middle"
                                  />
                                </a>
                              </h3>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-et-view=" cCHObIFfESfdQfQQDVCUBPSEbFZVGAZfTLKGBfC:1  cCHObIFfESfdQfQQDVCUBPSEbFZVGAZfTLKGBfC:2     "></div>
              <svg
                className="bk-icon -iconset-square_rating"
                height={128}
                style={{ display: "none" }}
                width={128}
                viewBox="0 0 128 128"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M104 8H24A16 16 0 0 0 8 24v96h96a16 16 0 0 0 16-16V24a16 16 0 0 0-16-16zM64 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24z" />
              </svg>
              <div
                className="d-index__section bui-spacer--largest bh-carousel--new js-ds-layout-events-bh_carousel js-bh-carousel-async-wrapper"
              >
                <h2
                  className="bui-f-font-display_two bui-spacer--large d-index__header-section "
                  data-component="bh/exposure-counter"
                  data-exposure-name="index_most_popular"
                  data-exposure-value={1}
                >
                  Nhà ở mà khách yêu thích
                </h2>
                <div
                  role="region"
                  aria-label="Nhà ở mà khách yêu thích"
                  className="bui-carousel bui-carousel--medium u-bleed@small js-bh-carousel-async"
                  data-bui-component="Carousel"
                >
                  <ul
                    className="bui-carousel__inner js-bh-carousel-async-inner"
                    data-bui-ref="carousel-container"
                  >
                    <li
                      className="bui-carousel__item"
                      data-bui-ref="carousel-item"
                      data-index={0}
                    >
                      <a
                        href="#"
                        target="_blank"
                        className="bui-card bui-card--media bui-card--transparent"
                        data-et-click="customGoal:cCHObIFfESfdQfQQDVCUBPSEbFZVGAZfTLKGBfC:1"
                      >
                        <div
                          className="bui-card__image-container bh-carousel--new__photo"
                          style={{
                            backgroundImage:
                              "url(https://t-cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=)",
                          }}
                        />
                        <div className="bui-card__content bh-carousel--new__content">
                          <h3 className="bui-card__title bh-carousel--new__title">
                            <span>Sugar Loft Apartments</span>
                          </h3>
                          <p className="bui-card__subtitle">Rio de Janeiro</p>
                          <p className="bh-carousel--new__price bui_color_black">
                            Giá từ VND&nbsp;1.185.025
                          </p>
                          <div style={{ marginTop: "4px" }}>
                            <div className="bui-review-score c-score bui-review-score--inline bui-review-score--small">
                              {" "}
                              <div
                                className="bui-review-score__badge"
                                aria-label="Đạt điểm "
                              >
                                {" "}
                                9,0{" "}
                              </div>{" "}
                              <div className="bui-review-score__content">
                                {" "}
                                <div className="bui-review-score__title">
                                  {" "}
                                  Tuyệt hảo
                                </div>{" "}
                                <div className="bui-review-score__text">
                                  {" "}
                                  261 đánh giá{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="bui-carousel__nav bh-promotion-carousel-nav">
                    <button
                      type="button"
                      className="bui-carousel__button"
                      data-bui-ref="carousel-prev"
                      aria-label="Chỗ nghỉ trước đó"
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <svg
                        className="bk-icon -iconset-navarrow_left bui-carousel__prev"
                        focusable="false"
                        height={128}
                        width={128}
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path d="M73.7 96a4 4 0 0 1-2.9-1.2L40 64l30.8-30.8a4 4 0 0 1 5.7 5.6L51.3 64l25.2 25.2a4 4 0 0 1-2.8 6.8z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="bui-carousel__button"
                      data-bui-ref="carousel-next"
                      aria-label="Chỗ nghỉ tiếp theo"
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <svg
                        className="bk-icon -iconset-navarrow_right bui-carousel__next"
                        focusable="false"
                        height={128}
                        width={128}
                        viewBox="0 0 128 128"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path d="M54.3 96a4 4 0 0 1-2.8-6.8L76.7 64 51.5 38.8a4 4 0 0 1 5.7-5.6L88 64 57.2 94.8a4 4 0 0 1-2.9 1.2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
               
                className="bui-spacer--larger bh-awareness-campaign-index-banner js-ds-layout-events-bh-awareness-campaign-index-banner"
              >
                <a
                href="#"
                  target="_blank"
                  className="bh-awareness-campaign-index-banner__link bui-banner"
                >
                  <div
                    className="bh-awareness-campaign-index-banner__background-detail"
                    aria-hidden="true"
                  />
                  <div className="bh-awareness-campaign-index-banner__content">
                    <div
                      className="bh-awareness-campaign-index-banner__header bui-f-font-display_two bui-u-text-left"
                      aria-label="Tìm chỗ nghỉ dạng nhà ở cho chuyến đi tiếp theo của bạn"
                    >
                      <div>
                        <span>Tìm</span>
                        <div className="bh-awareness-campaign-scrollable-text">
                          <ul className="bh-awareness-campaign-scrollable-text__container">
                            <li className="bh-awareness-campaign-scrollable-text__item-container">
                              <span className="bh-awareness-campaign-scrollable-text__item">
                                căn hộ
                              </span>
                            </li>
                            <li className="bh-awareness-campaign-scrollable-text__item-container">
                              <span className="bh-awareness-campaign-scrollable-text__item">
                                biệt thự
                              </span>
                            </li>
                            <li className="bh-awareness-campaign-scrollable-text__item-container">
                              <span className="bh-awareness-campaign-scrollable-text__item">
                                khách sạn căn hộ
                              </span>
                            </li>
                            <li className="bh-awareness-campaign-scrollable-text__item-container">
                              <span className="bh-awareness-campaign-scrollable-text__item">
                                nhà nghỉ dưỡng
                              </span>
                            </li>
                            <li className="bh-awareness-campaign-scrollable-text__item-container">
                              <span className="bh-awareness-campaign-scrollable-text__item">
                                cottage
                              </span>
                            </li>
                            <li className="bh-awareness-campaign-scrollable-text__item-container">
                              <span className="bh-awareness-campaign-scrollable-text__item bh-awareness-campaign-scrollable-text__item--underlined">
                                nhà
                              </span>
                            </li>
                            <li className="bh-awareness-campaign-scrollable-text__item-container">
                              <span className="bh-awareness-campaign-scrollable-text__item">
                                căn hộ
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <span>cho chuyến đi tới</span>
                    </div>
                    <button
                      className="bh-awareness-campaign-index-banner__cta bui-button bui-button--secondary"
                      type="button"
                    >
                      <span className="bui-button__text bui-u-text-center bui-u-full-width">
                        Khám phá chỗ nghỉ như ở nhà
                      </span>
                    </button>
                  </div>
                  <div
                    className="bh-awareness-campaign-index-banner__image-container"
                    aria-hidden="true"
                  >
                    <img
                      data-src="https://cf.bstatic.com/static/img/bh/awareness/campaign/bh_aw_cpg_main_image/b0f5755d0651acbe9d3f3785a874258150b4393b.png"
                      className="bh-awareness-campaign-index-banner__image js-lazy-image"
                    />
                  </div>
                </a>
                <button
                  type="button"
                  className="bui-banner__close js-bh-awareness-campaign-index-banner-close-trigger js-close"
                  aria-label="Đóng banner về chỗ nghỉ dạng nhà ở"
                >
                  <svg
                    className="bk-icon -streamline-close"
                    data-width={24}
                    height={24}
                    role="presentation"
                    width={24}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z" />
                  </svg>
                </button>
              </div>
            </div>{" "}
            {/* /basiclayout */}
          </div>
        </div>{" "}
        {/* lp-general_content_wrapper */}
      </div>
      {/* <HomeRecommand/> */}

    </>
  );
};

export default HomeScreen;
