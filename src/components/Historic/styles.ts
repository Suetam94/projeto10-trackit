import styled from "styled-components";

export const Container = styled.main`
  background: var(--body-background-color);
  min-height: 100vh;
  padding: 28px 21px 57px 19px;
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    abbr {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }

  .completed {
    button {
      abbr {
        background: var(--active-check-color);
      }
    }
  }

  .not-completed {
    button {
      abbr {
        background: #e75766;
      }
    }
  }

  .react-calendar {
    border: 0;
    border-radius: 5px;
  }

  .react-calendar__tile--active {
    background: #ffff76;
    color: #000;
  }
`;

export const GeneralTitle = styled.h3`
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: var(--darker-blue);
  text-transform: capitalize;
  margin-bottom: 11px;
`;

export const NoDataMessage = styled.p`
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
`;
