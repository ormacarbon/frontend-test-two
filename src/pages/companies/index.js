import React, { useState } from "react";
import LoaderComponent from "../../Components/Loader";
import Pagination from "../../Components/Pagination";
import { SectionTitle } from "../../Components/SectionTitle";
import SEO from "../../Components/SEO";
import { useApi } from "../../hooks/useApi";
import { CompaniesContainer, Table, Tbody, Thead } from "./styles";

export default function Companies() {
  const { response, isLoading } = useApi("companies/public_treasury/bitcoin");
  const company = response.companies


  console.log(company);
  return (
    <main>
      <SEO name="Crypto.me | Companies" />
      <section id="companies">
        <CompaniesContainer>
          <SectionTitle title="Bitcoin related Companies" />
          <Table>
            <Thead>
              <tr>
                <th>Name</th>
                <th>Total Supply (BTC)</th>
                <th>Symbol</th>
                <th>Current Value (USD)</th>
                <th>Total Holdings</th>
              </tr>
            </Thead>
            <Tbody>
              {isLoading ? <LoaderComponent/> : response && response.companies
                ? company.map((company, index) => (
                  <tr key={index}>
                  <td>{company.name}</td>
                  <td>{company.percentage_of_total_supply}%</td>
                  <td>{company.symbol}</td>
                  <td>{company.total_current_value_usd}</td>
                  <td>{company.total_holdings}</td>
                </tr>
                  ))
                : null}
            </Tbody>
          </Table>
        </CompaniesContainer>
      </section>
    </main>
  );
}
