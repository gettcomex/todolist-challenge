import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 32px;
  color: #292929;
  margin-top: 12px;

  input {
    padding: 24px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #ffc054;
    outline: none;
    width: 320px;
    background: rgba(250, 250, 250, 0.9);
    transition: background 0.2s ease;

    &:focus {
      background: rgba(254, 254, 254, 0.92);
    }
  }

  button {
    font-size: 24px;
    padding: 16px;
    text-transform: capitalize;
    border: none;
    border-radius: 0 4px 4px 0;
    background: linear-gradient(
    90deg,
    #ffc054 0%,
    #ffd47d 100%
  );
  }
`;

export const Tasks = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cdcbd6;
        }

    }
    `;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;`;
