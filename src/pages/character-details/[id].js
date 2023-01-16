import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BASE_URL_CH } from "../../constants/url";
import Header from "../../components/Header/Header";
import {
  ContainerCardDetails,
  ContainerDetails,
  ImgDetails,
  NameCh,
} from "../../styles/detailsStyled";
import { Footer } from "../../components/Footer/Footer";

const Details = () => {
  const [characterDetails, setCharacterDetails] = useState([]);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL_CH}/${id}`);
        setCharacterDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchDetails();
    }
  }, [id]);

  return (
    <>
      <ContainerDetails>
        <Header />
        <ContainerCardDetails>
          <div>
            <NameCh>{characterDetails.name}</NameCh>
            <p>
              <u>Species</u>: {characterDetails.species}
            </p>
            <p>
              <u>Origin</u>: {characterDetails.origin?.name}
            </p>
            <p>
              <u>Last location</u>: {characterDetails.location?.name}
            </p>
            <p>
              <u>Gender</u>: {characterDetails.gender}
            </p>
          </div>
          <ImgDetails src={characterDetails.image} alt="character image" />
        </ContainerCardDetails>
      </ContainerDetails>
      <Footer />
    </>
  );
};

export default Details;
