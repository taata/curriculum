import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile';
import Experience from '../experience/experience';
import marketmedia from '../../images/experiences/market_media.png';

const Home = () => (
    <Row>
        <Col m={3} s={12} className="center-div">
            {<UserProfile />}
        </Col>
        <Col m={8} s={12}>
            <h5 className="subtitle"> Sobre mim</h5>
            <Card>
                <div>
                    <p>
                        Sou técnica em Web Designer e formada em Sistemas de informação.
                    </p>
                    <p>
                        Comecei minha carreira em TI como estagiária em Março de 2017. </p>
                    <p>
                        Front-end me conquistou e continua conquistando cada vez mais, ver o resultado do meu trabalho me da um grande prazer.</p>
                    <p>
                        Sou uma pessoa muito responsável, organizada, comprometida, esforçada, que gosta de desafios e aprender coisas novas. Trabalho bem em equipe.
                    </p>
                    <p>
                        Viso muito meu crescimento profissional!
                    </p>
                </div>
            </Card>
            <h5 className="subtitle"> Experiências </h5>
            {<Experience title="Fullstack Developer" company="Market Media"
                description={
                    <p>
                        Manutenção/desenvolvimento de aplicações de Web Api's Rest e sistemas no geral, utilizando: <br />
                        Linguagens Backend: C# e PHP  <br />
                        Ferramentas/Frameworks Frontend: HTML5, CSS3, Sass, JavaScript, jQuery e AngularJs. <br />
                        Ferramentas de versionamento: Git  <br />
                        Bancos de dados: SQL Server e MySql.
                    </p>
                } avatar={marketmedia} />}
            {<Experience title="Estágio - Fullstack Developer" company="Market Media"
                description={
                    <p>
                        Manutenção/desenvolvimento de aplicações de Web Api's Rest e sistemas no geral, utilizando:<br />
                        Linguagens Backend: C# e PHP<br />
                        Ferramentas/Frameworks Frontend: HTML5, CSS3, Sass, JavaScript, jQuery e AngularJs<br />
                        Ferramentas de versionamento: Git<br />
                        Bancos de dados: SQL Server e MySql
                    </p>
                } avatar={marketmedia} />}
        </Col>
    </Row >
);

export default Home;