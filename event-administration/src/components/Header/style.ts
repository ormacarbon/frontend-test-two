import styled from "styled-components";

export const Header = styled.nav`
  width: 100vw;
  height: 8vh;
  background-color: var(--brown-200);
  color: var(--white-999);
  font-family: var(--roboto);
  font-weight: 500;
  display: relative;
  position: fixed;

  > p.drinks {
    position: absolute;
    top: 3%;
    width: 200px;
    cursor: pointer;
  }

  > p.events {
    position: absolute;
    width: 100%;
    text-align: left;
    padding-right: 130px;
    top: 1%;
  }

  > ul {
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
    margin: 0 3px;

    li {
      margin: 0 15px;
      font-size: 0.8rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 500px) {
    height: 12vh;

    > p.drinks {
      top: 5%;
    }

    > p.events {
      padding-right: 15px;
    }

    > ul {
      flex-direction: column;
      align-items: flex-end;

      li {
        margin: 1px 15px;
      }
    }
  }
`;

export const HeaderMenu = styled.div`
  position: absolute;
  top: 3%;
  width: 92%;
  display: flex;
  justify-content: space-between;

  > p.drinks {
    cursor: pointer;
  }
`;
