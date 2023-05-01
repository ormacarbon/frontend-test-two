import styled from 'styled-components'

export const Col = styled.div`
  display: flex;
  width: 100%;
`

export const CardContainer = styled.div`
  width: 100%;
  background: #F9E5E5;
  border: 1px solid #FE6763;
  border-radius: 20px;
  padding: 30px;
  position: relative;
  display: flex;

  .info-container {
    &:nth-child(1),
    &:nth-child(2) {
      width: calc((100% - 215px) / 2);
      max-width: calc((100% - 215px) / 2);
    }

    &:nth-child(3) {
      width: 85px;
    }

    &:nth-child(4) {
      width: 110px;
    }
  }

  .task-dropdown {
    width: 20px;
    padding-right: 0;
    display: flex;
    justify-content: center !important;
    align-items: center !important;

    .ant-dropdown-trigger {
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (max-width: 768px) and (min-width: 480px) {
    flex-wrap: wrap;
    .info-container {
        &:nth-child(1),
        &:nth-child(2) {
          padding-bottom: 20px;
          width: 50%;
          max-width: 50%;
        }

        &:nth-child(3) {
          width: 50%;
        }

        &:nth-child(4) {
          width: 50%;
        }
    }

    .task-dropdown {
      position: absolute;
      right: 20px;
      top:20px;
      z-index: 2;
    }

    .ant-dropdown-trigger {
      z-index: 30;
      width: 40px;
      height: 40px;
      padding: 10px;
      z-index: 20;
    }
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    .info-container {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          padding-bottom: 20px;
          width: 100%;
          max-width: 100%;
        }

        &:nth-child(4) {
          width: 100%;
        }
    }

    .task-dropdown {
      position: absolute;
      right: 20px;
      top:20px;
    }

    .ant-dropdown-trigger {
      z-index: 30;
      width: 40px;
      height: 40px;
      padding: 10px;
      z-index: 20;
    }
  }
`

export const Image = styled.img`
  width: 20px;
  height: 20px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;

  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`

export const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #1C1C1C;
  margin: 0;
`

export const Info = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #424242;
  margin: 7px 0 0;
`
