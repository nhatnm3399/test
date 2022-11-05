import { Link, useNavigate , useParams } from "react-router-dom";
import { useState } from "react";

import HeaderScreen from "../components/header/HeaderScreen";
import LeftBar from "../components/navbar/LeftBar";
import Navbar from "../components/navbar/Navbar";
import ItemList from "./ItemList";
import ListDataFake from "../fakeApi/apiListHotel.json";
import { URL } from "../common/constant";
import { useEffect } from "react";
import axios from "axios";

const DetailScreen = () => {
  const [listHotel, setListHotel] = useState([]);
  const { param } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${URL}/hotel-search?param=${param}`);
      if (res.status === 200) {
        setListHotel(res.data)
      }
    }

   fetchData();
  },[])

  return (
    <>
    <HeaderScreen/>
    <div id="bodyconstraint" className="">
      <div id="bodyconstraint-inner">
        <div data-component="arp-breadcrumbs">
          <div
            data-capla-component="b-search-web-searchresults/BreadCrumbsDesktop"
            data-capla-namespace="b-search-web-searchresultsNASUdROX"
          >
            <div>
              <div className="cde81c6f0c" data-testid="breadcrumbs">
                <Navbar />
              </div>
            </div>
          </div>
        </div>

        <div
          data-trans-from="từ"
          id="searchresultsTmpl"
          className="
          sr_align_title_icons
          "
        >
          <div id="basiclayout" style={{ position: "relative" }} className>
            <div
              id="right"
              className="rlt-right maps-overlay-sr-container"
              role="main"
            >
              <div data-component="arp-header">
                <div
                  data-capla-component="b-search-web-searchresults/HeaderDesktop"
                  data-capla-namespace="b-search-web-searchresultsNASUdROX"
                >
                  <div>
                    <div className="efdb2b543b">
                      <h1 className="e1f827110f d3a14d00da">
                          Từ Khóa: <i><u>{ param}</u></i>
                      </h1>
                      <div
                        role="none"
                        className="c1aac87ff7"
                        data-testid="map-trigger"
                      >
                        <span className="fc63351294 a822bdf511 d4b6b7a9e7 f7db01295e f4605622ad d2c52b10ce">
                          <span className="e57ffa4eb5">
                            Hiển thị trên bản đồ
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ajaxsrwrap">
                <div
                  data-block-id="sr_warnings"
                  className="sr_top_warnings_bui_colors"
                ></div>
                <div
                  className="hotellist_wrap tracked shorten_property_block"
                  id="search_results_table"
                  data-block-id="hotel_list"
                >
                  <div
                    data-component="genius-vip/tracking"
                    data-capla-project-name="search-web"
                    data-service-name="searchresults"
                    data-tracking-enabled={1}
                  />
                  <div data-arp-properties-list={1}>
                    <div
                      data-capla-component="b-search-web-searchresults/PropertiesListDesktop"
                      data-capla-namespace="b-search-web-searchresultsNASUdROX"
                    >
                      <div>
                        <div className="dcf496a7b9">
                          <div className="d4924c9e74">
                            <h2 className="e6e585da68">Xem kết quả ở Hội An</h2>
                            {listHotel.length > 0 &&
                              listHotel.map((item) => (
                                <ItemList
                                  id={item.id}
                                  name={item.title}
                                  description={item.description}
                                  image={item.image}
                                  start_point={item.start_point}
                                  address={item.address}
                                  price ={item.price}
                                />
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* /ajaxsrwrap */}
            </div>
            <LeftBar />
          </div>{" "}
          {/* /basiclayout */}
        </div>
      </div>
    </div>
    </>
  );
};
export default DetailScreen;
