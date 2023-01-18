import React, { useEffect, useState, useRef, useContext } from "react";
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
import { Context } from "../utility/context";

import MapChart from "../components/Map/Map";

export default function Map() {
  const { data, loading, error, request } = useFetch();
  const [currentPage, setCurrentPage] = useState(0);
  const [info, setInfo] = useState([]);
  const [firstMarkers, setFirstMarkers] = useState();
  const { context, setContext } = useContext(Context);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFirstMarkers(currentPageData);
  }, [data]);

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
  // setFirstMarkers(currentPageData);
  console.log(currentPageData);
  const pageCount = Math.ceil(info.length / PER_PAGE);

  // const [center, setCenter] = useState({
  //   lat: 41.78575824052096,
  //   lng: -101.92046997552498,
  // });
  const mapRef = useRef();
  // console.log(Map);

  function handleClick(brewery) {
    setFirstMarkers(brewery);
  }
  // const MapWithNoSSR = dynamic(() => import("../components/Map/Map"), {
  //   ssr: false,
  // });

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
                      <ButtonLink onClick={setContext(brewery)}>
                        <Link className="button seta" href="/brewery">
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
          {/* <MapContainer
            style={{ width: "100%", height: "100vh" }}
            center={[41.78575824052096, -101.92046997552498]}
            zoom={5}
            scrollWheelZoom={false}
            ref={mapRef}
          >
            <TileLayer attribution={attribution} url={url} />
            {info ? (
              loading ? (
                <p>Loading...</p>
              ) : (
                <ul>
                  {currentPageData.map((brewery) => (
                    <li key={brewery.id}>
                      <Marker position={[brewery.latitude, brewery.longitude]}>
                        <Popup>This is a popup.</Popup>
                      </Marker>
                    </li>
                  ))}
                </ul>
              )
            ) : (
              <ul>
                <li>
                  <Marker position={[41.78575824052096, -101.92046997552498]}>
                    <Popup>This is a popup.</Popup>
                  </Marker>
                </li>
              </ul>
            )} */}
          {/* <Marker position={[40.8054, -74.0241]}>
              <Popup>This is a popup.</Popup>
            </Marker> */}
          {/* </MapContainer> */}
          {/* <main>
            <div id="map"> */}
          {/* <MapWithNoSSR /> */}
          {/* </div>
          </main> */}
          <MapChart />
        </DivBreweriesMap>
      </MainBreweries>
    </>
  );
}
