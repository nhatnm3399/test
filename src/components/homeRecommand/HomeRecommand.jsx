import { useState } from "react"

const HomeRecommand = () =>{
    const [active, setActive] = useState("1");

    return (
        <div className="slinks">
        <div className="wcu-seo-tabs d-index__section bui-spacer--largest index clearfix a11y_blue_grey">
          <h2 className="bui-f-font-display_two bui-spacer--large d-index__header-section">Các điểm
            đến được chúng tôi ưa thích</h2>
          <nav className="bui-tab bui-tab--rounded bui-spacer--large" data-component="seo-index-destinations-tabs">
            <ul className="bui-tab__nav" role="tablist" data-bui-ref="tab-items">
              <li className="bui-tab__item" role="presentation" data-bui-ref="tab-item" onClick={()=> setActive(1)}>
                <button className={ active == 1 ? `bui-tab__link bui-tab__link--selected` : `bui-tab__link bui-tab__link`} data-bui-ref="tab-button" data-tab-id={0} role="tab" aria-selected="true">
                  <span className="bui-tab__text" data-bui-ref="tab-text">Khu vực</span>
                </button>
              </li>
              <li className="bui-tab__item" role="presentation" data-bui-ref="tab-item" onClick={()=> setActive(2)}>
                <button className={ active == 2 ? `bui-tab__link bui-tab__link--selected` : `bui-tab__link bui-tab__link`}  data-bui-ref="tab-button" data-tab-id={1} role="tab" aria-selected="false">
                  <span className="bui-tab__text" data-bui-ref="tab-text">Thành phố</span>
                </button>
              </li>
              <li className="bui-tab__item" role="presentation" data-bui-ref="tab-item" onClick={()=> setActive(3)}>
                <button className={ active == 3 ? `bui-tab__link bui-tab__link--selected` : `bui-tab__link bui-tab__link`}  data-bui-ref="tab-button" data-tab-id={2} role="tab" aria-selected="false">
                  <span className="bui-tab__text" data-bui-ref="tab-text">Địa điểm được quan tâm</span>
                </button>
              </li>
            </ul>
            {
                active == 1 && (
                    <div className="bui-tab__content bui-tab__content--selected" role="tabpanel" data-bui-ref="tab-content" data-tab-id={0}>
              <ul className="ia_section-container clearfix wcu-seo-regions-poi">
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Khu vực TP. Hồ Chí Minh
                  </a>
                  <span className="ia_hotelnum">5,633 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Trà Vinh
                  </a>
                  <span className="ia_hotelnum">17 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Ninh Thuận
                  </a>
                  <span className="ia_hotelnum">145 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Bình Dương
                  </a>
                  <span className="ia_hotelnum">78 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  last  fl ">
                  <a className="ia_link" href="#">
                    Bình Thuận
                  </a>
                  <span className="ia_hotelnum">599 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Gia Lai
                  </a>
                  <span className="ia_hotelnum">86 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Cà Mau
                  </a>
                  <span className="ia_hotelnum">48 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Hà Nội
                  </a>
                  <span className="ia_hotelnum">3,888 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Thanh Hóa
                  </a>
                  <span className="ia_hotelnum">253 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  last  fl ">
                  <a className="ia_link" href="#">
                    Thành phố Đà Nẵng
                  </a>
                  <span className="ia_hotelnum">2,511 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Quảng Bình
                  </a>
                  <span className="ia_hotelnum">267 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Cần Thơ
                  </a>
                  <span className="ia_hotelnum">352 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Vịnh Hạ Long
                  </a>
                  <span className="ia_hotelnum">1,368 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Bạc Liêu
                  </a>
                  <span className="ia_hotelnum">23 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  last  fl ">
                  <a className="ia_link" href="#">
                    Hà Tĩnh
                  </a>
                  <span className="ia_hotelnum">37 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Đắc Lắc
                  </a>
                  <span className="ia_hotelnum">123 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Phú Yên
                  </a>
                  <span className="ia_hotelnum">212 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Thừa Thiên - Huế
                  </a>
                  <span className="ia_hotelnum">519 chỗ nghỉ</span>
                </li>
                <li className=" ia_section_item  fl ">
                  <a className="ia_link" href="#">
                    Vĩnh Long
                  </a>
                  <span className="ia_hotelnum">42 chỗ nghỉ</span>
                </li>
              </ul>
            </div>
                )
            }
            {
                active == 2 && (
                    <div className="bui-tab__content--selected" role="tabpanel" data-bui-ref="tab-content" data-tab-id={1}>
              <div role="region" id="wcu-seo-cities-carousel" className="wcu-seo-cities-tab-content bui-carousel bui-carousel--medium bui-u-bleed@small" tabIndex={0}>
                <ul className="bui-carousel__inner" data-bui-ref="carousel-container">
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-destination bui-spacer--large">
                      <div className="wcu-seo-destination__title">
                        <a href="#"><span className="bui-text bui-text--variant-emphasized_2">Hà Nội,
                            Việt Nam</span></a>
                      </div>
                      <div className="bui-text bui-text--variant-body_2 wcu-seo-destination__accomodations">
                        <a href="#">787
                          biệt thự, căn hộ và nhà nghỉ dưỡng</a><span>, </span><a href="#">688
                          căn hộ</a><span>, </span><a href="#">160
                          chỗ nghỉ nhà dân</a><span>, </span><a href="#">59
                          khách sạn căn hộ</a><span>, </span><a href="#">52
                          nhà nghỉ B&amp;B</a>
                      </div>
                    </div>
                    <div className="wcu-seo-destination bui-spacer--large">
                      <div className="wcu-seo-destination__title">
                        <a href="
#"><span className="bui-text bui-text--variant-emphasized_2">Huế,
                            Việt Nam</span></a>
                      </div>
                      <div className="bui-text bui-text--variant-body_2 wcu-seo-destination__accomodations">
                        <a href="#">107
                          biệt thự, căn hộ và nhà nghỉ dưỡng</a><span>, </span><a href="#">66
                          chỗ nghỉ nhà dân</a><span>, </span><a href="#">39
                          nhà nghỉ B&amp;B</a><span>, </span><a href="#">22
                          căn hộ</a><span>, </span><a href="#">15
                          nhà khách</a>
                      </div>
                    </div>
                    <div className="wcu-seo-destination ">
                      <div className="wcu-seo-destination__title">
                        <a href="#"><span className="bui-text bui-text--variant-emphasized_2">Mũi Né,
                            Việt Nam</span></a>
                      </div>
                      <div className="bui-text bui-text--variant-body_2 wcu-seo-destination__accomodations">
                        <a href="#">59
                          resort</a><span>, </span><a href="#">37
                          biệt thự, căn hộ và nhà nghỉ dưỡng</a><span>, </span><a href="#">22
                          chỗ nghỉ nhà dân</a><span>, </span><a href="#">19
                          nhà nghỉ B&amp;B</a><span>, </span><a href="#">17
                          nhà khách</a>
                      </div>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-destination bui-spacer--large">
                      <div className="wcu-seo-destination__title">
                        <a href=""><span className="bui-text bui-text--variant-emphasized_2">Sa Pa,
                            Việt Nam</span></a>
                      </div>
                      <div className="bui-text bui-text--variant-body_2 wcu-seo-destination__accomodations">
                        <a href="#">114
                          biệt thự, căn hộ và nhà nghỉ dưỡng</a><span>, </span><a href="#">75
                          chỗ nghỉ nhà dân</a><span>, </span><a href="#">37
                          nhà nghỉ B&amp;B</a><span>, </span><a href="#">15
                          nhà khách</a><span>, </span><a href="#">14
                          nhà nghỉ giữa thiên nhiên</a>
                      </div>
                    </div>
                    <div className="wcu-seo-destination bui-spacer--large">
                      <div className="wcu-seo-destination__title">
                        <a href="#"><span className="bui-text bui-text--variant-emphasized_2">Phú Quốc,
                            Việt Nam</span></a>
                      </div>
                      <div className="bui-text bui-text--variant-body_2 wcu-seo-destination__accomodations">
                        <a href="">170
                          biệt thự, căn hộ và nhà nghỉ dưỡng</a><span>, </span><a href="#">141
                          resort</a><span>, </span><a href="#">79
                          chỗ nghỉ nhà dân</a><span>, </span><a href="#">77
                          nhà nghỉ B#amp;B</a><span>, </span><a href="#">50
                          nhà khách</a>
                      </div>
                    </div>
                    <div className="wcu-seo-destination ">
                      <div className="wcu-seo-destination__title">
                        <a href=""><span className="bui-text bui-text--variant-emphasized_2">Vũng Tàu,
                            Việt Nam</span></a>
                      </div>
                      <div className="bui-text bui-text--variant-body_2 wcu-seo-destination__accomodations">
                        <a href="">858
                          biệt thự, căn hộ và nhà nghỉ dưỡng</a><span>, </span><a href="">733
                          căn hộ</a><span>, </span><a href="">205
                          biệt thự</a><span>, </span><a href="">205
                          nhà nghỉ thôn dã</a><span>, </span><a href="">205
                          nhà nghỉ thôn dã</a>
                      </div>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Long Hải</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">85 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Vĩnh Long</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">36 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Vịnh Vĩnh
                          Hy</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">8 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Vinh</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">34 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Tuy Hoà</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">141 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Trà Vinh</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">14 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Thủ Dầu
                          Một</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">32 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Tây Ninh</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">23 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Tam Kỳ</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">19 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Tam Ðảo</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">37 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Sóc
                          Trăng</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">11 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Sầm
                          Sơn</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">89 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Rạch
                          Giá</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">40 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Quy Nhơn</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">473 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Quảng
                          Ngãi</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">67 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Pleiku</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">60 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Phan Thiết</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">150 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Phan Rang</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">78 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Ninh Bình</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">446 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Mỹ Tho</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">24 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Móng
                          Cái</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">11 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Mộc
                          Châu</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">50 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Mai Châu</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">57 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Long Xuyên</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">14 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Lào Cai</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">114 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">La Gi</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">43 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Kon Tum</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">13 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Kon Tum</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">15 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Hạ Long</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">1137 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Hòa
                          Bình</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">48 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Hà
                          Tiên</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">28 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Thành phố
                          Hải Phòng</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">277 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Hà Giang</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">213 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Đồ
                          Sơn</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">5 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Ðồng
                          Hới</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">94 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Điện
                          Biên Phủ</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">36 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Cửa
                          Lò</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">22 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Côn
                          Đảo</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">108 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Châu
                          Đốc</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">46 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Đảo
                          Cát Bà</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">225 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Cao Lãnh</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">17 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Cần
                          Thơ</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">330 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Cần
                          Giờ</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">3 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Cam Ranh</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">44 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Cà Mau</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">46 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Buôn Ma
                          Thuột</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">93 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Biên
                          Hoà</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">33 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Bến Tre</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">50 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Ba Vì</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">8 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Bảo
                          Lộc</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">33 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Ba Na</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">1 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Bangkok</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">4039 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Seoul</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">2304 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Singapore</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">806 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Imperial</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">4 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Ho Tram</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">17 khách sạn</span>
                      </a>
                    </div>
                  </li>
                  <li className="bui-carousel__item" data-bui-ref="carousel-item">
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Lăng
                          Cô</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">19 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Tuần
                          Châu</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">1 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Hồ
                          Cốc</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">9 khách sạn</span>
                      </a>
                    </div>
                    <div className="wcu-seo-popular-city bui-spacer--large">
                      <a href="#">
                        <span className="wcu-seo-popular-city__title bui-text--variant-emphasized_2">Nam Du</span>
                        <br />
                        <span className="wcu-seo-popular-city__accomodations bui-text--variant-body_2">7 khách sạn</span>
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="bui-carousel__nav" aria-hidden="true">
                  <button type="button" className="bui-carousel__button" aria-label="Previous content" data-bui-ref="carousel-prev">
                    <svg className="bk-icon -streamline-arrow_nav_left bui-carousel__prev" height={32} width={32} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                      <path d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z" />
                    </svg>
                  </button>
                  <button type="button" className="bui-carousel__button" aria-label="Next content" data-bui-ref="carousel-next">
                    <svg className="bk-icon -streamline-arrow_nav_right bui-carousel__next" height={32} width={32} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                      <path d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
                )
            }
            {
                active == 3 && (
                    <div className="bui-tab__content--selected" role="tabpanel" data-bui-ref="tab-content" data-tab-id={2}>
              <ul className="ia_section-container clearfix wcu-seo-regions-poi">
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Chợ Đà Lạt
                  </a>
                  <span className="ia_hotelnum">2,144 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Ga Hòa Hưng
                  </a>
                  <span className="ia_hotelnum">5,603 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Công viên giải trí Vinpearl Land Nha Trang
                  </a>
                  <span className="ia_hotelnum">1,657 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Bãi Sau
                  </a>
                  <span className="ia_hotelnum">1,821 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item last fl">
                  <a className="ia_link" href="#">
                    Đảo Hòn Tre
                  </a>
                  <span className="ia_hotelnum">1,657 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Hòn Tằm
                  </a>
                  <span className="ia_hotelnum">1,657 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Hồ Xuân Hương
                  </a>
                  <span className="ia_hotelnum">2,144 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Cầu Rồng
                  </a>
                  <span className="ia_hotelnum">2,508 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Ga Nha Trang
                  </a>
                  <span className="ia_hotelnum">1,657 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item last fl">
                  <a className="ia_link" href="#">
                    Ga Hà Nội
                  </a>
                  <span className="ia_hotelnum">3,801 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Bến Ninh Kiều
                  </a>
                  <span className="ia_hotelnum">330 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Hồ Hoàn Kiếm
                  </a>
                  <span className="ia_hotelnum">3,801 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Phố đi bộ Nguyễn Huệ
                  </a>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Hồ Tuyền Lâm
                  </a>
                  <span className="ia_hotelnum">2,144 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item last fl">
                  <a className="ia_link" href="#">
                    Chợ Bến Thành
                  </a>
                  <span className="ia_hotelnum">5,603 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Chợ đêm Phú Quốc
                  </a>
                  <span className="ia_hotelnum">672 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Chợ nổi Cái Răng
                  </a>
                  <span className="ia_hotelnum">330 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Hồ Tây
                  </a>
                  <span className="ia_hotelnum">3,801 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item  fl">
                  <a className="ia_link" href="#">
                    Bãi Trước
                  </a>
                  <span className="ia_hotelnum">1,821 chỗ nghỉ</span>
                </li>
                <li className="ia_section_item last fl">
                  <a className="ia_link" href="#">
                    Cầu sông Hàn
                  </a>
                  <span className="ia_hotelnum">2,508 chỗ nghỉ</span>
                </li>
              </ul>
            </div>
                )
            }
          </nav>
        </div>
      </div>
    )
}

export default HomeRecommand