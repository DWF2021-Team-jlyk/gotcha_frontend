import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import worklistImg from '../../image/worklist.png';
import listImg from '../../image/list.png';
import card2Img from '../../image/card2.png';
import foxImg from '../../image/fox.jpg';

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }
  .slick-prev:before,
  .slick-next:before {
    color: #3f51b5;
  }
`;

export default class HelpCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <StyledSlider {...settings}>
          <div>
            <div style={{marginTop:100}}>
            <img src={foxImg} style={{marginLeft:370}}/>
              <h1 style={{color:'#3f51b5'}}>
                <b>이용방법</b>
              </h1>
              <br></br>
              <p>
                <h3 style={{color:'#3f51b5'}}>
                  <b>Gotcha에 오신 것을 환영합니다!</b>
                </h3>
                <br></br>
                <br></br>
                    <p style={{fontSize:'1.4rem'}}>
                        Gotcha는 다른 사람과 함께 장기적인 일(프로젝트, 과제)등을
                        효과적으로 관리하거나<br></br>
                        여행, 일기와 같이 개인의 기록을 남길 수 있는 하나의 공간을
                        제공해주는 곳입니다.<br></br>
                    </p>
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src={worklistImg}
              alt={'gotcha'}
              width="1000"
              height="500"
              style={{ marginLeft: 30 }}
            />
            <p style={{ marginTop: 40, fontSize: '1.2rem' }}>
              <b>Workspace</b> 안에는 1. worklist, 2. calendar, 3. board가
              있습니다. <br></br>
              <b>Workspace</b>는 다른 사람과 함께 장기적인 일(프로젝트,
              과제)등을 효과적으로 관리하거나<br></br>
              여행, 일기와 같이 개인의 기록을 남길 수 있는 하나의 공간입니다.{' '}
            </p>
          </div>

          <div>
            <img
              src={listImg}
              alt={'gotcha'}
              style={{ marginLeft: 290, marginTop: 50 }}
            />

            <p style={{ marginTop: 80, fontSize: '1.2rem' }}>
              <b>worklist</b>는 <b>list</b>와 <b>card</b>로 이루어져있습니다.
              <br></br>
              <b>list</b>는 대분류, <b>card는</b> 소분류로서 list 주제에 맞춰서
              card를 추가하시면 됩니다.
              <br></br>card 상세정보는 뒤에 설명드리겠습니다.<br></br>
            </p>
          </div>

          <div style={{ display: 'flex' }}>
            <div>
              <img src={card2Img} alt={'gotcha'} width="1100" height="450" />
            </div>

            <div>
              <p style={{ marginTop: 40, fontSize: '1.2rem' }}>
                - 카드는 <b>member, date, todo, move, file, activity</b>{' '}
                기능들이 있습니다.  <br></br>
                - 선택한 카드에 추가할 <b>멤버</b>(워크스페이스에있는 멤버)를 선택할 수 있습니다.<br></br>
                - 카드의 기간을 설정할 수 있습니다. 이는 달력에 표시됩니다. <br></br>
                - 소분류인만큼 그 소분류에서 해야할 것을 <b>todo</b>로 정하여 기간을 정하고, 완료시 체크할 수 있습니다. <br></br>
                - <b>file</b>은 카드에 필요한 파일들을 추가할 수 있으며 다른 멤버들또한 다운로드 받을 수 있습니다.<br></br>
                - <b>activity</b>는 댓글과 카드에서 일어난 행동들이 자동적으로 기록되는 log가 존재합니다. <br></br>
                - 로그를 보고싶으면 <b>show log</b>를 클릭하면 됩니다.<br></br>
              </p>
            </div>
          </div>
        </StyledSlider>
      </div>
    );
  }
}
