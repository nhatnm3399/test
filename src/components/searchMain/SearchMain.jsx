import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router";

import "./searchMain.css"
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { toast } from "react-toastify";


const SearchMain = () =>{
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [popUpPerson , setPopUpPerson] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [person , setPerson] = useState({
        adults: 0,
        child: 0,
        rooms: 0
    })
    const [textSearch , setTextSearch] = useState("");
  const navigate = useNavigate();

    const onChange = (key , value) =>{
        setPerson({
            ...person,
            [key]: value
        })
    }

    const handleInCrement = (key) =>{
        if(person[key] < 30){
        setPerson((prev) =>(
        {
        ...prev,
        [key]: prev[key] ++
        }
        ))
    }
    }

    const handleDeCrement = (key) =>{
        if(person[key] > 0){
            setPerson((prev) =>(
                {
                ...prev,
                [key]: prev[key] --
                }
                ))
        }
  }
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (textSearch === "") {
     toast.error("Vui lòng không để trống ô này")
    } else {
      navigate(`/home-screen-detail/${textSearch}`);
   }
  }

    return (
        <div
        className="xpi__content__wrapper xpi__content__wrappergray xpi__content_hero_banner "
        id="indexsearch"
      >
        <div>
          <div>
            <div>
              <div className="ec230417cd hero-banner-wrapper b36dba3aaa f59f515b3e">
                <img
                  className="e330f8a8da"
                  alt="Tiết kiệm 15% với Ưu Đãi Cuối Năm"
                  src="https://r-xx.bstatic.com/xdata/images/xphoto/480x165/177464000.jpeg?k=e74f22d059a85966c866bcf068f5a2a49f08ace871a3f459f5d71569c499896a&o="
                />
                <div className="e71072e29c">
                  <div className="d7157e0865">
                    <header>
                      <div className="fa21f9c13a c0ec8bd590 ae9cb6af93 fac920ecfe">
                        Áp dụng đến 3/1/2023
                      </div>
                      <h1>
                        <span
                          data-testid="herobanner-title1"
                          className="fa27fe07b6 c0ec8bd590 e0ff951c3e fac920ecfe"
                        >
                          Tiết kiệm 15% với Ưu Đãi Cuối Năm
                        </span>
                      </h1>
                    </header>
                    <p
                      data-testid="herobanner-subtitile"
                      className="fa21f9c13a c0ec8bd590 e6d35895b6 fac920ecfe"
                    >
                      Vẫn còn kịp để thực hiện thêm một chuyến đi trong danh
                      sách của bạn
                    </p>
                    <a
                      href="#"
                      className="fc63351294 a822bdf511 d4b6b7a9e7 cfb238afa1 f4605622ad f17df92af3"
                      style={{ backgroundColor:'black' }}
                    >
                      <span className="e57ffa4eb5">Khám phá ưu đãi</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero-banner-searchbox"
        
        >
          <div data-component="arp-searchbox-horizontal-index">
            <div
              
            >
              <div>
                <form
                  className="a0ac39e217"
                >
                  <div className="ffa9856b86 db27349d3a" style={{ borderRadius:'25px' }}>
                    <div className="f9cf783bde">
                      <div>
                        <div
                          className="ab090fee6e d6e01b74ce"
                          data-testid="destination-container"
                        >
                          <div className="db29ecfbe2 c072c8cf10">
                            <div className="a61cce10a1">
                              <div className="d4e829796c">
                                <div className="a713e2a62f">
                                  <span
                                    className="b6dc9a9e69 ec1b6253a6 b8c9de5937"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path>
                                    </svg>
                                  </span>
                                </div>
                                <input
                                value={textSearch}
                                  className="ce45093752"
                                  placeholder="Bạn muốn đến đâu?"
                                  id="__bui-c2073001-1"
                                  onChange={(e) => setTextSearch(e.target.value)}
                                />
                                <div className="ade92cdb3b b8c4387f70" />
                                <div className="a713e2a62f">
                                  <span
                                    data-testid="input-clear"
                                    className="b6dc9a9e69 e25355d3ee"
                                    aria-hidden="true"
                                    onClick={() => setTextSearch("")}
                                  >
                                    <svg
                                      viewBox="0 0 128 128"
                                      width="1em"
                                      height="1em"
                                    >
                                      <path d="M69.7 64l33.1-33.2a4 4 0 0 0-5.6-5.6L64 58.3 30.8 25.2a4 4 0 1 0-5.6 5.6L58.3 64 25.2 97.2a4 4 0 1 0 5.6 5.6L64 69.7l33.2 33.1a4 4 0 0 0 5.6-5.6z"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="a7631de79e" />
                        </div>
                      </div>
                    </div>
                    {/* <div className="f9cf783bde">
                      <div tabIndex={-1} className="ed2ff9f661">
                        <div
                          className="b91c144835 flex-b"
                          
                        >
                          <span
                            className="b6dc9a9e69 a804864eef e6c50852bd b8c9de5937 p-item"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM7.5 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zM18 6V.75a.75.75 0 0 0-1.5 0V6A.75.75 0 0 0 18 6zM5.095 14.03a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zM12 18a1.125 1.125 0 1 0 0 2.25A1.125 1.125 0 0 0 12 18a.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z"></path>
                            </svg>
                          </span>
                          <span
                            
                            className=""
                            onClick={() => setOpenDate(!openDate)}
                          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                            date[0].endDate,
                            "MM/dd/yyyy"
                          )}`}</span>
                          {openDate && (
                            <DateRange
                              editableDateInputs={true}
                              onChange={(item) => setDate([item.selection])}
                              moveRangeOnFirstSelection={false}
                              ranges={date}
                              className="date"
                              minDate={new Date()}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="f9cf783bde">
                      <div className="ef737e9709">
                        <span
                          className="b6dc9a9e69 e8cebe44cf e6c50852bd b8c9de5937"
                          aria-hidden="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path>
                          </svg>
                        </span>
                        <div className="d67edddcf0" tabIndex={-1}>
                          <button
                            type="button"
                            onClick={()=> setPopUpPerson(!popUpPerson)}
                            className="d47738b911 b7d08821c3"
                          >
                            {person.adults} người lớn · {person.child} trẻ em · {person.rooms} phòng
                            <span
                              data-testid="searchbox-form-button-icon"
                              className="b6dc9a9e69 f8931b3e81 e25355d3ee"
                              aria-hidden="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z"></path>
                              </svg>
                            </span>
                          </button>
                          {
                            popUpPerson && <div className="a5da3001f3 a73af396c3">
                            <div className="df856d97eb">
                              <div className="b2b5147b20">
                                <input
                                  type="range"
                                  className="a05c190135"
                                  id="group_adults"
                                />
                                <div className="b72a27c85f">
                                  <label
                                    className="a68a7ee8ee"
                                    htmlFor="group_adults"
                                  >
                                    Người lớn
                                  </label>
                                </div>
                                <div className="e98c626f34">
                                  <button
                                    onClick={()=> handleDeCrement('adults')}
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    type="button"
                                    className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e e1b7cfea84 cd7aa7c891"
                                  >
                                    <span className="b9def0936d">
                                      <span
                                        className="b6dc9a9e69 e25355d3ee"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5z" />
                                        </svg>
                                      </span>
                                    </span>
                                  </button>
                                  <span
                                    className="e615eb5e43"
                                    aria-hidden="true"
                                  >
                                    {person.adults}
                                  </span>
                                  <button
                                    tabIndex={-1}
                                    onClick={() => handleInCrement('adults')}
                                    aria-hidden="true"
                                    type="button"
                                    className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e e1b7cfea84 d64a4ea64d"
                                  >
                                    <span className="b9def0936d">
                                      <span
                                        className="b6dc9a9e69 e25355d3ee"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5z" />
                                        </svg>
                                      </span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="b2b5147b20">
                                <input
                                  type="range"
                                  className="a05c190135"
                                  id="group_children"
                                />
                                <div className="b72a27c85f">
                                  <label
                                    className="a68a7ee8ee"
                                    htmlFor="group_children"
                                  >
                                    Trẻ em
                                  </label>
                                </div>
                                <div className="e98c626f34">
                                  <button
                                    tabIndex={-1}
                                    onClick={() => handleDeCrement('child')}
                                    type="button"
                                    className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e cd7aa7c891"
                                  >
                                    <span className="b9def0936d">
                                      <span
                                        className="b6dc9a9e69 e25355d3ee"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5z" />
                                        </svg>
                                      </span>
                                    </span>
                                  </button>
                                  <span
                                    className="e615eb5e43"
                                    aria-hidden="true"
                                  >
                                    {person.child}
                                  </span>
                                  <button
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    type="button"
                                    onClick={() => handleInCrement('child')}
                                    className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e e1b7cfea84 d64a4ea64d"
                                  >
                                    <span className="b9def0936d">
                                      <span
                                        className="b6dc9a9e69 e25355d3ee"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5z" />
                                        </svg>
                                      </span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="b2b5147b20">
                                <input
                                  type="range"
                                  className="a05c190135"
                                  id="no_rooms"
                                />
                                <div className="b72a27c85f">
                                  <label
                                    className="a68a7ee8ee"
                                    htmlFor="no_rooms"
                                  >
                                    Phòng
                                  </label>
                                </div>
                                <div className="e98c626f34">
                                  <button
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    onClick={()=> handleDeCrement('rooms')}
                                    type="button"
                                    className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e cd7aa7c891"
                                  >
                                    <span className="b9def0936d">
                                      <span
                                        className="b6dc9a9e69 e25355d3ee"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5z" />
                                        </svg>
                                      </span>
                                    </span>
                                  </button>
                                  <span
                                    className="e615eb5e43"
                                    aria-hidden="true"
                                  >
                                    {person.rooms}
                                  </span>
                                  <button
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    onClick={()=> handleInCrement('rooms')}
                                    type="button"
                                    className="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e e1b7cfea84 d64a4ea64d"
                                  >
                                    <span className="b9def0936d">
                                      <span
                                        className="b6dc9a9e69 e25355d3ee"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5z" />
                                        </svg>
                                      </span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="fc63351294 a822bdf511 e2b4ffd73d f7db01295e af18dbd5a4 a9a04704ee d285d0ebe9"
                            >
                              <span className="e57ffa4eb5" onClick={() =>setPopUpPerson(false)}>Xong</span>
                            </button>
                          </div>
                          }
                        </div>
                      </div>
                    </div> */}
                    <div className="f9cf783bde">
                      <button
                        type="submit"
                        onClick={(e)=>handleSearch(e)}
                        className="fc63351294 a822bdf511 d4b6b7a9e7 cfb238afa1 af18dbd5a4 f4605622ad aa11d0d5cd"
                      >
                        <span className="e57ffa4eb5" >Tìm</span>
                      </button>
                    </div>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SearchMain