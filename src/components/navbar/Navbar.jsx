import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="d8eab2cf7f">
    <ol className="a1b3f50dcd b2fe1a41c3 ef8295f3e6 d41e970dd5">
      <li className>
        <span className="f107d1d711">
          <Link
          to="/"
            className="fc63351294 a168c6f285 a25b1d9e47"
          >
          <span>Trang chủ</span>
          
          </Link>
          
        </span>
      </li>
      <li className>
        <span className="f107d1d711">
          <span
            className="b6dc9a9e69 c16b6b1841 e25355d3ee"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-rtl-flip="true"
            >
              <path d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z" />
            </svg>
          </span>
          <a      
            className="fc63351294 a168c6f285 b7555bc87e"
          >
            <span>Kết quả tìm kiếm</span>
          </a>
        </span>
      </li>
    </ol>
  </nav>
  )
}

export default Navbar