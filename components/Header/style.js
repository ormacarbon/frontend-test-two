import styled from "styled-components";

export const HeaderBg = styled.header`
  background-color: var(--color-2);
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const MenuUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  a {
    color: var(--color-p4);
    display: inline-block;
    padding: 16px 0px;
    position: relative;
  }

  a:after {
    content: "";
    display: block;
    height: 2px;
    width: 0%;
    background-color: var(--color-p4);
    margin-top: 4px;
    transition: 0.3s;
    position: absolute;
  }

  a:hover:after {
    width: 100%;
  }

  @media (max-width: 800px) {
    gap: 20px;
    a {
      background: var(--color-1);
      padding: 12px 16px;
      border-radius: 4px;
    }
    a:hover {
      background-color: var(--color-4);
    }
    a:after {
      display: none;
    }
  }
  @media (max-width: 600px) {
    gap: 12px;
    a {
      padding: 8px 12px;
      font-size: 14px;
    }
  }
`;
