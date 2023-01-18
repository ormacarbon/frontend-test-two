import React, { useState } from 'react';

import { ChevronDown } from '../Icons';

import {
  Main,
  DropDownContainer,
  DropDownHeader,
  Title,
  DropDownListContainer,
  DropDownList,
  Button,
  ListItem,
} from './styles';

export default function Dropdown(props) {
  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={props.toggling}>
          <Title>Filter</Title>
          <ChevronDown />
        </DropDownHeader>
        {props.isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem>
                <Button onClick={props.onClick} value='People'>
                  People
                </Button>
              </ListItem>
              <ListItem>
                <Button onClick={props.onClick} value='Cars'>
                  Cars
                </Button>
              </ListItem>
              <ListItem>
                <Button onClick={props.onClick} value='Landscape'>
                  Landscape
                </Button>
              </ListItem>
              <ListItem>
                <Button onClick={props.onClick} value='Animals'>
                  Animals
                </Button>
              </ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}
