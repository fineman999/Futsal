import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import { Link } from 'react-router-dom';

const GroundCard = ({ ground }) => {
  const {
    groundImg,
    groundName,
    groundAddress: { address1, address2 },
    paymentPoint,
    _id,
  } = ground;

  return (
    <Container>
      <GroundImage src={groundImg} />
      <GroundAddress>{`${address1} ${address2}`}</GroundAddress>
      <GroundName>{groundName}</GroundName>
      <Wrapper>
        <PaymentPoint>{paymentPoint}</PaymentPoint>
        <Link to={`detail/${_id}`}>
          <ReservationButton type='button'>예약하기</ReservationButton>
        </Link>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 20%;
  min-width: fit-content;
  height: 20rem;
  margin: 1rem;
  border: 1px solid #adb5bd;
  border-radius: 4px;
  text-align: center;
`;

const GroundImage = styled.img`
  width: 100%;
  height: 50%;
`;

const GroundAddress = styled.p`
  margin: 1.5rem 0 0.5rem 0;
`;

const GroundName = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PaymentPoint = styled.p`
  font-size: 22px;
`;

const ReservationButton = styled(Button)`
  font-size: 0.9rem;
  padding: 8px 12px;
`;

export default GroundCard;
