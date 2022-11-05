import ItemList from "../pages/ItemList"
import { Link } from "react-router-dom"
import LeftBar from "./navbar/LeftBar"
import HeaderScreen from "./header/HeaderScreen"
import { useParams , useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { URL } from "../common/constant";
import axios from "axios"

const DetailCheckOut = () => {
  const [hotel, setHotel] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${URL}/hotel-detail/${id}`);
      if (res.status === 200) {
        setHotel(res.data)
      }
    }

    fetchData();
  }, []);

  const handleSubmit = (id) => {
    navigate(`/booking/${id}`);
  }

    return (
        <>
        <HeaderScreen/>
        <div id="bodyconstraint" className="  bodyconstraint_increased-min-width  ">
        <div id="bodyconstraint-inner">
          <div data-et-view="VIPfLCOIONNTDAHbZSdSUWDbaTaTaET:1" />
          <div id="hotelTmpl" className>
            <div role="main" id="basiclayout">
              <div className="k2-property_page--layout k2-hp_full-width--layout ">
                <div className="bui-grid bui-grid--size-small hotelchars">
                  <div className="k2-hp--sidebar bui-grid__column bui-grid__column-3" role="complementary">
                    

                    <div className="sb-searchbox__spacing" />
                    <div className="hotel-sidebar-map">
                      <a id="hotel_sidebar_static_map" className="jq_tooltip loc_block_link_underline_fix 
map_static_zoom show_map map_static_hover jq_tooltip map_static_button_hoverstate maps-more-static-focus txp-fix-hover
" href="#map_opened-hotel_sidebar_static_map" data-atlas-latlng="15.91961792,108.32995486" data-lang-for-url="vi" data-action="hotel" data-api-key="AIzaSyDXrqUc7k84GZ0W6P5sMFrKFMVIdN-Nd0w" data-atlas-bbox="15.9016524986939,108.311238481316,15.9375833318401,108.348671243415" style={{height: '200px', background: 'url(https://maps.googleapis.com/maps/api/staticmap?channel=hotel&language=vi&center=15.91961792,108.32995486&size=264x200&key=AIzaSyDXrqUc7k84GZ0W6P5sMFrKFMVIdN-Nd0w&zoom=13&signature=z3PoXphVESTsF8ZLz7B-cAMcKRE=) center'}} data-source="map_thumbnail" data-title="Kiểm tra vị trí" data-map-open-text="Quay lại chỗ nghỉ" role="button">
                        <div className="txp-map-cta-wrap">
                          <button className="txp-map-cta bui-button bui-button--primary" data-map-open-text="Quay lại chỗ nghỉ" data-map-thumb-label>
                            <span className="bui-button__text">
                              Hiển thị trên bản đồ
                            </span>
                          </button>
                        </div>
                        <span className="map-thumb__marker--current">
                          <svg className="property-marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 29">
                            <ellipse className="shadow" fill="#000000" fillOpacity="0.24" cx={9} cy={27} rx={6} ry={2} />
                            <path className="pin" d="M9,27 C7,27 0,16.9704016 0,9 C2.28269391e-16,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,16.9704016 11,27 9,27 Z M9,13 C11.209139,13 13,11.209139 13,9 C13,6.790861 11.209139,5 9,5 C6.790861,5 5,6.790861 5,9 C5,11.209139 6.790861,13 9,13 Z" />
                          </svg>
                        </span>
                      </a>
                        
                    </div>
                    
                  </div>
                  <div className="k2-hp--gallery-header bui-grid__column bui-grid__column-9">
                      
                    <div id="wrap-hotelpage-top" className="wrap-hotelpage-top" data-et-view="
MCIAFKKZaTaTaBBUHBaWJHFYNLHXT:2
">
                      <div className="hp__hotel-title pp-header">
                        <div id="hp_hotel_name">
                          <span className="hp__hotel_ratings pp-header__badges" data-et-view="cCcCcCSYeJfaNfPESHbfNFNVBUKcTKe:1 ">
                            
                            
                            <span className="sustainability-badge-mfe-wrapper">
                              <div data-capla-component="b-property-web-property-page/SustainabilityBadge" data-capla-namespace="b-property-web-property-pageGfIAVZXE"><div><span className="d8eab2cf7f c9fccc9041 a7c6818653 d226e198ab"><span className="e2f34d59b1"><div className="d8eab2cf7f cf9ebde7b2 ff07fc41e3"><span data-testid="icon-with-text-icon" className="b6dc9a9e69 e492382468 e25355d3ee" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z" /></svg></span><span className="a51f4b5adb">Chỗ nghỉ Du lịch Bền vững</span></div></span></span></div></div>
                            </span>
                          </span>
                            <div data-capla-component="b-property-web-property-page/PropertyHeaderName" data-capla-namespace="b-property-web-property-pageGfIAVZXE"><div><h2 className="d2fee87262 pp-header__title">{ hotel.hotel_name}</h2></div></div>
                        </div>
                      </div>
                      
                    </div>
                    <div style={{clear: 'both'}} />
                    <div className="hotelchars blockdisplay fbblock pretty_headers hp-consistent-vertical-rhythm" data-tab="main" id="blockdisplay1">
                      <div id="hotel_main_content" className="nha_large_photo_main_content nha_large_photo_extra_height hp_gallery_buttons_redesign hp_gallery_buttons_redesign_var2">
                        <div className=" gallery-side-reviews-wrapper js-no-close " data-component="gallery-side-reviews">
                          <svg className="bk-icon -streamline-arrow_right" height={24} style={{display: 'none'}} width={24} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M.75 12.75h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm12.53 10.28l10.5-10.5a.75.75 0 0 0 0-1.06L13.28.97a.75.75 0 1 0-1.06 1.06l10.5 10.5v-1.06l-10.5 10.5a.75.75 0 1 0 1.06 1.06z" /></svg>
                          <svg className="bk-icon -streamline-arrow_left" height={24} style={{display: 'none'}} width={24} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M23.25 11.25H.75a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5zM10.72.97L.22 11.47a.75.75 0 0 0 0 1.06l10.5 10.5a.75.75 0 1 0 1.06-1.06l-10.5-10.5v1.06l10.5-10.5A.75.75 0 0 0 10.72.97z" /></svg>
                          <div className="clearfix bh-photo-grid fix-score-hover-opacity">
                            <div aria-hidden="true">
                              <a href="#" >
                                <img src={hotel.image} />
                              </a>
                            </div>
                            <div aria-hidden="true">
                              <a href="#" >
                                <img src={hotel.image1} />
                              </a>
                              </div>
                              <div aria-hidden="true">
                              <a href="#" >
                                <img src={hotel.image2} />
                              </a>
                            </div>
                          </div>
                          <div className="bh-photo-modal-backdrop" />
                          <div className="gallery-side-reviews-wrapper__side">
                            <div className="gallery-side-reviews-wrapper__header">
                              <div data-capla-component="b-property-web-property-page/PropertyReviewScoreLeft" data-capla-namespace="b-property-web-property-pageGfIAVZXE"><div><div className="a1b3f50dcd b2fe1a41c3 a1f3ecff04 db7f07f643 d19ba76520 review-score-left d17b3fe5e2"><div aria-label="Đạt điểm 8.3" className="b5cd09854e d10a6220b4">8,3</div><div className="b1e6dd8416 aacd9d0b0a b48795b3df"><div aria-label="Được đánh giá rất tốt" className="b5cd09854e f0d4d6a2f5 e46e88563a"> {/* */}Rất tốt</div><div className="d8eab2cf7f c90c0a70d3 db63693c62">501 đánh giá</div></div></div></div></div>
                            </div>
                         
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  <div className="k2-hp--bh_stripe bui-grid__column-12">
                    <div data-capla-component="b-property-web-property-page/PropertyHighlights" data-capla-namespace="b-property-web-property-pageGfIAVZXE"><div><div data-testid="property-highlights"><div /><div /><div className="db1c39e44a ceb95dad80" role="row"><div data-testid="whole-apartment-block" className="ec680921b4 effc2ba4df ca9e0b0f4a fa32eb5d9a" role="button"><div className="c89be40da5"><div className="e35246b6fb"><span className="b6dc9a9e69 c05d360c4e d05b9c02a2" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M119 65.3l-52-56a4 4 0 0 0-6 0l-52 56a4 4 0 0 0 3 6.7h12v48h24V80h32v40h24V72h12a4 4 0 0 0 3-6.7z" /></svg></span></div></div><div className="db29ecfbe2 c21a2f2d97 fe87d598e8">Căn hộ</div></div><div data-testid="ROOM_45" className="ec680921b4 effc2ba4df ca9e0b0f4a fa32eb5d9a" role="button"><div className="c89be40da5"><div className="e35246b6fb"><span className="b6dc9a9e69 c05d360c4e d05b9c02a2" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M8 40v76a4 4 0 0 0 4 4h104a4 4 0 0 0 4-4V40zm96 56H24V72h80zm0-32H24v-8h80zm12-56H12a4 4 0 0 0-4 4v20h112V12a4 4 0 0 0-4-4zM92 26a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm16 0a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" /></svg></span></div></div><div className="db29ecfbe2 c21a2f2d97 fe87d598e8">Bếp</div></div><div data-testid="ROOM_121" className="ec680921b4 effc2ba4df ca9e0b0f4a fa32eb5d9a" role="button"><div className="c89be40da5"><div className="e35246b6fb"><span className="b6dc9a9e69 c05d360c4e d05b9c02a2" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M24 88h8v16h-8zm0-16h8V56h-8zm32 32h8V88h-8zm0-32h8V56h-8zm0-32h8V24h-8zm64 16v60a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V44a4 4 0 0 1 4-4h28V12a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v58.3l5.2-5.1a4 4 0 0 1 5.6 0l5.2 5.1V56a4 4 0 0 1 .3-1.5l8-20a4 4 0 0 1 7.4 0l8 20a4 4 0 0 1 .3 1.5zM16 112h24V48H16zm32 0h24V16H48v96zm32 0h16V81.7l-8-8-8 8zm32-55.2l-4-10-4 10V112h8z" /></svg></span></div></div><div className="db29ecfbe2 c21a2f2d97 fe87d598e8">Nhìn ra thành phố</div></div><div data-testid="PROPERTY_14" className="ec680921b4 effc2ba4df ca9e0b0f4a fa32eb5d9a" role="button"><div className="c89be40da5"><div className="e35246b6fb"><span className="b6dc9a9e69 c05d360c4e d05b9c02a2" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M116 112H69V80.7a10.5 10.5 0 0 0 5.5-9.2 8.5 8.5 0 0 0-.2-1.7 8.5 8.5 0 0 0 1 1.4 10.5 10.5 0 0 0 14.9-14.9 8.5 8.5 0 0 0-1.4-1 8.5 8.5 0 0 0 1.7.2 10.5 10.5 0 0 0 0-21 8.5 8.5 0 0 0-1.7.2 8.5 8.5 0 0 0 1.4-1 10.5 10.5 0 1 0-14.9-14.9 8.5 8.5 0 0 0-1 1.4 8.5 8.5 0 0 0 .2-1.7 10.5 10.5 0 1 0-21 0 8.5 8.5 0 0 0 .2 1.7 8.5 8.5 0 0 0-1-1.4 10.5 10.5 0 0 0-14.9 14.9 8.5 8.5 0 0 0 1.4 1 8.5 8.5 0 0 0-1.7-.2 10.5 10.5 0 0 0 0 21 8.5 8.5 0 0 0 1.7-.2 8.5 8.5 0 0 0-1.4 1 10.5 10.5 0 0 0 14.9 14.9 8.5 8.5 0 0 0 1-1.4 8.5 8.5 0 0 0-.2 1.7 10.5 10.5 0 0 0 5.5 9.2V112H12a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8zM87.3 68.3a6.5 6.5 0 0 1-9.1 0 42 42 0 0 1-5.1-12 15.6 15.6 0 0 0 2.4-2.2 42.2 42.2 0 0 1 11.8 5 6.5 6.5 0 0 1 0 9.2zM97 45a6.5 6.5 0 0 1-6.5 6.5c-2 0-6.7-2.1-11.3-4.5a15.6 15.6 0 0 0 .4-3.3v-.9c4.4-2.3 9-4.3 11-4.3A6.5 6.5 0 0 1 97 45zM78.2 21.7a6.5 6.5 0 0 1 9.1 9.1 37 37 0 0 1-10.2 4.6 15.6 15.6 0 0 0-3.3-3.8c1.4-4.5 3.1-8.7 4.4-10zM64 12a6.5 6.5 0 0 1 6.5 6.5c0 1.7-1.7 5.8-3.8 9.9a14.7 14.7 0 0 0-5.4 0 35 35 0 0 1-3.8-10A6.5 6.5 0 0 1 64 12zm-23.3 9.7a6.5 6.5 0 0 1 9.1 0 32 32 0 0 1 4.5 9.9 15.6 15.6 0 0 0-3.4 3.8 35 35 0 0 1-10.2-4.6 6.5 6.5 0 0 1 0-9.1zM31 45a6.5 6.5 0 0 1 6.5-6.5c1.9 0 6.5 2 11 4.3v1a15.6 15.6 0 0 0 .3 3.2 38.8 38.8 0 0 1-11.3 4.5A6.5 6.5 0 0 1 31 45zm18.8 23.3a6.5 6.5 0 0 1-9.1-9.1c1.4-1.5 6.7-3.5 11.8-5a15.6 15.6 0 0 0 2.4 2.1 42.1 42.1 0 0 1-5 12zm12.7-9.1h3c2.5 4.8 5 10.2 5 12.3a6.5 6.5 0 0 1-13 0c0-2 2.5-7.4 5-12.3zM48 104q-24 0-24-24 24 0 24 24zm56-24q0 24-24 24 0-24 24-24z" /></svg></span></div></div><div className="db29ecfbe2 c21a2f2d97 fe87d598e8">Sân vườn</div></div><div data-testid="PROPERTY_4" className="ec680921b4 effc2ba4df ca9e0b0f4a fa32eb5d9a" role="button"><div className="c89be40da5"><div className="e35246b6fb"><span className="b6dc9a9e69 c05d360c4e d05b9c02a2" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M61 34c0 9.9-6.3 18-14 18s-14-8.1-14-18 6.3-18 14-18 14 8.1 14 18zm20-18c-7.7 0-14 8.1-14 18s6.3 18 14 18 14-8.1 14-18-6.3-18-14-18zM16.5 47.4c-6.9 2.1-10.3 11-7.6 20S19.4 82.1 26.3 80c6.9-2.1 10.3-11 7.6-20S23.4 45.4 16.5 47.4zM94.2 60c-2.7 9 .7 18 7.6 20 6.9 2.1 14.6-3.6 17.3-12.5s-.7-18-7.6-20C104.6 45.4 96.9 51 94.2 60zM64 104c11.9 0 6.1 8 22 8 4.9-.2 10.9-5.3 11-16 .1-13.8-12.4-34-33-35-20.6 1-33.1 21.2-33 35 .1 10.7 6.1 15.8 11 16 15.9 0 10.1-8 22-8z" /></svg></span></div></div><div className="db29ecfbe2 c21a2f2d97 fe87d598e8">Cho phép mang theo vật nuôi</div></div><div data-testid="PROPERTY_433" className="ec680921b4 effc2ba4df ca9e0b0f4a fa32eb5d9a" role="button"><div className="c89be40da5"><div className="e35246b6fb"><span className="b6dc9a9e69 c05d360c4e d05b9c02a2" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg></span></div></div><div className="db29ecfbe2 c21a2f2d97 fe87d598e8">Hồ bơi</div></div><div data-testid="PROPERTY_72" className="ec680921b4 effc2ba4df ca9e0b0f4a fa32eb5d9a" role="button"><div className="c89be40da5"><div className="e35246b6fb"><span className="b6dc9a9e69 c05d360c4e d05b9c02a2" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M44.1 8.9L48 44a12 12 0 0 1-12 12h-3.6l3.4 59.8a4 4 0 0 1-4 4.2h-7.6a4 4 0 0 1-4-4.2L23.6 56H20A12 12 0 0 1 8 44l3.9-35.1a1 1 0 0 1 1-.9H15a1 1 0 0 1 1 1v19a4 4 0 0 0 4 4h4.8L26 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1l1.2 23H36a4 4 0 0 0 4-4V9a1 1 0 0 1 1-1h2.1a1 1 0 0 1 1 .9zM60 24v48h8l-3.8 43.8a4 4 0 0 0 4 4.2h7.6a4 4 0 0 0 4-4.2L80 8h-4a16 16 0 0 0-16 16zm60 8c0-13.3-7.2-24-16-24S88 18.8 88 32c0 11 5 20.2 11.6 23l-3.4 60.8a4 4 0 0 0 4 4.2h7.6a4 4 0 0 0 4-4.2L108.4 55c6.7-2.8 11.6-12 11.6-23z" /></svg></span></div></div><div className="db29ecfbe2 c21a2f2d97 fe87d598e8">Tiện nghi BBQ</div></div><div data-testid="PROPERTY_107" className="ec680921b4 effc2ba4df ca9e0b0f4a fa32eb5d9a" role="button"><div className="c89be40da5"><div className="e35246b6fb"><span className="b6dc9a9e69 c05d360c4e d05b9c02a2" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><circle cx={64} cy={100} r={12} /><path d="M118.3 32.7A94.9 94.9 0 0 0 64 16 94.9 94.9 0 0 0 9.7 32.7a4 4 0 1 0 4.6 6.6A87 87 0 0 1 64 24a87 87 0 0 1 49.7 15.3 4 4 0 1 0 4.6-6.6zM87.7 68.4a54.9 54.9 0 0 0-47.4 0 4 4 0 0 0 3.4 7.2 47 47 0 0 1 40.6 0 4 4 0 0 0 3.4-7.2z" /><path d="M104 50.5a81.2 81.2 0 0 0-80 0 4 4 0 0 0 4 7 73.2 73.2 0 0 1 72 0 4 4 0 0 0 4-7z" /></svg></span></div></div><div className="db29ecfbe2 c21a2f2d97 fe87d598e8">Wi-Fi miễn phí</div></div><div data-testid="ROOM_123" className="ec680921b4 effc2ba4df ca9e0b0f4a fa32eb5d9a" role="button"><div className="c89be40da5"><div className="e35246b6fb"><span className="b6dc9a9e69 c05d360c4e d05b9c02a2" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M84 116a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h12V52a4 4 0 0 1 8 0v60h12a4 4 0 0 1 4 4zm-36-16a4 4 0 0 0-4-4H22.9l-7.1-21.3a4 4 0 1 0-7.6 2.6l7.5 22.4-7.3 14.5a4 4 0 1 0 7.2 3.6l6.9-13.8H32v12a4 4 0 0 0 8 0v-12h4a4 4 0 0 0 4-4zm64.3-.3l7.5-22.4a4 4 0 0 0-7.6-2.6l-7 21.3H84a4 4 0 0 0 0 8h4v12a4 4 0 0 0 8 0v-12h9.5l7 13.8a4 4 0 0 0 7-3.6zM12.3 40h103.4c3.7 0 5.7-4.1 3.2-6.7C109.8 24 90.4 8 64 8S18.2 24 9.1 33.3C6.6 36 8.6 40 12.3 40z" /></svg></span></div></div><div className="db29ecfbe2 c21a2f2d97 fe87d598e8">Sân hiên</div></div><div data-testid="ROOM_17" className="ec680921b4 effc2ba4df ca9e0b0f4a fa32eb5d9a" role="button"><div className="c89be40da5"><div className="e35246b6fb"><span className="b6dc9a9e69 c05d360c4e d05b9c02a2" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M84 116a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h12V52a4 4 0 0 1 8 0v60h12a4 4 0 0 1 4 4zm-36-16a4 4 0 0 0-4-4H22.9l-7.1-21.3a4 4 0 1 0-7.6 2.6l7.5 22.4-7.3 14.5a4 4 0 1 0 7.2 3.6l6.9-13.8H32v12a4 4 0 0 0 8 0v-12h4a4 4 0 0 0 4-4zm64.3-.3l7.5-22.4a4 4 0 0 0-7.6-2.6l-7 21.3H84a4 4 0 0 0 0 8h4v12a4 4 0 0 0 8 0v-12h9.5l7 13.8a4 4 0 0 0 7-3.6zM12.3 40h103.4c3.7 0 5.7-4.1 3.2-6.7C109.8 24 90.4 8 64 8S18.2 24 9.1 33.3C6.6 36 8.6 40 12.3 40z" /></svg></span></div></div><div className="db29ecfbe2 c21a2f2d97 fe87d598e8">Ban công</div></div></div></div></div></div>
                  </div>
                  <div className="bui-grid__column bui-grid__column-12 js-k2-hp--block k2-hp--desc_highlights">
                    <div className="hp_hotel_description_hightlights_wrapper ">
                      <div className="bui-grid">
                        <div className="bui-grid__column bui-grid__column-8 k2-hp--description">
                          <div className="hp-description k2-hp_main_desc--collapsed" data-et-view="goal:hp_property_description_seen cCcCcCSYeJdXUDUcLSNDJPTRFDZae:2 cCcCcCSYeJdXUDUcLSNDJPTRFDZae:4 cCcCcCSYeJdXUDUcLSNDJPTRFDZae:7 ">
                            <div className="">
                              <div id="summary" className data-et-view>

                                <div id="property_description_content">
                                  {hotel.description}
                                </div>
                              </div>
                              
                              <div className="hp-description__show_more">
                                <a className="b-button b-button_secondary b-button_small">Tôi muốn xem thêm</a>
                              </div>
                            </div>
                          </div>
                          <div className="bui-grid__column bui-grid__column-12 js-k2-hp--block k2-hp--popular_facilities">
                            <div className="hp_desc_important_facilities clearfix hp_desc_important_facilities--bui " data-et-view="goal:hp_d_property_popular_facilities_seen">
                              <h3 className="bui-f-font-heading">
                                Các tiện nghi được ưa chuộng nhất
                              </h3>
                              <div className="important_facility  " data-name-en="Swimming pool">
                                <svg className="bk-icon -iconset-pool hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M8.7 79.2a3.8 3.8 0 0 1 5.5-1.3c21 15 34.5 9 50 2.2 14.5-6.5 30.8-13.7 53.6-1.4a4.5 4.5 0 0 1 1.8 5.9 3.9 3.9 0 0 1-5.4 2c-19.5-10.7-32.8-4.8-47 1.5-8.7 3.9-17.6 7.9-28 7.9A50 50 0 0 1 9.9 85.2a4.6 4.6 0 0 1-1.2-6zm109 15.5c-22.7-12.4-39-5-53.5 1.4-15.5 6.9-29 12.9-50-2.2a3.8 3.8 0 0 0-5.6 1.3 4.6 4.6 0 0 0 1.2 6A50 50 0 0 0 39.3 112c10.3 0 19.2-4 28-7.9 14-6.3 27.4-12.2 46.9-1.6a3.9 3.9 0 0 0 5.4-2 4.5 4.5 0 0 0-1.8-5.8zM100 56a12 12 0 1 0-12-12 12 12 0 0 0 12 12zM64.2 72c7.2-3.3 15.2-7 23.8-8.2 0 0-4-8.8-6.8-13.9l-18-29.2c-2.5-4.3-7.5-6-13.5-3.6L27.9 26a6.2 6.2 0 0 0-3.5 7.8 6 6 0 0 0 8 3.4L50 29.7a4 4 0 0 1 5 1.7l6 13.2L24 72c17.6 9.8 26.3 6.3 40.3 0z" /></svg>
                                2 hồ bơi
                              </div>
                              <div className="
important_facility  " data-name-en="Free WiFi Internet Access Included">
                                <svg className="bk-icon -iconset-wifi hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><circle cx={64} cy={100} r={12} /><path d="M118.3 32.7A94.9 94.9 0 0 0 64 16 94.9 94.9 0 0 0 9.7 32.7a4 4 0 1 0 4.6 6.6A87 87 0 0 1 64 24a87 87 0 0 1 49.7 15.3 4 4 0 1 0 4.6-6.6zM87.7 68.4a54.9 54.9 0 0 0-47.4 0 4 4 0 0 0 3.4 7.2 47 47 0 0 1 40.6 0 4 4 0 0 0 3.4-7.2z" /><path d="M104 50.5a81.2 81.2 0 0 0-80 0 4 4 0 0 0 4 7 73.2 73.2 0 0 1 72 0 4 4 0 0 0 4-7z" /></svg>
                                Wi-Fi miễn phí
                              </div>
                              <div className="
important_facility  " data-name-en="Airport Shuttle">
                                <svg className="bk-icon -iconset-shuttle hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M92 100a10 10 0 1 1-10 10 10 10 0 0 1 10-10zm-66 10a10 10 0 1 0 10-10 10 10 0 0 0-10 10zM16 56h88.2a8 8 0 0 1 7.6 5.5l7.8 26.3a8 8 0 0 1 .4 2.5V106a6 6 0 0 1-6 6h-6.1a16 16 0 1 0-31.8 0H52a16 16 0 1 0-31.8 0H16a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8zm72 24l25 8-7-24H88zm-24 0h16V64H64zm-24 0h16V64H40zm-24 0h16V64H16zm28.2-44.6l8 4.5 4.4 8a.4.4 0 0 0 .6 0l1-1a.4.4 0 0 0 0-.3V37l6.5-5.9L76.1 46a1.4 1.4 0 0 0 2 .4l1-.5a1.4 1.4 0 0 0 .5-1.8L72 24.2l9-8.4a10.2 10.2 0 0 0 3-6.4A1.4 1.4 0 0 0 82.6 8a10.2 10.2 0 0 0-6.5 2.9L67.6 20l-19.8-7.5a1.4 1.4 0 0 0-1.8.6l-.5 1A1.4 1.4 0 0 0 46 16l15 11.5-5.8 6.2h-9.7a.4.4 0 0 0-.3.1l-1 1a.4.4 0 0 0 0 .6z" /></svg>
                                Xe đưa đón sân bay
                              </div>
                              <div className="
important_facility  " data-name-en="Family Rooms">
                                <svg className="bk-icon -iconset-family hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M18 18a10 10 0 1 1 10 10 10 10 0 0 1-10-10zm26 16s-9.8-2-16-2-16 2-16 2c-4 1-4.3 3.4-4 6l3.4 30.5a4.3 4.3 0 0 0 1.3 2.6l1.8 1.8a4.3 4.3 0 0 1 1.3 2.7l3.6 38.4a4.4 4.4 0 0 0 4.5 4h8.2a4.4 4.4 0 0 0 4.5-4L40 77.6a4.3 4.3 0 0 1 1.3-2.7l1.9-1.8a4.3 4.3 0 0 0 1.2-2.6L48 40c.3-2.6.1-5-3.9-6zm20 23a8 8 0 1 0-8-8 8 8 0 0 0 8 8zm11.2 2.4A73.6 73.6 0 0 0 64 58a73.6 73.6 0 0 0-11.2 1.4c-2.8.7-3 2.3-2.7 4.1l2.3 21a3 3 0 0 0 1 1.9l1.2 1.2a3 3 0 0 1 1 2l2.4 27.7a3.1 3.1 0 0 0 3.1 2.7H67a3.1 3.1 0 0 0 3.1-2.8l2.5-27.7a3 3 0 0 1 1-1.9l1.2-1.2a3 3 0 0 0 .9-1.8l2.4-21c.2-1.9 0-3.5-2.8-4.2zM100 28a10 10 0 1 0-10-10 10 10 0 0 0 10 10zm16 6s-9.8-2-16-2-16 2-16 2c-4 1-4.3 3.4-4 6l3.4 30.5a4.3 4.3 0 0 0 1.3 2.6l1.8 1.8a4.3 4.3 0 0 1 1.3 2.7l3.6 38.4a4.4 4.4 0 0 0 4.5 4h8.2a4.4 4.4 0 0 0 4.4-4l3.6-38.4a4.3 4.3 0 0 1 1.3-2.7l1.8-1.8a4.3 4.3 0 0 0 1.3-2.6L120 40c.3-2.6.1-5-3.9-6z" /></svg>
                                Phòng gia đình
                              </div>
                              <div className="
important_facility  " data-name-en="Beach front">
                                <svg className="bk-icon -iconset-beach hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M117.3 112.2h-.2a203 203 0 0 0-69.1-8V72h32v-4a36 36 0 0 0-32-35.8V28a4 4 0 0 0-8 0v4.2A36 36 0 0 0 8 68v4h32v33a125.5 125.5 0 0 0-29.4 7.3 4 4 0 1 0 2.8 7.4c44-16.9 95.6-1.7 101.3.1a4.5 4.5 0 0 0 1.4.2 4 4 0 0 0 3.7-2.7 4 4 0 0 0-2.5-5zM36.2 64A56.6 56.6 0 0 1 44 41.2 56.6 56.6 0 0 1 51.8 64zm35.5 0H59.8a61.6 61.6 0 0 0-6.4-22.4A28 28 0 0 1 71.7 64zm-37-22.4A61.6 61.6 0 0 0 28.1 64h-12a28 28 0 0 1 18.4-22.4zM116 112a4 4 0 0 0-.8 0 3.7 3.7 0 0 1 1.9.1 4 4 0 0 0-1.1-.1zM96 16.5A15.4 15.4 0 0 1 98.5 8H120v21.4a15.5 15.5 0 0 1-24-13zM76 17c0-2.5 7.4-3.5 9.4-7.1A5.6 5.6 0 0 0 85 8h7a21.9 21.9 0 0 0 28 29.3v6.4a4.8 4.8 0 0 0-.9 0c-3.6 2-4.7 9.3-7.1 9.3s-3.5-7.4-7.1-9.4c-4.2 0-8.8 5.9-10.9 4.6s.7-8.1-1.5-11.7C89 34.3 82 37.1 80.8 35s4.6-6.7 4.6-10.9c-2-3.6-9.5-4.7-9.4-7.1z" /></svg>
                                Giáp biển
                              </div>
                              <div className="
important_facility  " data-name-en="Bar">
                                <svg className="bk-icon -iconset-bar hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><rect x={60} y={74} width={8} height={44} /><rect x={60} y={94} width={8} height={40} rx={4} ry={4} transform="rotate(-90 64 114)" /><path d="M100 34H28a4 4 0 0 0-3.2 6.4l36 48a4 4 0 0 0 6.4 0l36-48A4 4 0 0 0 100 34zM78.7 61.7H49.3l-16-21.2h61.4z" /><rect x="75.5" y="-1.4" width={6} height="81.9" rx={3} ry={3} transform="rotate(36.31 78.487 39.584)" /><circle cx="90.6" cy="21.9" r={8} /></svg>
                                Quầy bar
                              </div>
                            </div>
                          </div>
                          <div className="bui-grid__column bui-grid__column-12 js-k2-hp--block k2-hp--atm_currency">
                          </div>
                        </div>
                        <div className="bui-grid__column bui-grid__column-4 k2-hp--highlights">
                          <div className="property_hightlights_wrapper k2_property_hightlights_wrapper">
                            <div className="property-highlights ph-icon-fill-color">
                              <h3 className="bui-f-font-heading">
                                Địa Chỉ
                              </h3>
                              <div className="ph-section">
                                <div className="ph-content ">
                                  <p className="ph-item contextual-reviews-trigger">
                                    <span className="ph-icon-container ph-icon-container-top-location" aria-hidden="true">
                                      <i className="ph-icon ph-icon-top-location bicon-">낍</i>
                                    </span>
                                    <span className="ph-item-copy ">
                                        <span className="ph-item-copy-top-location">{hotel.address}</span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              
                              
                              <div className="ph-footer">
                                <button className=" txp-sidebar-cta bui-button bui-button--primary 
                                  call_to_action--wide js-ph__cta
                                  px--fw-cta
                                  "  type="submit"
                                  
                                  >
                                  <span className="bui-button__text">
                                    Đặt ngay
                                  </span>
                                </button>

                              </div>
                            </div>
                            <div data-et-view="NAREFcCcCcCDSRKBNHNdBaaafECHTeUVIZdRRT:3">
                              <div className="reliable-information">
                                <div data-capla-component="b-property-web-property-page/ReliableInformation" data-capla-namespace="b-property-web-property-pageGfIAVZXE"><div><div className="cc2ff71ac3 reliable-information__card" data-testid="reliable-information"><div className="f9afbb0024 cf9ebde7b2 ff07fc41e3 b623d35807"><span data-testid="icon-with-text-icon" className="b6dc9a9e69 e492382468 e25355d3ee" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z" /></svg></span><span className="a51f4b5adb">Thông tin uy tín</span></div><div className="d8eab2cf7f bea32c6cd3">Khách nói rằng mô tả và hình ảnh chỗ nghỉ này <strong>đúng với sự thật</strong>.</div></div></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bui-grid__column bui-grid__column-12">
                    <hr className="bui-divider" />
                  </div>
                  <div className="bui-grid__column bui-grid__column-12 js-k2-hp--block k2-hp--rt">
                    <div id="hp_availability_style_changes" className="var-1 has-no-dates ">
                      <a name="availability" />
                      <div className="hp-section-header hp-section-header--with-badge " data-et-view="eWHMcCcCcCWEYcZbCWAdMffRWXFZEVC:1 eWHMcCcCcCWEYcZbCWAdMffRWXFZEVC:4 ">
                        <h2 className="hp-dates-summary__header" id="availability_target" name="availability_target">
                          Phòng trống
                        </h2>
                        </div>
                        
                        {/* list room */}
                         {
                          hotel.room_types.length > 0 && 
                          hotel.room_types?.map((item) => (
                            <div
                                data-testid="property-card"
                                className="a826ba81c4 fe821aea6c fa2f36ad22 afd256fc79 d08f526e0d ed11e24d01 ef9845d4b3 da89aeb942"
                                style={{ 
                                  display: 'flex',
                                  margin: '5px 0'
                                }}
                              >
                                <div className="left-img">
                                  <img
                                    style={{ height:'200px' , width:'200px' , objectFit: 'cover' }}
                                    src="https://cf.bstatic.com/xdata/images/hotel/square200/400243095.jpg?k=dc3a55cab11193f26d8aef7fb9ac09e036959401365631be0aaf885dab31d824&o=" alt="" />
                                </div>
                                <div className="right-img">
                                <span style={{ 
                                    float: 'right'
                                  }}>
                                    <b>
                                      <i>3 phong trong</i>
                                    </b>
                                  </span>
                                  <h3 className="title-room">{item.type_room_name}</h3>
                                  <div className="item-h" style={{ display: 'flex' , justifyContent : 'space-around' }}>
                                  <ul className="item-hotel">
                                    <li>Mien Phi Bua Sang</li>
                                    <li>Mien Phi Bua Sang</li>
                                    <li>Mien Phi Bua Sang</li>
                                    <li>Mien Phi Bua Sang</li>
                                    <li>Mien Phi Bua Sang</li>
                                    <li>Mien Phi Bua Sang</li>
                                    <li>Mien Phi Bua Sang</li>
                                    </ul>
                                    <div className="price-hotel">
                                    <span className="cb5ebe3ffb">
                                      <div className="">
                                        <b>{item.price}</b>
                                        <span>/  phòng /  đêm</span>
                                        </div>
                                      <button
                                        type="button"
                                          className="fc63351294 a822bdf511 d4b6b7a9e7 f7db01295e f4605622ad"
                                          style={{ 
                                            marginTop: '60px'
                                          }}
                                      >
                                        <span className="e57ffa4eb5" onClick={()=>handleSubmit(item.id)}>Đặt Ngay</span>
                                      </button>
                                    </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          ))
                        } 
                        
                      {/* list room */}

                    </div>
                  </div>

                 
                  <div className="bui-grid__column bui-grid__column-12 js-k2-hp--block k2-hp--facilities_and_policies">
                    <section className="hotel-facilities" id="hp_facilities_box">
                      <div id="HotelFacilities" className="hotel-facilities__header bui-spacer--larger">
                        <div className="bui-title hotel-facilities__header_title">
                          <strong className="bui-title__text bui-f-font-display_two">
                            Các tiện nghi của Citadines Pearl Hoi An
                          </strong>
                        </div>
                      </div>
                      <div className="hotel-facilities__most-popular bui-spacer--larger">
                        <div className="hp_desc_important_facilities clearfix hp_desc_important_facilities--bui " data-et-view="goal:hp_d_property_popular_facilities_seen">
                          <h3 className="bui-f-font-heading">
                            Các tiện nghi được ưa chuộng nhất
                          </h3>
                          <div className="important_facility  " data-name-en="Swimming pool">
                            <svg className="bk-icon -iconset-pool hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M8.7 79.2a3.8 3.8 0 0 1 5.5-1.3c21 15 34.5 9 50 2.2 14.5-6.5 30.8-13.7 53.6-1.4a4.5 4.5 0 0 1 1.8 5.9 3.9 3.9 0 0 1-5.4 2c-19.5-10.7-32.8-4.8-47 1.5-8.7 3.9-17.6 7.9-28 7.9A50 50 0 0 1 9.9 85.2a4.6 4.6 0 0 1-1.2-6zm109 15.5c-22.7-12.4-39-5-53.5 1.4-15.5 6.9-29 12.9-50-2.2a3.8 3.8 0 0 0-5.6 1.3 4.6 4.6 0 0 0 1.2 6A50 50 0 0 0 39.3 112c10.3 0 19.2-4 28-7.9 14-6.3 27.4-12.2 46.9-1.6a3.9 3.9 0 0 0 5.4-2 4.5 4.5 0 0 0-1.8-5.8zM100 56a12 12 0 1 0-12-12 12 12 0 0 0 12 12zM64.2 72c7.2-3.3 15.2-7 23.8-8.2 0 0-4-8.8-6.8-13.9l-18-29.2c-2.5-4.3-7.5-6-13.5-3.6L27.9 26a6.2 6.2 0 0 0-3.5 7.8 6 6 0 0 0 8 3.4L50 29.7a4 4 0 0 1 5 1.7l6 13.2L24 72c17.6 9.8 26.3 6.3 40.3 0z" /></svg>
                            2 hồ bơi
                          </div>
                          <div className="
important_facility  " data-name-en="Free WiFi Internet Access Included">
                            <svg className="bk-icon -iconset-wifi hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><circle cx={64} cy={100} r={12} /><path d="M118.3 32.7A94.9 94.9 0 0 0 64 16 94.9 94.9 0 0 0 9.7 32.7a4 4 0 1 0 4.6 6.6A87 87 0 0 1 64 24a87 87 0 0 1 49.7 15.3 4 4 0 1 0 4.6-6.6zM87.7 68.4a54.9 54.9 0 0 0-47.4 0 4 4 0 0 0 3.4 7.2 47 47 0 0 1 40.6 0 4 4 0 0 0 3.4-7.2z" /><path d="M104 50.5a81.2 81.2 0 0 0-80 0 4 4 0 0 0 4 7 73.2 73.2 0 0 1 72 0 4 4 0 0 0 4-7z" /></svg>
                            Wi-Fi miễn phí
                          </div>
                          <div className="
important_facility  " data-name-en="Airport Shuttle">
                            <svg className="bk-icon -iconset-shuttle hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M92 100a10 10 0 1 1-10 10 10 10 0 0 1 10-10zm-66 10a10 10 0 1 0 10-10 10 10 0 0 0-10 10zM16 56h88.2a8 8 0 0 1 7.6 5.5l7.8 26.3a8 8 0 0 1 .4 2.5V106a6 6 0 0 1-6 6h-6.1a16 16 0 1 0-31.8 0H52a16 16 0 1 0-31.8 0H16a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8zm72 24l25 8-7-24H88zm-24 0h16V64H64zm-24 0h16V64H40zm-24 0h16V64H16zm28.2-44.6l8 4.5 4.4 8a.4.4 0 0 0 .6 0l1-1a.4.4 0 0 0 0-.3V37l6.5-5.9L76.1 46a1.4 1.4 0 0 0 2 .4l1-.5a1.4 1.4 0 0 0 .5-1.8L72 24.2l9-8.4a10.2 10.2 0 0 0 3-6.4A1.4 1.4 0 0 0 82.6 8a10.2 10.2 0 0 0-6.5 2.9L67.6 20l-19.8-7.5a1.4 1.4 0 0 0-1.8.6l-.5 1A1.4 1.4 0 0 0 46 16l15 11.5-5.8 6.2h-9.7a.4.4 0 0 0-.3.1l-1 1a.4.4 0 0 0 0 .6z" /></svg>
                            Xe đưa đón sân bay
                          </div>
                          <div className="
important_facility  " data-name-en="Family Rooms">
                            <svg className="bk-icon -iconset-family hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M18 18a10 10 0 1 1 10 10 10 10 0 0 1-10-10zm26 16s-9.8-2-16-2-16 2-16 2c-4 1-4.3 3.4-4 6l3.4 30.5a4.3 4.3 0 0 0 1.3 2.6l1.8 1.8a4.3 4.3 0 0 1 1.3 2.7l3.6 38.4a4.4 4.4 0 0 0 4.5 4h8.2a4.4 4.4 0 0 0 4.5-4L40 77.6a4.3 4.3 0 0 1 1.3-2.7l1.9-1.8a4.3 4.3 0 0 0 1.2-2.6L48 40c.3-2.6.1-5-3.9-6zm20 23a8 8 0 1 0-8-8 8 8 0 0 0 8 8zm11.2 2.4A73.6 73.6 0 0 0 64 58a73.6 73.6 0 0 0-11.2 1.4c-2.8.7-3 2.3-2.7 4.1l2.3 21a3 3 0 0 0 1 1.9l1.2 1.2a3 3 0 0 1 1 2l2.4 27.7a3.1 3.1 0 0 0 3.1 2.7H67a3.1 3.1 0 0 0 3.1-2.8l2.5-27.7a3 3 0 0 1 1-1.9l1.2-1.2a3 3 0 0 0 .9-1.8l2.4-21c.2-1.9 0-3.5-2.8-4.2zM100 28a10 10 0 1 0-10-10 10 10 0 0 0 10 10zm16 6s-9.8-2-16-2-16 2-16 2c-4 1-4.3 3.4-4 6l3.4 30.5a4.3 4.3 0 0 0 1.3 2.6l1.8 1.8a4.3 4.3 0 0 1 1.3 2.7l3.6 38.4a4.4 4.4 0 0 0 4.5 4h8.2a4.4 4.4 0 0 0 4.4-4l3.6-38.4a4.3 4.3 0 0 1 1.3-2.7l1.8-1.8a4.3 4.3 0 0 0 1.3-2.6L120 40c.3-2.6.1-5-3.9-6z" /></svg>
                            Phòng gia đình
                          </div>
                          <div className="
important_facility  " data-name-en="Beach front">
                            <svg className="bk-icon -iconset-beach hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M117.3 112.2h-.2a203 203 0 0 0-69.1-8V72h32v-4a36 36 0 0 0-32-35.8V28a4 4 0 0 0-8 0v4.2A36 36 0 0 0 8 68v4h32v33a125.5 125.5 0 0 0-29.4 7.3 4 4 0 1 0 2.8 7.4c44-16.9 95.6-1.7 101.3.1a4.5 4.5 0 0 0 1.4.2 4 4 0 0 0 3.7-2.7 4 4 0 0 0-2.5-5zM36.2 64A56.6 56.6 0 0 1 44 41.2 56.6 56.6 0 0 1 51.8 64zm35.5 0H59.8a61.6 61.6 0 0 0-6.4-22.4A28 28 0 0 1 71.7 64zm-37-22.4A61.6 61.6 0 0 0 28.1 64h-12a28 28 0 0 1 18.4-22.4zM116 112a4 4 0 0 0-.8 0 3.7 3.7 0 0 1 1.9.1 4 4 0 0 0-1.1-.1zM96 16.5A15.4 15.4 0 0 1 98.5 8H120v21.4a15.5 15.5 0 0 1-24-13zM76 17c0-2.5 7.4-3.5 9.4-7.1A5.6 5.6 0 0 0 85 8h7a21.9 21.9 0 0 0 28 29.3v6.4a4.8 4.8 0 0 0-.9 0c-3.6 2-4.7 9.3-7.1 9.3s-3.5-7.4-7.1-9.4c-4.2 0-8.8 5.9-10.9 4.6s.7-8.1-1.5-11.7C89 34.3 82 37.1 80.8 35s4.6-6.7 4.6-10.9c-2-3.6-9.5-4.7-9.4-7.1z" /></svg>
                            Giáp biển
                          </div>
                          <div className="
important_facility  " data-name-en="Bar">
                            <svg className="bk-icon -iconset-bar hp__important_facility_icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><rect x={60} y={74} width={8} height={44} /><rect x={60} y={94} width={8} height={40} rx={4} ry={4} transform="rotate(-90 64 114)" /><path d="M100 34H28a4 4 0 0 0-3.2 6.4l36 48a4 4 0 0 0 6.4 0l36-48A4 4 0 0 0 100 34zM78.7 61.7H49.3l-16-21.2h61.4z" /><rect x="75.5" y="-1.4" width={6} height="81.9" rx={3} ry={3} transform="rotate(36.31 78.487 39.584)" /><circle cx="90.6" cy="21.9" r={8} /></svg>
                            Quầy bar
                          </div>
                        </div>
                      </div>
                      <div data-et-view=" NABcJMTUSEDFRAOAcEUFRURURHe:1  NABcJMTUSEDFRAOAcEUFRURURHe:3  " />
                      <div data-et-view="eWfaQRAOAcEUFQLNHRbdFIKe:2" />
                      <div className="hotel-facilities__list">
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={5}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-bath" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M12.75 15h10.5l-.74-.873-.664 3.986a5.25 5.25 0 0 1-5.179 4.387H7.333a5.25 5.25 0 0 1-5.18-4.387l-.663-3.986L.75 15h4.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0-.74.873l.664 3.986A6.75 6.75 0 0 0 7.334 24h9.333a6.75 6.75 0 0 0 6.659-5.64l.664-3.987a.75.75 0 0 0-.74-.873h-10.5a.75.75 0 0 0 0 1.5zM12 19.5H6v-5.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v5.25zm0 1.5a1.5 1.5 0 0 0 1.5-1.5v-5.25A2.25 2.25 0 0 0 11.25 12h-4.5a2.25 2.25 0 0 0-2.25 2.25v5.25A1.5 1.5 0 0 0 6 21h6zm4.5-17.25a2.25 2.25 0 0 1 4.5 0v10.5a.75.75 0 0 0 1.5 0V3.75a3.75 3.75 0 1 0-7.5 0 .75.75 0 0 0 1.5 0zm-3 3a2.25 2.25 0 0 1 4.5 0l.75-.75h-6l.75.75zm-1.5 0c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75 3.75 3.75 0 1 0-7.5 0z" /></svg></span>Phòng tắm
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Giấy vệ sinh
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Khăn tắm
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Toilet phụ
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Dép
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Phòng tắm riêng
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Nhà vệ sinh
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Đồ vệ sinh cá nhân miễn phí
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Máy sấy tóc
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Vòi sen
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={17}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-bed" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z" /></svg></span>Phòng ngủ
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Ra trải giường
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Tủ hoặc phòng để quần áo
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={13}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-garden" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M5.361 6.625a6.75 6.75 0 0 0 7.413 6.721 6.93 6.93 0 0 0 6.087-6.988V2.125a1.5 1.5 0 0 0-2.4-1.2l-1.8 1.35h.9L13.461.7c-.8-.6-1.9-.6-2.7 0l-2.1 1.575h.9l-1.8-1.35a1.5 1.5 0 0 0-2.4 1.2v4.5zm1.5 0v-4.5l1.8 1.35c.267.2.633.2.9 0l2.1-1.575a.75.75 0 0 1 .9 0l2.1 1.575c.267.2.633.2.9 0l1.8-1.35V6.37a5.428 5.428 0 0 1-4.754 5.486 5.25 5.25 0 0 1-5.746-5.23zm4.5 6v10.5a.75.75 0 0 0 1.5 0v-10.5a.75.75 0 0 0-1.5 0zm-5.359 3.811c1.473.285 2.458 1.077 2.374 1.51-.084.432-1.292.801-2.765.516-1.473-.284-2.458-1.076-2.374-1.51.084-.432 1.292-.8 2.765-.516zm.285-1.473c-2.179-.42-4.233.206-4.523 1.705-.29 1.5 1.383 2.846 3.562 3.267 2.179.421 4.233-.205 4.523-1.705.29-1.5-1.383-2.846-3.562-3.267zm14.699 2.09c.084.434-.9 1.226-2.374 1.51-1.473.285-2.681-.084-2.765-.516-.084-.433.9-1.226 2.374-1.51 1.473-.285 2.681.084 2.765.517zm1.473-.284c-.29-1.5-2.344-2.126-4.523-1.705-2.178.421-3.851 1.767-3.562 3.267.29 1.5 2.344 2.126 4.523 1.705 2.179-.42 3.852-1.767 3.562-3.267z" /></svg></span>Ngoài trời
                              </div>
                              <span className="bui-title__subtitle">Thoải mái thư giãn</span>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Khu vực picnic
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bàn ghế ngoài trời
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Giáp biển
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Sân hiên phơi nắng
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Khu vực bãi tắm riêng
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Tiện nghi BBQ
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Ban công
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Sân thượng/ hiên
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Sân vườn
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={12}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-oven" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M2.25 2.25h19.5L21 1.5v21l.75-.75H2.25l.75.75v-21l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v21c0 .414.336.75.75.75h19.5a.75.75 0 0 0 .75-.75v-21a.75.75 0 0 0-.75-.75H2.25zm-1.5 1.5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm0 21h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM18 15v3.539a.211.211 0 0 1-.211.211H6.211A.211.211 0 0 1 6 18.539v-7.078c0-.117.094-.211.211-.211h11.578c.116 0 .211.095.211.211V15zm1.5 0v-3.539a1.71 1.71 0 0 0-1.711-1.711H6.211c-.945 0-1.711.766-1.711 1.711v7.078c0 .945.766 1.711 1.711 1.711h11.578a1.71 1.71 0 0 0 1.711-1.711V15zM9 14.25h6a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zM5.25 4.875a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm3 0a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm-6 3.375h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zm11.25-3h5.25a.75.75 0 0 0 0-1.5H13.5a.75.75 0 0 0 0 1.5z" /></svg></span>Nhà bếp
                              </div>
                              <span className="bui-title__subtitle">Ăn bất cứ khi nào bạn muốn</span>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Ấm đun nước điện
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bếp nhỏ
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={4}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-bed_single" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM12 15h8.5c.69 0 1.25.56 1.25 1.25v2.5l.75-.75H12l.75.75v-4.5L12 15zm0-1.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-2.5a2.75 2.75 0 0 0-2.75-2.75H12zm-10.5 6h21l-.75-.75v3l.75-.75h-21l.75.75v-3l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h21a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-21zm.75 5.25v-9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0zm21 0v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM19.4 6.001L19.403 6H15.1v.001l.562-4.5V1.5h3.176L19.4 6zm1.49-.187l-.564-4.5A1.5 1.5 0 0 0 18.838 0h-3.176a1.5 1.5 0 0 0-1.488 1.314l-.563 4.5A1.499 1.499 0 0 0 15.102 7.5H19.4a1.499 1.499 0 0 0 1.49-1.687zm-4.39.936v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-1.5 0z" /></svg></span>Tiện ích trong phòng
                              </div>
                              <span className="bui-title__subtitle">Tăng sự thoải mái</span>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Ổ điện gần giường
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Hệ thống cách âm
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Quạt máy
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={9}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-tree" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M23.25 11.248a5.99 5.99 0 0 0-3.486-5.43l.423.82a3.704 3.704 0 0 0-3.699-4.388 1.27 1.27 0 0 0-.184.015l-.016.002c-.029.004-.024.004-.02.004l.047.748.618-.425a5.987 5.987 0 0 0-9.866 0l.618.425.048-.748c.003 0 .007 0-.021-.004l-.016-.002A1.311 1.311 0 0 0 7.5 2.25a3.701 3.701 0 0 0-3.687 4.389L4.55 6.5l-.313-.681a5.989 5.989 0 0 0 1.264 11.3l-.526-.419a4.832 4.832 0 0 0 7.51 1.654L12 17.782l-.485.572a4.832 4.832 0 0 0 7.51-1.657l-.681-.315.156.734a5.998 5.998 0 0 0 4.75-5.866zm-1.5.002a4.498 4.498 0 0 1-3.562 4.398.75.75 0 0 0-.525.42 3.333 3.333 0 0 1-5.178 1.142.75.75 0 0 0-.97 0 3.332 3.332 0 0 1-5.179-1.14.75.75 0 0 0-.525-.419 4.489 4.489 0 0 1-.947-8.47.75.75 0 0 0 .423-.82A2.204 2.204 0 0 1 7.488 3.75h.001l.012.003c.05.007.089.011.136.014a.75.75 0 0 0 .666-.323 4.487 4.487 0 0 1 7.394 0 .75.75 0 0 0 .666.323c.047-.003.087-.007.136-.014l.012-.002c.008-.001.005-.001-.011-.001a2.204 2.204 0 0 1 2.213 2.611.75.75 0 0 0 .424.82 4.49 4.49 0 0 1 2.613 4.07zm-10.5-3v15a.75.75 0 0 0 1.5 0v-15a.75.75 0 0 0-1.5 0zm.75 7.5c3.414 0 5.25-1.836 5.25-5.25a.75.75 0 0 0-1.5 0c0 2.586-1.164 3.75-3.75 3.75a.75.75 0 0 0 0 1.5zm-.045-4.499a2.793 2.793 0 0 1-2.956-2.956.75.75 0 0 0-1.498-.09 4.295 4.295 0 0 0 4.544 4.544.75.75 0 1 0-.09-1.498z" /></svg></span>Ngoài trời &amp; Tầm nhìn
                              </div>
                              <span className="bui-title__subtitle">Hãy tận hưởng tầm nhìn này nhé</span>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Nhìn ra thành phố
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Nhìn ra vườn
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Tầm nhìn ra khung cảnh
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={8}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-concierge" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M14.244 14.156a6.75 6.75 0 0 0-6.75-5.906A6.747 6.747 0 0 0 .73 14.397a.75.75 0 0 0 1.494.134 5.25 5.25 0 0 1 5.27-4.781 5.253 5.253 0 0 1 5.262 4.594.75.75 0 1 0 1.488-.188zM10.125 4.125a2.625 2.625 0 1 1-5.25 0V1.5h5.25v2.625zm1.5 0V1.5a1.5 1.5 0 0 0-1.5-1.5h-5.25a1.5 1.5 0 0 0-1.5 1.5v2.625a4.125 4.125 0 0 0 8.25 0zM23.25 22.5H.75l.75.75v-7.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v7.5l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-7.5a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 15.75v7.5c0 .414.336.75.75.75h22.5zM4.376 5.017a9.42 9.42 0 0 1 3.12-.517 9.428 9.428 0 0 1 3.133.519.75.75 0 0 0 .49-1.418A10.917 10.917 0 0 0 7.498 3a10.91 10.91 0 0 0-3.611.6.75.75 0 0 0 .49 1.417zM15.75 14.27a3.001 3.001 0 0 1 6 .16.75.75 0 1 0 1.5.04 4.501 4.501 0 1 0-9-.24.75.75 0 1 0 1.5.04zm3.75-3.77V8.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0zM17.25 9h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z" /></svg></span>Dịch vụ &amp; Khoản phụ
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Dịch vụ báo thức
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={-2}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-pawprint" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" /></svg></span>Vật nuôi
                              </div>
                            </div>
                            <div className="bui-spacer--medium hotel-facilities-group__policy">
                              Vật nuôi được phép theo yêu cầu của khách. Có thể bị tính phí.
                            </div>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={2}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-sports_golf" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M6 11.019V.75l-1.085.67L9.13 3.53a.236.236 0 0 1-.001-.422l-1.965.982a.75.75 0 0 0 .67 1.342l1.966-.983a1.264 1.264 0 0 0 .001-2.26L5.585.079A.75.75 0 0 0 4.5.75v10.269a.75.75 0 0 0 1.5 0zm16.506-5.116l-2.165 16.6h-2.716a1.125 1.125 0 0 1 0-2.25c.535 0 1.051.201 1.445.564l1.623 1.487a.75.75 0 1 0 1.014-1.106l-1.622-1.486a3.632 3.632 0 0 0-2.46-.959 2.625 2.625 0 0 0 0 5.25h2.717a1.5 1.5 0 0 0 1.487-1.306l2.165-16.6a.75.75 0 1 0-1.488-.194zM12 21a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0A2.25 2.25 0 1 0 9 21a2.25 2.25 0 0 0 4.5 0zM8.204 9.022c3.054.187 5.296 1.57 5.296 2.978 0 1.538-2.631 3-6 3s-6-1.462-6-3c.055-.68.475-1.34 1.12-1.704a.75.75 0 0 0-.74-1.306 3.721 3.721 0 0 0-1.878 2.952C0 14.604 3.412 16.5 7.5 16.5c4.087 0 7.5-1.896 7.5-4.5 0-2.42-2.96-4.246-6.704-4.476a.75.75 0 1 0-.092 1.498z" /></svg></span>Hoạt động
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Sự kiện thể thao (truyền hình trực tiếp)
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Lớp dạy nấu ăn
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Tour/lớp về văn hóa địa phương
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bữa tối theo chủ đề
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bãi biển
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Thiết bị dành cho cầu lông
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Thiết bị dành cho tennis
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Đi bộ đường dài
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Sân gôn (trong vòng 3km)
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Sân tennis
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={15}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-couch" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M21.75 8.625a2.25 2.25 0 0 0-2.25 2.25v1.5h-15v-1.5a2.25 2.25 0 0 0-4.5 0v3a3.75 3.75 0 0 0 3.75 3.75h16.5a3.75 3.75 0 0 0 3.75-3.75v-3a2.25 2.25 0 0 0-2.25-2.25zm0 1.5a.75.75 0 0 1 .75.75v3a2.25 2.25 0 0 1-2.25 2.25H3.75a2.25 2.25 0 0 1-2.25-2.25v-3a.75.75 0 0 1 1.5 0v1.5a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-1.5a.75.75 0 0 1 .75-.75zM3 16.875v2.25a.75.75 0 0 0 1.5 0v-2.25a.75.75 0 0 0-1.5 0zm16.5 0v2.25a.75.75 0 0 0 1.5 0v-2.25a.75.75 0 0 0-1.5 0zM3 9.375a3.75 3.75 0 0 1 3.75-3.75h10.5A3.75 3.75 0 0 1 21 9.375a.75.75 0 0 0 1.5 0c0-2.9-2.35-5.25-5.25-5.25H6.75a5.25 5.25 0 0 0-5.25 5.25.75.75 0 0 0 1.5 0zm9.75 3.75v-8.25a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0z" /></svg></span>Khu vực phòng khách
                              </div>
                              <span className="bui-title__subtitle">Không gian để mọi người quây quần</span>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Khu vực tiếp khách
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bàn làm việc
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={6}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-tv_flat_screen" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M22.5 10.375v6.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-13a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v6.5zm1.5 0v-6.5a1.75 1.75 0 0 0-1.75-1.75H1.75A1.75 1.75 0 0 0 0 3.875v13c0 .966.784 1.75 1.75 1.75h20.5a1.75 1.75 0 0 0 1.75-1.75v-6.5zm-16.5 12h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5zm3.75-4.5v3.75a.75.75 0 0 0 1.5 0v-3.75a.75.75 0 0 0-1.5 0z" /></svg></span>Truyền thông &amp; Công nghệ
                              </div>
                              <span className="bui-title__subtitle">Hoạt đông giải trí cho mọi thành viên</span>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    TV màn hình phẳng
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Điện thoại
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    TV
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={7}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-food" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z" /></svg></span>Đồ ăn &amp; thức uống
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Quán cà phê (trong khuôn viên)
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Trái cây
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Rượu vang/sâm panh
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bữa ăn tự chọn phù hợp với trẻ em
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bữa ăn trẻ em
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Giao nhận đồ tạp hóa
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Thực đơn ăn kiêng đặc biệt (theo yêu cầu)
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Quầy bar (đồ ăn nhẹ)
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bữa trưa đóng hộp
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Quầy bar
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Dịch vụ phòng
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Nhà hàng
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={11}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-wifi" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z" /></svg></span>Internet
                              </div>
                            </div>
                            <div className="bui-spacer--medium hotel-facilities-group__policy">
                              Wi-fi có ở toàn bộ khách sạn và miễn phí.
                            </div>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={16}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-parking_sign" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z" /></svg></span>Chỗ đậu xe
                              </div>
                            </div>
                            <div className="bui-spacer--medium hotel-facilities-group__policy">
                              Có chỗ đỗ xe công cộng miễn phí tại chỗ (không cần đặt chỗ trước).
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bãi đậu xe an toàn
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Nhà để xe
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Trạm sạc xe điện
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bãi đậu xe tiếp cận người khuyết tật
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={22}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-transport_bus_front" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M4.5 20.213v1.5a2.25 2.25 0 0 0 4.5 0v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 0-1.5 0zm13.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 0-1.5 0v1.5a2.25 2.25 0 0 0 4.5 0v-1.5a.75.75 0 0 0-1.5 0zm1.5-1.5a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-13.5a3.75 3.75 0 0 1 3.75-3.75h7.5a3.75 3.75 0 0 1 3.75 3.75v13.5zm1.5 0v-13.5c0-2.9-2.35-5.25-5.25-5.25h-7.5A5.25 5.25 0 0 0 3 5.213v13.5a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25zM9.75 4.463h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm-6 3h16.5l-.75-.75v7.5l.75-.75H3.75l.75.75v-7.5l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75H3.75zm3 12h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5zm7.5 0h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5zm-10.5-10.5h-1.5A2.25 2.25 0 0 0 0 9.713v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 0 0-1.5zm16.5 1.5h1.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 0 1.5 0v-4.5a2.25 2.25 0 0 0-2.25-2.25h-1.5a.75.75 0 0 0 0 1.5z" /></svg></span>Phương tiện đi lại
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Dịch vụ đưa đón
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Xe đưa đón sân bay
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Xe đưa đón sân bay
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Xe đưa đón sân bay
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={23}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-front_desk" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M14.244 14.156a6.75 6.75 0 0 0-6.75-5.906A6.747 6.747 0 0 0 .73 14.397a.75.75 0 0 0 1.494.134 5.25 5.25 0 0 1 5.27-4.781 5.253 5.253 0 0 1 5.262 4.594.75.75 0 1 0 1.488-.188zM10.125 4.125a2.625 2.625 0 1 1-5.25 0V1.5h5.25v2.625zm1.5 0V1.5a1.5 1.5 0 0 0-1.5-1.5h-5.25a1.5 1.5 0 0 0-1.5 1.5v2.625a4.125 4.125 0 0 0 8.25 0zM23.25 22.5H.75l.75.75v-7.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v7.5l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-7.5a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 15.75v7.5c0 .414.336.75.75.75h22.5zM4.376 5.017a9.42 9.42 0 0 1 3.12-.517 9.428 9.428 0 0 1 3.133.519.75.75 0 0 0 .49-1.418A10.917 10.917 0 0 0 7.498 3a10.91 10.91 0 0 0-3.611.6.75.75 0 0 0 .49 1.417zM15.75 14.27a3.001 3.001 0 0 1 6 .16.75.75 0 1 0 1.5.04 4.501 4.501 0 1 0-9-.24.75.75 0 1 0 1.5.04zm3.75-3.77V8.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0zM17.25 9h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z" /></svg></span>Dịch vụ lễ tân
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Có xuất hóa đơn
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Tủ khóa
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Nhận/trả phòng riêng
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Dịch vụ trợ giúp đặc biệt
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Giữ hành lí
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bàn bán tour
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Nhận/trả phòng cấp tốc
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Lễ tân 24 giờ
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={25}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-family" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M21.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm-6.182 15.093l.188 1.5A.75.75 0 0 0 18 22.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5a4.5 4.5 0 0 0-7.2-3.6.75.75 0 1 0 .9 1.2 3 3 0 0 1 4.8 2.4v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3l.744.657-.188-1.5a.75.75 0 0 0-1.488.186zM6.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM5.444 20.157l-.188 1.5L6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 4.8-2.4.75.75 0 1 0 .9-1.2A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3a.75.75 0 0 0 .744-.657l.188-1.5a.75.75 0 0 0-1.488-.186zM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 3a4.5 4.5 0 0 0-4.5 4.5v.75c0 .414.336.75.75.75h1.5l-.74-.627.75 4.5a.75.75 0 0 0 .74.627H12a.75.75 0 0 0 0-1.5h-1.5l.74.627-.75-4.5a.75.75 0 0 0-.74-.627h-1.5l.75.75v-.75a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5zm0 1.5a3 3 0 0 1 3 3v.75l.75-.75h-1.5a.75.75 0 0 0-.74.627l-.75 4.5.74-.627H12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .74-.627l.75-4.5-.74.627h1.5a.75.75 0 0 0 .75-.75v-.75A4.5 4.5 0 0 0 12 12a.75.75 0 0 0 0 1.5z" /></svg></span>Dịch vụ giải trí và gia đình
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Cửa an toàn cho trẻ nhỏ
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Thiết bị vui chơi ngoài trời cho trẻ em
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Khu vui chơi trong nhà
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Giải trí buổi tối
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Câu lạc bộ trẻ em
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Sân chơi trẻ em
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={26}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-washer" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M21 12v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75V12zm1.5 0V2.25A2.25 2.25 0 0 0 20.25 0H3.75A2.25 2.25 0 0 0 1.5 2.25v19.5A2.25 2.25 0 0 0 3.75 24h16.5a2.25 2.25 0 0 0 2.25-2.25V12zM5.25 4.5h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5zm-3 3h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zM16.5 15a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm1.5 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm0-10.875a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm-4.5 0a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zM10.5 15a1.5 1.5 0 0 1 1.5-1.5.75.75 0 0 0 0-1.5 3 3 0 0 0-3 3 .75.75 0 0 0 1.5 0z" /></svg></span>Dịch vụ lau dọn
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Dọn phòng hàng ngày
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Dịch vụ là (ủi)
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Giặt khô
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Giặt ủi
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={27}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-briefcase" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M9.75 12.75H1.728a.228.228 0 0 1-.228-.228V6.456c0-.666.54-1.206 1.206-1.206h18.587c.666 0 1.207.54 1.207 1.206v6.066a.228.228 0 0 1-.228.228H14.25a.75.75 0 0 0 0 1.5h8.022c.954 0 1.728-.774 1.728-1.728V6.456a2.707 2.707 0 0 0-2.707-2.706H2.706A2.706 2.706 0 0 0 0 6.456v6.066c0 .954.774 1.728 1.728 1.728H9.75a.75.75 0 0 0 0-1.5zm6.75-9h-9l.75.75v-.938c.04-1.166 1.036-2.1 2.227-2.062H13.5a2.166 2.166 0 0 1 2.25 2.087V4.5l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-.938A3.665 3.665 0 0 0 13.476 0H10.5C8.506-.062 6.818 1.52 6.75 3.537V4.5c0 .414.336.75.75.75h9zm-6 4.5a1.5 1.5 0 0 0-1.5 1.5v2.25a3 3 0 1 0 6 0v-2.25a1.5 1.5 0 0 0-1.5-1.5h-3zm0 1.5h3v2.25a1.5 1.5 0 0 1-3 0v-2.25zm10.509 2.364l1.234 8.022a.75.75 0 0 1-.742.864H2.5a.75.75 0 0 1-.74-.864l1.231-8.022a.75.75 0 1 0-1.482-.228L.277 21.408A2.248 2.248 0 0 0 2.5 24h19a2.25 2.25 0 0 0 2.225-2.592l-1.234-8.022a.75.75 0 0 0-1.482.228z" /></svg></span>Dịch vụ cho doanh nhân
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Fax/photocopy
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Tiện nghi tổ chức hội họp/tiệc
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={34}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-lock_closed" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M19.5 16.5v5.25a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v5.25zm1.5 0v-5.25A2.25 2.25 0 0 0 18.75 9H5.25A2.25 2.25 0 0 0 3 11.25v10.5A2.25 2.25 0 0 0 5.25 24h13.5A2.25 2.25 0 0 0 21 21.75V16.5zM7.5 9.75V6a4.5 4.5 0 0 1 9 0v3.75a.75.75 0 0 0 1.5 0V6A6 6 0 0 0 6 6v3.75a.75.75 0 0 0 1.5 0zM12 15a1.125 1.125 0 1 0 .004 0h-.006a.75.75 0 0 0 .004 1.5H12a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z" /></svg></span>An ninh
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bình chữa cháy
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Hệ thống CCTV bên ngoài chỗ nghỉ
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Hệ thống CCTV trong khu vực chung
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Thiết bị báo cháy
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Báo động an ninh
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Ổ khóa mở bằng thẻ
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Ổ khóa
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bảo vệ 24/7
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Két an toàn
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={19}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-disabled" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M13.125 3.56a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm3.454 18.335l-1.836-3.67a.75.75 0 0 0-.671-.415H11.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v6c0 .414.336.75.75.75h3.75a.75.75 0 0 1 .671.415l2.25 4.5a.75.75 0 0 1-1.342.67zm-1.342.671a2.25 2.25 0 1 0 4.026-2.012l-2.25-4.5A2.25 2.25 0 0 0 16.5 14.81h-3.75l.75.75v-6a2.25 2.25 0 0 0-4.5 0v7.5a2.25 2.25 0 0 0 2.25 2.25h4.322l-.67-.415 1.835 3.672zm-4.362-.958a5.25 5.25 0 0 1-5.25-9.096.75.75 0 1 0-.75-1.299 6.75 6.75 0 1 0 6.75 11.694.75.75 0 1 0-.75-1.3z" /></svg></span>Lối vào dành cho người khuyết tật
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Các tầng trên đi lên bằng thang máy
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={433}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-pool" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M23.097 21.71c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm0-4.5c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm-1.722-8.64a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zM7.777 14.636l3.831-2.4a.75.75 0 0 0 .166-1.13L8.964 7.9a2.25 2.25 0 0 1 .687-3.494l4.264-2.135a.751.751 0 1 1 .686 1.333l-.01.006-3.405 1.702a1.502 1.502 0 0 0-.448 2.334l5.375 6.142a.75.75 0 1 0 1.128-.988l-5.377-6.145-.002-.003v-.001l3.394-1.697.027-.013A2.25 2.25 0 0 0 13.238.93L8.98 3.065a3.749 3.749 0 0 0-1.144 5.824l2.81 3.206.166-1.13-3.831 2.4a.75.75 0 0 0 .796 1.272z" /></svg></span>2 hồ bơi
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <div className="bui-title bui-spacer--medium">
                                <strong className="bui-title__text">
                                  Hồ bơi 1 - ngoài trời
                                  <span className="bui-badge bui-badge--constructive bui-badge--alt" data-bui-component="Badge">
                                    <span className="bui-badge__text">Miễn phí!</span>
                                  </span>
                                </strong>
                              </div>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Mở cửa quanh năm
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Chỉ dành cho người lớn
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Hồ bơi có tầm nhìn
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Khăn hồ bơi/bãi biển
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Quầy bar hồ bơi
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Ghế/ghế dài tắm nắng
                                  </div>
                                </div>
                              </li>
                              <div className="bui-title bui-spacer--medium">
                                <strong className="bui-title__text">
                                  Hồ bơi 2 - ngoài trời (dành cho trẻ em)
                                  <span className="bui-badge bui-badge--constructive bui-badge--alt" data-bui-component="Badge">
                                    <span className="bui-badge__text">Miễn phí!</span>
                                  </span>
                                </strong>
                              </div>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Mở cửa quanh năm
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Phù hợp cho trẻ em
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Hồ bơi có tầm nhìn
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Khăn hồ bơi/bãi biển
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Quầy bar hồ bơi
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Ghế/ghế dài tắm nắng
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={21}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-spa" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M11.72 14.295A7.35 7.35 0 0 1 8.997 8.85a7.148 7.148 0 0 1 2.25-4.972c.005-.005-.004-.005-.01-.01a7.173 7.173 0 0 1 2.261 5.03 7.332 7.332 0 0 1-2.722 5.397h.944zm-.944 1.166a.75.75 0 0 0 .944 0 8.85 8.85 0 0 0 3.277-6.555 8.683 8.683 0 0 0-2.72-6.12 1.482 1.482 0 0 0-2.069.01 8.658 8.658 0 0 0-2.71 6.062 8.869 8.869 0 0 0 3.278 6.603zm3.813-7.013A7.807 7.807 0 0 1 19.023 7.1l.003-.001a7.17 7.17 0 0 1-1.959 5.142 7.332 7.332 0 0 1-5.74 1.891.75.75 0 0 0-.158 1.492 8.85 8.85 0 0 0 6.953-2.318 8.68 8.68 0 0 0 2.404-6.233A1.495 1.495 0 0 0 19.029 5.6a9.304 9.304 0 0 0-5.282 1.608.75.75 0 1 0 .842 1.24zM8.75 7.221A9.239 9.239 0 0 0 3.417 5.6c-.815-.001-1.484.664-1.49 1.488a8.652 8.652 0 0 0 2.37 6.184 8.95 8.95 0 0 0 7.031 2.35.75.75 0 1 0-.158-1.49 7.431 7.431 0 0 1-5.82-1.927 7.142 7.142 0 0 1-1.923-5.091L3.426 7.1a7.746 7.746 0 0 1 4.476 1.357.75.75 0 0 0 .848-1.236zm-4.944 3.966c-2.223.948-3.808 2.716-3.808 4.441 0 3.47 5.422 6 12 6a22.404 22.404 0 0 0 6.977-1.047.75.75 0 0 0 .523-.715v-3.488l-.75.75h4.383a.75.75 0 0 0 .715-.524c.1-.315.15-.643.152-.973 0-2.068-1.986-3.858-5.079-4.944a.75.75 0 1 0-.497 1.416c2.56.898 4.076 2.265 4.076 3.525 0 .176-.028.354-.082.524l.715.226v-.75h-4.383a.75.75 0 0 0-.75.75v3.488l.523-.715a20.922 20.922 0 0 1-6.516.977c-5.856 0-10.507-2.17-10.507-4.5 0-1.02 1.17-2.325 2.896-3.061a.75.75 0 0 0-.588-1.38z" /></svg></span>Chăm sóc sức khỏe
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Hồ bơi trẻ em
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Phòng gửi đồ ở spa/gym
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Huấn luyện viên cá nhân
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Lớp thể dục
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Ô (dù) che nắng loại to
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Ghế/ghế dài tắm nắng
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bồn tắm nóng/bể sục (jacuzzi)
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Trung tâm Spa &amp; chăm sóc sức khoẻ
                                    <span className="bui-badge bui-badge--alt" data-bui-component="Badge">
                                      <span className="bui-badge__text">Phụ phí</span>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Trung tâm thể dục
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={24}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-group" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M6 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 3A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3A.75.75 0 0 0 6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5zM21 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 4.5a3 3 0 0 1 3 3v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5A4.5 4.5 0 0 0 19.5 9a.75.75 0 0 0 0 1.5zm-5.25-6.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM18 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H9l-.746-.675.75 7.5A.75.75 0 0 0 9.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L15 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H15a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 9 15H6.75l.75.75V13.5a4.5 4.5 0 1 1 9 0z" /></svg></span>Khu vực chung
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Khu vực xem TV/sảnh chung
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Nhà thờ/miếu thờ
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={28}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-shopping_bag" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M17.174 7.5H4.561a2.257 2.257 0 0 0-2.185 2.12L.386 21.38A2.287 2.287 0 0 0 2.521 24L19.173 24c1.299-.068 2.265-1.142 2.199-2.401a2.272 2.272 0 0 0-.02-.199L19.35 9.538c-.056-1.073-.988-1.99-2.144-2.037zm-.03 1.5a.75.75 0 0 1 .717.706l2.01 11.924.003.048a.783.783 0 0 1-.74.823L2.561 22.5c.017 0-.006-.002-.028-.006a.783.783 0 0 1-.666-.884L3.865 9.788c.03-.467.341-.773.727-.789L17.174 9zM15.29 5.165A4.513 4.513 0 0 0 10.87 1.5a4.515 4.515 0 0 0-4.42 3.643.75.75 0 0 0 1.472.29A3.014 3.014 0 0 1 10.87 3a3.012 3.012 0 0 1 2.946 2.448.75.75 0 0 0 1.474-.282zM20.088.22l-2.25 2.25a.75.75 0 0 0-.22.53v2.25c0 .414.336.75.75.75h2.25a.75.75 0 0 0 .53-.22l2.25-2.25a.75.75 0 0 0 0-1.06L21.148.22a.75.75 0 0 0-1.06 0zm1.06 1.06h-1.06l2.25 2.25V2.47l-2.25 2.25.53-.22h-2.25l.75.75V3l-.22.53 2.25-2.25z" /></svg></span>Cửa hàng
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Cửa hàng tạp hóa (trong khuôn viên)
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Hiệu cắt tóc/làm đẹp
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={29}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-checkmark" height={16} width={16} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg></span>Các tiện nghi khác
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Dây khẩn cấp trong phòng tắm
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Bồn rửa mặt thấp hơn
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Toilet có sàn cao hơn
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Toilet dành cho người khuyết tật
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Lối vào cho người đi xe lăn
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Khu vực cho phép hút thuốc
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Điều hòa nhiệt độ
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Phòng không gây dị ứng
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Phòng cách âm
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Thang máy
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Phòng gia đình
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Tiện nghi cho khách khuyết tật
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Phòng không hút thuốc
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bui-spacer--large">
                          <div className="hotel-facilities-group" data-section-id={10001}>
                            <div className="bui-title bui-title--strong_1 bui-spacer--medium hotel-facilities-group__title">
                              <div className="bui-title__text hotel-facilities-group__title-text">
                                <span role="presentation" className="bui-icon bui-icon--medium hotel-facilities-group__icon"><svg className="bk-icon -streamline-chat_bubbles" height={16} width={16} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M24 13.5a6 6 0 0 0-6-6h-3a6 6 0 0 0 0 12h.75l-.53-.22 4.5 4.5a.75.75 0 0 0 1.28-.53v-5.024l-.43.678A5.989 5.989 0 0 0 24 13.502zm-1.5-.002a4.489 4.489 0 0 1-2.57 4.05.75.75 0 0 0-.43.678v5.024l1.28-.53-4.5-4.5a.75.75 0 0 0-.53-.22H15a4.5 4.5 0 1 1 0-9h3a4.5 4.5 0 0 1 4.5 4.5zM6.22 12.22l-3 3 1.28.53v-5.024a.75.75 0 0 0-.43-.678A4.489 4.489 0 0 1 5.998 1.5H9a4.502 4.502 0 0 1 4.313 3.214.75.75 0 0 0 1.438-.428A6.002 6.002 0 0 0 9 0H6a5.988 5.988 0 0 0-2.57 11.404L3 10.726v5.024a.75.75 0 0 0 1.28.53l3-3a.75.75 0 1 0-1.06-1.06z" /></svg></span>Ngôn ngữ được sử dụng
                              </div>
                            </div>
                            <ul className="bui-list bui-list--text bui-list--icon hotel-facilities-group__list">
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Tiếng Anh
                                  </div>
                                </div>
                              </li>
                              <li className="bui-list__item bui-spacer--medium hotel-facilities-group__list-item">
                                <span className="bui-list__icon" role="presentation">
                                  <svg className="bk-icon -streamline-checkmark" height={14} width={14} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" /></svg>
                                </span>
                                <div className="bui-list__body">
                                  <div className="bui-list__description">
                                    Tiếng Việt
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div data-capla-component="b-property-web-property-page/PropertyAskQuestionEntryDesktop" data-capla-namespace="b-property-web-property-pageGfIAVZXE"><div /></div>
                    </section>
                    <div id="hp_policies_box" className="hp-policy-section u-clearfix hp-policy-section--title_icon">
                      <div className="containh2">
                        <a name="policies" />
                        <h2 className="hp-section-header--with-cta clearfix">
                          Quy tắc chung
                          <span className="hp-section-header__subtitle">
                            Citadines Pearl Hoi An nhận yêu cầu đặc biệt - gửi yêu cầu trong bước kế tiếp!
                          </span>
                        </h2>
                      </div>
                      <div id="hotelPoliciesInc" className="descriptionsContainer clearfix hp-section hp-policies-block" style={{fontSize: '14px', paddingTop: 0, paddingBottom: '1.2em'}}>
                        <div className="description js-timebar-parent" id="checkin_policy">
                          <p className="policy_name">
                            <span className="policy_name_icon">
                              <svg className="bk-icon -experiments-calendar_checkin hp-policies-calendar-icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="m112 16h-16v-8h-8v8h-48v-8h-8v8h-16c-4.4 0-8 3.9-8 8.7v86.6c0 4.8 3.6 8.7 8 8.7h96c4.4 0 8-3.9 8-8.7v-86.6c0-4.8-3.6-8.7-8-8.7zm0 95.3a1.1 1.1 0 0 1 -.2.7h-95.6a1.1 1.1 0 0 1 -.2-.7v-71.3h96zm-80-27.3h12v12h-12zm38-16h-12v-12h12zm0 28h-12v-12h12zm26 0h-12v-12h12zm0-28h-12v-12h12zm-48-16h-20v20h20zm-6 14h-8v-8h8z" /></svg>
                            </span>
                            <span>
                              Nhận phòng
                            </span>
                          </p>
                          <p>
                            <span data-component="prc/timebar" className="u-display-block" data-from="15:00" data-from-label="15:00" data-caption="
Từ 15:00 giờ
">
                              Từ 15:00 giờ
                            </span>
                          </p>
                          <p className="hp-checkin-extra">
                            Khách được yêu cầu xuất trình giấy tờ tùy thân có ảnh và thẻ tín dụng lúc nhận phòng
                          </p>
                          <p className="hp-checkin-extra">Trước đó bạn sẽ cần cho chỗ nghỉ biết giờ bạn sẽ đến nơi.</p>
                        </div>
                        <div className="description js-timebar-parent" id="checkout_policy">
                          <p className="policy_name">
                            <span className="policy_name_icon">
                              <svg className="bk-icon -experiments-calendar_checkout hp-policies-calendar-icon" height={20} width={20} viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="m112 16h-16v-8h-8v8h-48v-8h-8v8h-16c-4.4 0-8 3.9-8 8.7v86.6c0 4.8 3.6 8.7 8 8.7h96c4.4 0 8-3.9 8-8.7v-86.6c0-4.8-3.6-8.7-8-8.7zm0 95.3a1.1 1.1 0 0 1 -.2.7h-95.6a1.1 1.1 0 0 1 -.2-.7v-71.3h96zm-68-43.3h-12v-12h12zm0 28h-12v-12h12zm26-28h-12v-12h12zm0 28h-12v-12h12zm26-28h-12v-12h12zm4 12h-20v20h20zm-6 14h-8v-8h8z" /></svg>
                            </span>
                            <span>
                              Trả phòng
                            </span>
                          </p>
                          <p>
                            <span data-component="prc/timebar" className="u-display-block" data-until="12:00" data-until-label="12:00" data-caption="
Đến 12:00
">
                              Đến 12:00
                            </span>
                          </p>
                          <div style={{clear: 'both'}} />
                        </div>
                        <div id="cancellation_policy" className="description tracked">
                          <a name="hotel_cancellation_policy" />
                          <p className="policy_name">
                            <span className="policy_name_icon">
                              <i className="bicon-infobold" />
                            </span>
                            <span>
                              Hủy đặt phòng/<br />
                              Trả trước
                            </span>
                          </p>
                          <p>
                            Các chính sách hủy và thanh toán trước có khác biệt dựa trên loại chỗ nghỉ.
                            Vui lòng <a href="#availability_target" id="rm_cond_link_enter_dates">nhập ngày tháng lưu trú</a> và kiểm tra các điều kiện của phòng bạn chọn.
                          </p>
                          <div style={{clear: 'both'}} />
                        </div>
                        <div className="description description_smp-children-policy" id="smp_children_policy" data-et-view>
                          <p className="policy_name">
                            <span className="policy_name_icon">
                              <i className="bicon-user-family" />
                            </span>
                            <span>Trẻ em và giường</span>
                          </p>
                          <div className="child-policies-table-wrapper" data-et-view="INLGPZPfECIAEKKUHAbECHTeYT:2">
                            <div data-capla-component="b-property-web-property-page/PropertyChildPoliciesBlock" data-capla-namespace="b-property-web-property-pageGfIAVZXE"><div><div data-test-id="child-policies-block"><div className="f70dc4cb0f"><h2 className="e975ff606b">Chính sách trẻ em</h2><p>Phù hợp cho tất cả trẻ em.</p><p>Để xem thông tin giá và tình trạng phòng trống chính xác, vui lòng thêm số lượng và độ tuổi của trẻ em trong nhóm của bạn khi tìm kiếm.</p></div><h2 className="e975ff606b">Chính sách nôi (cũi) và giường phụ</h2><div className="e33d47e1e7"><div className="db4d8b8cd7">1 - 2 tuổi</div><div className="ee74e09eec"><span className="a5b29265cd"><span className="b6dc9a9e69 e6c50852bd" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M116 20a4 4 0 0 0-4 4v8H16v-8a4 4 0 0 0-8 0v80a4 4 0 0 0 8 0V88h96v16a4 4 0 0 0 8 0V24a4 4 0 0 0-4-4zM42 40h18v32H42zm26 32V40h18v32zM16 40h18v32H16zm96 32H94V40h18z" /></svg></span><span className="b88443e8cb">Có nôi/cũi nếu yêu cầu</span></span><span className="e7d0c52fc6"><div className="ee746850b6 de4eca8390">Miễn phí</div></span></div></div><div><p>Số lượng nôi/cũi được phép tùy thuộc vào tùy chọn của bạn. Vui lòng kiểm tra tùy chọn mà bạn đã chọn để biết thêm thông tin.</p><p>Chỗ nghỉ này không có giường phụ.</p><p>Tất cả nôi/cũi tùy thuộc vào tình trạng có sẵn.</p></div></div></div></div>
                          </div>
                        </div>
                        <div className="description" id="age_restriction_policy">
                          <p className="policy_name">
                            <span className="policy_name_icon">
                              <i className="bicon-occupancy" />
                            </span>
                            <span>
                              Giới hạn độ tuổi
                            </span>
                          </p>
                          <p>Độ tuổi tối thiểu để nhận phòng là 18</p>
                        </div>
                        <div className="description hp_bp_payment_method">
                          <p className="policy_name" aria-hidden="true">
                            <span className="policy_name_icon">
                              <i className="bicon-doublesidecardblack" />
                            </span>
                            <span>
                              Thẻ được chấp nhận tại chỗ nghỉ này
                            </span>
                          </p>
                          <p aria-label="Phương thức thanh toán và điều kiện được chấp nhận" className="payment_methods_overall" rel={300}>
                            <img src="https://cf.bstatic.com/static/img/transparent/8e09e5757781bf4c0f42228d45f422e5e800ae64.gif" className="payment_methods_readability ppd_payment_methods_readability creditcard euromastercard" alt="Mastercard" title="Mastercard" />
                            <img src="https://cf.bstatic.com/static/img/transparent/8e09e5757781bf4c0f42228d45f422e5e800ae64.gif" className="payment_methods_readability ppd_payment_methods_readability creditcard visa" alt="Visa" title="Visa" />
                            <img src="https://cf.bstatic.com/static/img/transparent/8e09e5757781bf4c0f42228d45f422e5e800ae64.gif" className="payment_methods_readability ppd_payment_methods_readability creditcard unionpaycreditcard" alt="Thẻ tín dụng UnionPay" title="Thẻ tín dụng UnionPay" />
                            <img src="https://cf.bstatic.com/static/img/transparent/8e09e5757781bf4c0f42228d45f422e5e800ae64.gif" className="payment_methods_readability ppd_payment_methods_readability creditcard unionpaydebitcard" alt="Thẻ ghi nợ UnionPay" title="Thẻ ghi nợ UnionPay" />
                            <img src="https://cf.bstatic.com/static/img/transparent/8e09e5757781bf4c0f42228d45f422e5e800ae64.gif" className="payment_methods_readability ppd_payment_methods_readability creditcard jcb" alt="JCB" title="JCB" />
                            <img src="https://cf.bstatic.com/static/img/transparent/8e09e5757781bf4c0f42228d45f422e5e800ae64.gif" className="payment_methods_readability ppd_payment_methods_readability creditcard dinersclub" alt="Diners Club" title="Diners Club" />
                            <img src="https://cf.bstatic.com/static/img/transparent/8e09e5757781bf4c0f42228d45f422e5e800ae64.gif" className="payment_methods_readability ppd_payment_methods_readability creditcard americanexpress" alt="American Express" title="American Express" />
                            <span className="creditcard_noimg no-image-payment">Bankcard</span>
                            <span className="invisible_spoken" tabIndex={0}>Citadines Pearl Hoi An chấp nhận các loại thẻ này và giữ quyền khóa một khoản tiền tạm thời trước khi bạn đến nhận phòng.</span>
                          </p>
                          <div style={{clear: 'both'}} />
                        </div>
                        <hr />
                        <div className="description description--house-rule">
                          <p className="policy_name">
                            <span className="policy_name_icon">
                              <i className="bicon-petfriendly" />
                            </span>
                            <span>Vật nuôi</span>
                          </p>
                          <p>
                            Vật nuôi được phép theo yêu cầu của khách. Có thể bị tính phí.
                          </p>
                          <div style={{clear: 'both'}} />
                        </div>
                      </div>
                      <div style={{height: '15px'}} className=" clearfix" />
                    </div>
                  </div>
                  <div className="bui-grid__column bui-grid__column-12 js-k2-hp--block k2-hp--fine_print">
                    <div id="hp_small_print" className="hp-section-container ">
                      <a id="b" name="important_info" />
                      <h2 className="hp-section-header hp-section-header--with-cta clearfix">
                        Ghi chú
                      </h2>
                      <div id="hp_important_info_box" className="clearfix">
                        <div className="imporant_info_highlight hp-section">
                          <div className="description">
                            Các loại vật nuôi được phép: Chó, Mèo, Chuột đồng, Thỏ và Cá.
                            <br />Xin lưu ý rằng khách được phép mang tối đa 2 vật nuôi với trọng lượng tối đa 10 kg/vật nuôi vào chỗ nghỉ. Vật nuôi có thể được chấp thuận/cho phép nếu đã được thuần hóa và tiêm vắc-xin theo các yêu cầu của pháp luật địa phương. Vui lòng liên hệ với chỗ nghỉ để biết thêm chi tiết về giấy chứng nhận tiêm vắc-xin và các quy định cụ thể của vật nuôi.
                            <br />
                            <br />Xin lưu ý rằng nếu mang theo vật nuôi, du khách phải trả khoản phụ phí 100.000 VND/vật nuôi/đêm.
                            <p>Vui lòng thông báo trước cho Citadines Pearl Hoi An về thời gian đến dự kiến của quý khách. Khách có thể sử dụng ô Yêu cầu Đặc biệt khi đặt phòng hoặc liên lạc trực tiếp với chỗ nghỉ qua các thông tin liên hệ được ghi trong xác nhận đặt phòng.</p>
                            <p>Khách cần phải xuất trình giấy tờ tùy thân có ảnh và thẻ tín dụng vào thời điểm nhận phòng. Vui lòng lưu ý tất cả các Yêu cầu Đặc biệt đều tùy thuộc vào tình trạng phòng trống và phụ phí có thể sẽ được tính thêm.</p>
                            <p />
                          </div>
                        </div>
                        <div style={{height: '15px'}} className=" clearfix" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default DetailCheckOut