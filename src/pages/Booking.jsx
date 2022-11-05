import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../common/constant";

const Booking = () => {
  const [booking, setBooking] = useState("");
  const [info, setInfo] = useState({
    name: '',
    sdt: '',
    email: '',
    another: ''
  })

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${URL}/room-detail/${id}`);
      if (res.status === 200) {
        setBooking(res.data)
      }
    }

    fetchData();
  }, []);

  const changeParams = (key, value) => {
    setInfo({
      ...info,
      [key] : value
    })
  }

  const submitPayment = async (e) => {
    e.preventDefault();
    if (info.name === '' || info.sdt === '' || info.email === '' || info.another === '') {
      toast.error('Vui lòng không để trống các input dưới ')
    } else {
      // const res = await axios.post(`${URL}/`)
      toast.success('Booking success')
    }
    
  }

  return (
    <div
      className="bui-container booking-process__container js-booking-process__container js-booking-process__container--stage-2 e2e-stage-container"
      data-stage={2}
    >
      <div className="bui-grid">
        <div className="bui-grid__column bui-spacer">
          <div className="bui-card bui-card--fill bui-card--transparent">
            <div className="bui-card__content">
              <ol className="bui-nav-progress bui-nav-progress--horizontal">
                <li className="bui-nav-progress__item ">
                  <span
                    className="bui-nav-progress__indicator"
                    aria-hidden="true"
                  >
                    <svg
                      className="bk-icon -streamline-checkmark_fill bui-nav-progress__icon"
                      fill="currentColor"
                      height={24}
                      width={24}
                      viewBox="0 0 128 128"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z" />
                    </svg>
                  </span>
                  <strong
                    className="bui-nav-progress__title"
                    aria-current="false"
                  >
                    Chọn Phòng
                  </strong>
                  <span className="bui-nav-progress__step" aria-hidden="true">
                    Step 1 of 3
                  </span>
                </li>
                <li role="presentation" className="bui-nav-progress__divider" />
                <li className="bui-nav-progress__item bui-nav-progress__item--active">
                  <span
                    className="bui-nav-progress__indicator"
                    aria-hidden="true"
                  >
                    2
                  </span>
                  <strong
                    className="bui-nav-progress__title"
                    aria-current="step"
                  >
                    Xác thực thông tin
                  </strong>
                  <span className="bui-nav-progress__step" aria-hidden="true">
                    Step 2 of 3
                  </span>
                </li>
                <li role="presentation" className="bui-nav-progress__divider" />
                <li className="bui-nav-progress__item bui-nav-progress__item--disabled">
                  <span
                    className="bui-nav-progress__indicator"
                    aria-hidden="true"
                  >
                    3
                  </span>
                  <strong
                    className="bui-nav-progress__title"
                    aria-current="false"
                  >
                    Xác nhận thanh toán
                  </strong>
                  <span className="bui-nav-progress__step" aria-hidden="true">
                    Step 3 of 3
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="bui-grid">
        <aside className="bui-grid__column bui-grid__column-4@medium">
          <div className="bui-group bui-group--large">
            <section className="bui-card bp-card--booking-summary bui-u-bleed@small">
              <div className="bui-card__content">
                <header className="bui-card__header bui-spacer--large ">
                  <h2 className="bui-card__title">Chi tiết đặt phòng</h2>
                </header>
                <div className="bui-group bui-group--large">
                  <div className="bui-group bui-group--large">
                    <div className="bui-group__item">
                      <div className="bui-date-range bui-date-range--large bp-date-range">
                        <div className="bui-date-range__item">
                          <div
                            id="bp-checkin-date__label"
                            className="bui-date__label"
                          >
                            Check-in
                          </div>
                          <time
                            className="bui-date bui-date--large"
                            aria-describedby="bp-checkin-date__label"
                          >
                            <span className="bui-date__title">
                              Wed 2 Nov 2022
                            </span>
                            <span className="bui-date__subtitle">
                              From 3:00&nbsp;PM
                            </span>
                          </time>
                        </div>
                        <div className="bui-date-range__item">
                          <div
                            id="bp-checkout-date__label"
                            className="bui-date__label"
                          >
                            Check-out
                          </div>
                          <time
                            className="bui-date bui-date--large"
                            aria-describedby="bp-checkout-date__label"
                          >
                            <span className="bui-date__title">
                              Fri 4 Nov 2022
                            </span>
                            <span className="bui-date__subtitle">
                              Until 12:00&nbsp;PM
                            </span>
                          </time>
                        </div>
                      </div>
                    </div>
                    <div className="bui-group__item bui-group bui-group--small">
                      <div className="bui-group__item bui-f-font-emphasized">
                        Tổng Số Người: {booking.number_people}
                      </div>
                      <div className="bui-group__item bui-f-font-strong" style={{ fontSize :'20px', lineHeight: '30px' }}>
                        Tổng Tiền : <b>{booking.price}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </aside>
        <main
          id="content"
          className="bui-grid__column bui-grid__column-8@medium booking-process__content"
        >
          <div
            data-et-view="HBOAIEcADDbdEPQBTKe:1"
            className="bp-mfe-container--property-details"
          >
            <div
              data-capla-component="b-checkout-bp-accommodation/PropertyDetails/v1"
              data-capla-namespace="b-checkout-bp-accommodationdRMHOCHG"
            >
              <div>
                <div className="a826ba81c4 fe821aea6c fa2f36ad22 afd256fc79 d08f526e0d ed11e24d01 ef9845d4b3 b3f8bf4d3c bui-spacer--large">
                  <div className="a1b3f50dcd f7c6687c3d bdf0df2d01 a198893f50">
                    <div className="a1b3f50dcd b2fe1a41c3 bdf0df2d01 a198893f50 d19ba76520">
                      <div className>
                        <div className="ecfb1f5933 bd327c62e7">
                          <img
                            src={booking.image}
                            className="f24789ba0e"
                            alt=""
                            width={160}
                            height={160}
                          />
                        </div>
                      </div>
                      <div className="b1e6dd8416 aacd9d0b0a">
                        <div className="a1b3f50dcd f7c6687c3d a1f3ecff04">
                          <div className="a1b3f50dcd e7726e00dd b9353fc4bd">
                            <div className>
                              <h1 className="fcab3ed991">
                                {booking.type_room_name}
                              </h1>
                            </div>
                            <div className>
                              <div className="a1b3f50dcd b2fe1a41c3 a1f3ecff04 db7f07f643">
                                <div
                                  data-testid="property-details__metadata--property-type"
                                  className
                                >
                                  <div>
                                    <div className="a1b3f50dcd b2fe1a41c3 a1f3ecff04 db7f07f643">
                                      <div className="d8eab2cf7f">
                                        Đánh giá
                                      </div>
                                      <div className="fbb11b26f5" role="img">
                                        <span
                                          aria-hidden="true"
                                          className="b6dc9a9e69 adc357e4f1 fe621d6382"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
                                          </svg>
                                        </span>
                                        <span
                                          aria-hidden="true"
                                          className="b6dc9a9e69 adc357e4f1 fe621d6382"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
                                          </svg>
                                        </span>
                                        <span
                                          aria-hidden="true"
                                          className="b6dc9a9e69 adc357e4f1 fe621d6382"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
                                          </svg>
                                        </span>
                                        <span
                                          aria-hidden="true"
                                          className="b6dc9a9e69 adc357e4f1 fe621d6382"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
                                          </svg>
                                        </span>
                                        <span
                                          aria-hidden="true"
                                          className="b6dc9a9e69 adc357e4f1 fe621d6382"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-testid="property-details__metadata--preferred-property"
                                  className
                                >
                                  <span className="cb5ebe3ffb">
                                    <span
                                      aria-expanded="false"
                                      className="b6dc9a9e69 ee74cdff9b ec1b6253a6 fe3639fe67"
                                      aria-hidden="true"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 128 128"
                                      >
                                        <path d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.697 8.697 0 0 1-2 6 8.903 8.903 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7c-.078.923-.28 1.831-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z" />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="a1b3f50dcd f7c6687c3d a1f3ecff04">
                            <div className="a1b3f50dcd f7c6687c3d b9353fc4bd">
                              <span className="cb5ebe3ffb">
                                <button
                                  aria-expanded="false"
                                  type="button"
                                  className="fc63351294 c15b1ae496"
                                >
                                  <div className="db29ecfbe2">
                                    An bang Beach Cam An ward, Cam An, Hoi An,
                                    Vietnam
                                  </div>
                                </button>
                              </span>
                              <div className="d8eab2cf7f cf9ebde7b2">
                                Great Location — 8.3
                              </div>
                            </div>
                            <div className>
                              <div className="a1b3f50dcd b2fe1a41c3 a1f3ecff04 db7f07f643 d19ba76520 beeede3d5b d17b3fe5e2">
                                <div
                                  aria-label="Scored 8.3 "
                                  className="d8eab2cf7f d10a6220b4"
                                >
                                  8.3
                                </div>
                                <div className="b1e6dd8416 aacd9d0b0a b48795b3df">
                                  <span
                                    aria-label="Rated very good"
                                    className="d8eab2cf7f f0d4d6a2f5 e46e88563a"
                                  >
                                    {" "}
                                    Very Good
                                  </span>
                                  <span className="d8eab2cf7f c90c0a70d3 db63693c62">
                                    &nbsp;·&nbsp;501 reviews
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className>
                              <ul
                                className="bbf2424dd9"
                                data-testid="property-details__facilities"
                              >
                                <li className="c29c7eee12">
                                  <span>
                                    <div
                                      data-testid="property-facility-badge-icon"
                                      className="d8eab2cf7f f0d4d6a2f5 ff07fc41e3 label b1a7dcb8b0"
                                    >
                                      <span
                                        data-testid="icon-with-text-icon"
                                        className="b6dc9a9e69 e492382468 e25355d3ee"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z" />
                                        </svg>
                                      </span>
                                      <span className="a51f4b5adb">
                                        Parking
                                      </span>
                                    </div>
                                  </span>
                                </li>
                                <li className="c29c7eee12">
                                  <span>
                                    <div
                                      data-testid="property-facility-badge-icon"
                                      className="d8eab2cf7f f0d4d6a2f5 ff07fc41e3 label b1a7dcb8b0"
                                    >
                                      <span
                                        data-testid="icon-with-text-icon"
                                        className="b6dc9a9e69 e492382468 e25355d3ee"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z" />
                                        </svg>
                                      </span>
                                      <span className="a51f4b5adb">
                                        Restaurant
                                      </span>
                                    </div>
                                  </span>
                                </li>
                                <li className="c29c7eee12">
                                  <span>
                                    <div
                                      data-testid="property-facility-badge-icon"
                                      className="d8eab2cf7f f0d4d6a2f5 ff07fc41e3 label b1a7dcb8b0"
                                    >
                                      <span
                                        data-testid="icon-with-text-icon"
                                        className="b6dc9a9e69 e492382468 e25355d3ee"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" />
                                        </svg>
                                      </span>
                                      <span className="a51f4b5adb">
                                        Pet friendly
                                      </span>
                                    </div>
                                  </span>
                                </li>
                                <li className="c29c7eee12">
                                  <span>
                                    <div
                                      data-testid="property-facility-badge-icon"
                                      className="d8eab2cf7f f0d4d6a2f5 ff07fc41e3 label b1a7dcb8b0"
                                    >
                                      <span
                                        data-testid="icon-with-text-icon"
                                        className="b6dc9a9e69 e492382468 e25355d3ee"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 128 128"
                                        >
                                          <path d="M108.42 55.84H44.26a9 9 0 0 0-8.94 8.94v20.67H19.58a9 9 0 0 0-8.93 8.94v14.8a9 9 0 0 0 8.93 8.94h6.47c2.2 7.332 9.928 11.491 17.26 9.291a13.861 13.861 0 0 0 9.29-9.291h22.8c2.2 7.332 9.928 11.491 17.26 9.291a13.861 13.861 0 0 0 9.29-9.291h1.53c7.658-.006 13.864-6.212 13.87-13.87V64.78a9 9 0 0 0-8.93-8.94zm.93 8.94v20.67H92.68V63.84h15.74a.94.94 0 0 1 .93.94zM68 85.45V63.84h16.68v21.61zM44.26 63.84H60v21.61H43.32V64.78c0-.52.42-.94.94-.94zM39.32 120a5.87 5.87 0 1 1 5.87-5.87 5.88 5.88 0 0 1-5.87 5.87zm49.36 0a5.87 5.87 0 1 1 5.87-5.87 5.87 5.87 0 0 1-5.87 5.87zm14.8-9.87H102c-2.2-7.332-9.928-11.491-17.26-9.291a13.861 13.861 0 0 0-9.29 9.291H52.6c-2.2-7.332-9.928-11.491-17.26-9.291a13.861 13.861 0 0 0-9.29 9.291h-6.47a.94.94 0 0 1-.93-.94v-14.8a.94.94 0 0 1 .93-.94h89.77v10.81a5.87 5.87 0 0 1-5.87 5.87zm-92.29-82a4 4 0 0 1 5.467-1.451l.003.001 6.69 3.88 12.33-6-13.79-8a4 4 0 0 1 4-6.91l18.4 10.73 13.07-6.4a4.003 4.003 0 1 1 3.52 7.19l-36 17.6a4 4 0 0 1-3.76-.13l-8.54-5a4 4 0 0 1-1.39-5.52z" />
                                        </svg>
                                      </span>
                                      <span className="a51f4b5adb">
                                        Airport shuttle
                                      </span>
                                    </div>
                                  </span>
                                </li>
                                <li className="c29c7eee12">
                                  <span>
                                    <div
                                      data-testid="property-facility-badge-icon"
                                      className="d8eab2cf7f f0d4d6a2f5 ff07fc41e3 label b1a7dcb8b0"
                                    >
                                      <span
                                        data-testid="icon-with-text-icon"
                                        className="b6dc9a9e69 e492382468 e25355d3ee"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z" />
                                        </svg>
                                      </span>
                                      <span className="a51f4b5adb">
                                        Free WiFi
                                      </span>
                                    </div>
                                  </span>
                                </li>
                                <li className="c29c7eee12">
                                  <span>
                                    <div
                                      data-testid="property-facility-badge-icon"
                                      className="d8eab2cf7f f0d4d6a2f5 ff07fc41e3 label b1a7dcb8b0"
                                    >
                                      <span
                                        data-testid="icon-with-text-icon"
                                        className="b6dc9a9e69 e492382468 e25355d3ee"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M23.097 21.71c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm0-4.5c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm-1.722-8.64a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zM7.777 14.636l3.831-2.4a.75.75 0 0 0 .166-1.13L8.964 7.9a2.25 2.25 0 0 1 .687-3.494l4.264-2.135a.751.751 0 1 1 .686 1.333l-.01.006-3.405 1.702a1.502 1.502 0 0 0-.448 2.334l5.375 6.142a.75.75 0 1 0 1.128-.988l-5.377-6.145-.002-.003v-.001l3.394-1.697.027-.013A2.25 2.25 0 0 0 13.238.93L8.98 3.065a3.749 3.749 0 0 0-1.144 5.824l2.81 3.206.166-1.13-3.831 2.4a.75.75 0 0 0 .796 1.272z" />
                                        </svg>
                                      </span>
                                      <span className="a51f4b5adb">
                                        Swimming pool
                                      </span>
                                    </div>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-et-view="HBOAIEcADDbdEPQBTKe:1"
            className="bp-mfe-container--property-details"
          >
            <div
              data-capla-component="b-checkout-bp-accommodation/PropertyDetails/v1"
              data-capla-namespace="b-checkout-bp-accommodationdRMHOCHG"
            >
              <div />
            </div>
          </div>

          <form id="bookForm" className="book-form" name="bookForm">
            <section className="bui-card bp-card--user-details bui-spacer--large  bui-u-bleed@small bg-main">
              <div className="bui-card__content">
                <header className="bui-inline-container">
                  <div className="bui-inline-container__main">
                    <div className="bui-group bui-group--small">
                      <div className="bui-group__item">
                        <h2 className="bui-text--variant-headline_3">
                          Nhập thông tin
                        </h2>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="bui-card__text">
                  <div
                    className="bp-personal-details-form"
                    data-component="bp/personal-details-form"
                  >
                    <div className="group-item">
                      <label htmlFor="" className="label-info">
                        Nhập Họ Và Tên :
                      </label>
                      <input type="text" value={info.name} onChange={(e)=>changeParams('name', e.target.value)} className="input-booking" />
                    </div>
                    <div className="group-item">
                      <label htmlFor="" className="label-info">
                        Nhập Số Điện Thoại Liên Hệ :
                      </label>
                      <input type="text" value={info.sdt} onChange={(e)=>changeParams('sdt', e.target.value)} className="input-booking" />
                    </div>
                    <div className="group-item">
                      <label htmlFor="" className="label-info">
                        Nhập Địa Chỉ Email :
                      </label>
                      <input type="text" value={info.email} onChange={(e)=>changeParams('email', e.target.value)} className="input-booking" />
                    </div>
                    <div className="group-item">
                      <label htmlFor="" className="label-info">
                        Yêu Cầu Khác :
                      </label>
                      <textarea value={info.another} onChange={(e)=>changeParams('another', e.target.value)} className="input-booking"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div
              data-et-view="HBOAIEcGcEJDXO:1"
              className="bui-group bui-spacer--large"
            >
              <div
                className="
                    bui-group bui-button-group bui-group--vertical-align-middle bui-group--inline bui-group--align-end 
                    "
              >
                <div className="bui-group__item">
                  <button
                    className="
                        bui-button
                        bui-button--primary
                        bui-button--large
                        js-bp-submit-button--next-step e2e-bp-submit-button--next-step
                        bp-button
                        "
                    type="submit"
                    onClick={(e)=>submitPayment(e)}
                  >
                    <span className="bui-button__text js-button__text">
                      {" "}
                      Thanh Toán{" "}
                    </span>{" "}
                    <span className="bui-button__icon bui-button__icon--end js-button__icon">
                      <svg
                        className="bk-icon -streamline-arrow_nav_right"
                        height={24}
                        role="presentation"
                        width={24}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z" />
                      </svg>
                    </span>{" "}
                    <span className="bui-button__loader">
                      {" "}
                      <div className="bui-spinner bui-spinner--light ">
                        {" "}
                        <div className="bui-spinner__inner" />{" "}
                      </div>{" "}
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Booking;
