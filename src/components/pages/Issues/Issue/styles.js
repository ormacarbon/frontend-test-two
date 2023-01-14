import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;

  .profile_img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }

  div {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    gap: 6px;

    .user_name {
      font-size: 12px;
    }

    .issue_title {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;
