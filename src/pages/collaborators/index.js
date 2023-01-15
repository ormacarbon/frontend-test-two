import React, { useContext, useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import Title from "../../components/Title/Title";
import { ThemeContext } from "../../contexts/themeContext";
import * as C from "./style";

const genderTranslate = {
  male: "Masculino",
  female: "Feminino",
};

const Collaborators = () => {
  const [people, setPeople] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedGender, setSelectedGender] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [load, setLoad] = useState(true);

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    fetch("https://api.randomuser.me/?results=100")
      .then((response) => response.json())
      .then((data) => setPeople(data.results));
    setLoad(false);
  }, []);

  useEffect(() => {
    setFilteredPeople(
      people.filter(
        (person) => !selectedGender || genderTranslate[person.gender] === selectedGender
      )
    );
  }, [people, selectedGender]);

  useEffect(() => {
    setSelectedPeople(
      filteredPeople.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
      )
    );
  }, [filteredPeople, currentPage, itemsPerPage]);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
    setCurrentPage(0);
  };
  const handleItemsPerPage = (e) => {
    setItemsPerPage(e.target.value);
    setCurrentPage(0);
  };

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <C.ContainerCollaborators theme={theme}>
          <Title text="Collaborators of this cause" />
          <C.ContainerSelects>
            <C.Select value={itemsPerPage} onChange={handleItemsPerPage}>
              <option>15</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </C.Select>

            <C.Select value={selectedGender} onChange={handleGenderChange}>
              <option value="">Selecione um gênero</option>
              <option>Masculino</option>
              <option>Feminino</option>
            </C.Select>
          </C.ContainerSelects>

          <C.Table>
            <thead>
              <tr>
                <th>Nome Completo</th>
                <th>Gênero</th>
                <th>País</th>
              </tr>
            </thead>
            <tbody>
              {selectedPeople.map((person) => (
                <tr key={person.login.uuid}>
                  <td>
                    {person.name.first} {person.name.last}
                  </td>
                  <td>{genderTranslate[person.gender]}</td>
                  <td>{person.location.country}</td>
                </tr>
              ))}
            </tbody>
          </C.Table>
          <C.ContainerButtons>
            <button onClick={handlePrevious} disabled={currentPage === 0}>
              Anterior
            </button>
            Pagina {currentPage + 1}
            <button
              onClick={handleNext}
              disabled={
                currentPage * itemsPerPage + itemsPerPage >=
                filteredPeople.length
              }
            >
              Próxima
            </button>
          </C.ContainerButtons>
        </C.ContainerCollaborators>
      )}
    </>
  );
};

export default Collaborators;
