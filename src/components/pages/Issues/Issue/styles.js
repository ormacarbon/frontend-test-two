import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  border: 1px solid ${(p) => p.theme.colors.header.border};
  border-radius: 10px;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: left;
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
      color: ${(p) => p.theme.colors.issue.user};
    }

    .issue_title {
      font-size: 16px;
      font-weight: 600;
      color: ${(p) => p.theme.colors.issue.title};
    }
  }
`;

export const Label = styled.span`
  display: inline-block;
  color: ${(p) => p.theme.colors.button.text};
  padding: 2px 6px;
  border-radius: 20px;
  background-color: ${(p) => p.theme.colors.button.bg};
  font-size: 0.8rem;
  margin: 4px 4px 4px 0;
`;
