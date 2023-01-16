import styled from "styled-components";

export const Container = styled.a`
  border: 1px solid ${(p) => p.theme.colors.header.border};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  width: 100%;

  :hover,
  :focus {
    border-color: ${(p) => p.theme.colors.blue[200]};
    .user_name,
    .issue_title,
    .issue_id {
      color: ${(p) => p.theme.colors.blue[200]};
    }
  }
`;

export const Content = styled.div`
  margin: 10px;
  display: flex;
  justify-content: left;
  flex-direction: row;
  gap: 10px;
  position: relative;

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
      transition: all 0.3s ease;
    }

    .issue_title {
      transition: all 0.3s ease;
      font-size: 16px;
      font-weight: 600;
      color: ${(p) => p.theme.colors.issue.title};
    }

    .issue_id {
      color: ${(p) => p.theme.colors.secundary};
      font-size: 0.6rem;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  .issue_state {
    background-color: ${(p) => p.theme.colors.bg};
    position: absolute;
    left: -20px;
    top: 10px;
    width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    border-radius: 50%;

    svg {
      width: 12px;
      height: 12px;
      color: ${(issueProps) =>
        issueProps.state === "open" ? "#3fb950" : "red"};
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
