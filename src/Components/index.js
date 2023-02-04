import Image from "next/image";

export { Image };

import Card from "./Card/Card";
import Compare from "./Compare/Compare";
import Info from "./Info/Info";
import Loading from "./Loading/Loading";
import Pagination from "./Pagination/Pagination";
import Search from "./Search/Search";
import CardList from "./CardList/CardList";

export { Card, Compare, Info, Loading, Pagination, Search, CardList };

import Api from "../../Controllers/Api";
import getAutoComplete from "../../Controllers/getAutoComplete";

import {
  LoadingContext,
  CompareContext,
  PokemonContext,
} from "../../Controllers/Context";

export { Api, getAutoComplete, LoadingContext, CompareContext, PokemonContext };
