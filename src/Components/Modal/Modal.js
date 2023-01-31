// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Api from "../../../Controllers/Api";

// function Modal({ modal, setLoading }) {
//   const [info, setInfo] = useState([]);
//   const [modalClose, setModalClose] = useState("");

//   async function requestPokeon() {
//     const urlBase = `https://pokeapi.co/api/v2/pokemon/${modal}`;
//     setLoading(true);

//     await Api(urlBase).then((data) => {
//       setInfo({
//         name: data.forms[0].name,
//         pokeImgFront: data.sprites.front_default,
//         pokeImgBack: data.sprites.back_default,
//         pokeImgShinyFront: data.sprites.front_shiny,
//         pokeImgShinyBack: data.sprites.back_shiny,
//         shiny: false,
//         frontImg: true,
//         speed: data.stats[0].base_stat,
//         spDef: data.stats[1].base_stat,
//         spAtk: data.stats[2].base_stat,
//         def: data.stats[3].base_stat,
//         atk: data.stats[4].base_stat,
//         hp: data.stats[5].base_stat,
//         id: "#" + data.id,
//       });
//       setLoading(false);
//       setModalClose("active");
//       return;
//     });
//   }

//   useEffect(() => {
//     document.title = "VISUALIZAÇÂO DE POKEMONS";
//     const requestApiPokemon = () => {
//       requestPokeon();
//       return;
//     };

//     requestApiPokemon();
//   }, [modal]);

//   if (modal != null) {
//     return (
//       <div className={`modal ${modalClose}`}>
//         <div className="modal-content">
//           <div className="modal-header">
//             <button
//               onClick={() => {
//                 setInfo([]);
//                 setModalClose("");
//               }}
//             >
//               X
//             </button>
//           </div>
//           <div className="modal-body gap-3">
//             <h2>{info.name}</h2>
//             <Image
//               src={info.pokeImgFront}
//               width={200}
//               height={200}
//               alt="pokemon"
//               loading="lazy"
//             />
//             <div className="flex-row gap-2 info-details">
//               <p>HP:</p>
//               <p>{info.hp}</p>
//             </div>
//             <div className="flex-row gap-2 info-details">
//               <p>Ataque:</p>
//               <p>{info.atk}</p>
//             </div>
//             <div className="flex-row gap-2 info-details">
//               <p>Defesa:</p>
//               <p>{info.def}</p>
//             </div>
//             <div className="flex-row gap-2 info-details">
//               <p>Velocidade:</p>
//               <p>{info.speed}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;
