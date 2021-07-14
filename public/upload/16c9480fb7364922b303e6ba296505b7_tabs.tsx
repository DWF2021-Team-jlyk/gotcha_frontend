import { Tabs, Tab } from '@paljs/ui/Tabs';
import { Card, CardBody, CardHeader, CardFooter } from '@paljs/ui/Card';
import { Button, ButtonLink } from '@paljs/ui/Button';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React, {useState} from 'react';
import SEO from '../../components/SEO';
import Modal from './Modal';

const TabPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () =>{
      setModalOpen(true);
  }

  const closeModal = () =>{
      setModalOpen(false);
  }
  return (
    <>
      <SEO title="Tabs" />
      <SEO title="Cards" />
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card>

            <Tabs activeIndex={0} fullWidth>
             {/* 워크스페이스 */}
              <Tab
                title="WorkSpace"
                icon="icon ion-ios-home"
                responsive
              >
                <Row>

                  {/* 리스트 */}
                  <Col breakPoint={{ md: 3}}>
                  <Card>
                    <CardHeader>리스트 이름</CardHeader>
                    <CardBody>
                    {/* 리스트안의 카드 */}
                      <Card>
                        <CardBody onClick={openModal}>
                        카드
                        <Modal open = {modalOpen} close={closeModal} header="Modal heading">
                          {/* Modal.js <main> { props.children } </main>에 내용이 입력된다.  */}
                              modal 내용
                              들어가는 곳
                        </Modal>
                                      
                        </CardBody>
                      </Card>

                      <Card>
                        <CardBody>Card Name</CardBody>
                      </Card>

                      <Card>
                        <CardBody>Card Name</CardBody>
                      </Card>

                    </CardBody>
                    <CardFooter>
                      <Button fullWidth appearance="outline">
                        + add another card
                      </Button>

                    </CardFooter>
                  </Card>
                  </Col>

                  <Col breakPoint={{ md: 3}}>
                  <Button fullWidth appearance="outline">
                        + add list button
                  </Button>
                  </Col>
                
                </Row>
              </Tab>
              {/* 캘린더 */}
              <Tab
                title="Calendar"
                icon="icon ion-ios-star-outline"
      
                responsive
              >
                <h1>Content 2</h1>
              </Tab>
              {/* 공지사항 */}
              <Tab
                title="Notice"
                icon="icon ion-ios-switch"
                badge={{ status: 'Danger', title: '11', position: 'topStart' }}
                responsive
              >
                <h1>Content 3</h1>
              </Tab>

            </Tabs>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default TabPage;
