import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetch from "../utility/useFetch";
import {
  ArticleBreweries,
  DivBreweriesMap,
  DivBreweriesTitle,
  MainBreweries,
} from "./Map/style";
import Img1 from "../assets/thomas-thompson-BoVxWyS5KAE-unsplash.jpg";
import ReactPaginate from "react-paginate";
import { ButtonLink } from "../components/Button/style";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const url =
  "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=puoG6vOLC4oqJXcum8fR";

export default function Map() {
  const { data, loading, error, request } = useFetch();
  const [currentPage, setCurrentPage] = useState(0);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { response, json } = await request(
      "https://api.openbrewerydb.org/breweries/random?size=16"
    );
    setInfo(json);
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const PER_PAGE = 2;
  const offset = currentPage * PER_PAGE;
  const currentPageData = info.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(info.length / PER_PAGE);

  const [center, setCenter] = useState({
    lat: 23.729211164246585,
    lng: 90.40874895549243,
  });
  const mapRef = useRef();
  console.log(Map);

  return (
    <>
      <MainBreweries>
        <DivBreweriesTitle>
          <div className="title container">
            <p className="font-2-l-b color-5">choose the best one for you</p>
            <h1 className="font-1-xxl color-0">
              some breweries<span className="color-p1">.</span>
            </h1>
          </div>
        </DivBreweriesTitle>

        <ArticleBreweries className="container">
          {data ? (
            loading ? (
              <p>Loading...</p>
            ) : (
              <ul>
                {currentPageData.map((brewery) => (
                  <li key={brewery.id}>
                    <div className="test">
                      {/* <div> */}
                      <Image src={Img1} alt="Brewery" />
                      {/* </div> */}

                      <h2 className="font-1-xl">{brewery.name}</h2>
                      <span className="font-2-m color-0">{brewery.state}</span>
                      <ButtonLink>
                        <Link className="button seta" href="/">
                          SEE MORE
                        </Link>
                      </ButtonLink>
                    </div>
                  </li>
                ))}
              </ul>
            )
          ) : null}
        </ArticleBreweries>

        <div className="container">
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active container"}
          />
        </div>

        <DivBreweriesMap className="container">
          <MapContainer
            style={{ width: "100%", height: "100vh" }}
            center={center}
            zoom={9}
            ref={mapRef}
          >
            <TileLayer attribution={attribution} url={url} />
            <Marker position={[23.729211164246585, 90.40874895549243]}>
              <Popup>This is a popup.</Popup>
            </Marker>
          </MapContainer>
        </DivBreweriesMap>
      </MainBreweries>
    </>
  );
}
