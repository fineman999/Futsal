import React from 'react';
import styled from 'styled-components';
import groundInfo from 'mockData/groundInfo';
import 'react-datepicker/dist/react-datepicker.css';
import { RiCheckboxBlankFill } from 'react-icons/ri';
import IconCard from './IconCard';
// 경기장 정보 값 받아오기 (api)
const info = groundInfo.groundInfo[0];
const act = info.actInfo;



const GroundInfo = () => (
  <>
    <GroundTitle>{info.groundName}</GroundTitle>
    <GroundSubTitle>경기장 정보</GroundSubTitle>
    {/* 아이콘  */}
    <IconCard size ={info.groundSize}/>
    {/* //경기장 정보  */}
    <GroundDetailInformation>
      <GroundSubTitle>경기장 특이사항</GroundSubTitle>

      <GroundInfoTitle>
        <BoxBlanckIcon /> 풋살장 가는길
      </GroundInfoTitle>
      <GroundText>{info.wayTo}</GroundText>

      <GroundInfoTitle>
        <BoxBlanckIcon /> 주차
      </GroundInfoTitle>
      <GroundText>{info.parkingInfo}</GroundText>

      <GroundInfoTitle>
        <BoxBlanckIcon /> 흡연
      </GroundInfoTitle>
      <GroundText>{info.smoking}</GroundText>

      <GroundInfoTitle>
        <BoxBlanckIcon /> 풋살화 대여
      </GroundInfoTitle>
      <GroundText>{info.shoesRentalInfo}</GroundText>

      <GroundInfoTitle>
        <BoxBlanckIcon /> 화장실
      </GroundInfoTitle>
      <GroundText>{info.toilet}</GroundText>

      <GroundInfoTitle>
        <BoxBlanckIcon /> 기타
      </GroundInfoTitle>

      {act.map((list) => (
        <GroundText>
          <li>{list}</li>
        </GroundText>
      ))}
    </GroundDetailInformation>
  </>
);

const GroundTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin: 0.3rem;
  text-align: center;
`;

const GroundSubTitle = styled.h2`
  font-size: 30px;
  text-align: left;
  margin: 2rem 0.3rem 1rem 1rem;
`;

const GroundDetailInformation = styled.div`
  margin: 0.2rem;
`;

const GroundInfoTitle = styled.h3`
  font-size: 25px;
  text-align: left;
  font-weight: bold;
  margin: 0.5rem 0 1rem 2rem;
`;

const GroundText = styled.p`
  font-size: 20px;
  margin: 1rem 0 2rem 4rem;
`;

const BoxBlanckIcon = styled(RiCheckboxBlankFill)`
  font-size: 17px;
`;
export default GroundInfo;
