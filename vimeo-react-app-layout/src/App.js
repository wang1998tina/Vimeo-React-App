import React, { Component } from 'react';
import monsoon from './monsoon.jpg';
import beams from './beams.jpg';
import move2 from './move2.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-row">
        	<div className="img-div">
          		<img src={monsoon} className="img" alt="Monsoon III" />
          	</div>
          	<div className="txt-div">
          		<div className="txt-header"> 
            		Monsoon III
          		</div>
          		<p className="txt">
            	Voluptas a vel eius voluptatibus natus eius eum dolore. Est nisi impedit dolore unde in unde. Ab repellendus occaecati nobis.

            	Qui amet non error aut repudiandae corporis quibusdam veritatis. Est autem eius delectus eaque omnis nemo magni. Rerum eos maiores officiis in quaerat cum tempora ratione. Nesciunt nihil eum ipsam ad ut mollitia accusamus. Quia hic laborum porro alias. 
            
            	</p>
            </div>
        </div>

        <div className="flex-row bkg-black">
        	<div className="img-div">
          		<img src={beams} className="img" alt="Beams" />
          	</div>
          	<div className="txt-div">
          		<div className="txt-header txt-white"> 
            		Beams
          		</div>
          		<p className="txt txt-white">
            	Voluptas a vel eius voluptatibus natus eius eum dolore. Est nisi impedit dolore unde in unde. Ab repellendus occaecati nobis.

            	Qui amet non error aut repudiandae corporis quibusdam veritatis. Est autem eius delectus eaque omnis nemo magni. Rerum eos maiores officiis in quaerat cum tempora ratione. Nesciunt nihil eum ipsam ad ut mollitia accusamus. Quia hic laborum porro alias. 
            
            	</p>
            </div>
        </div>


        <div className="flex-row bkg-gradient">
        	<div className="img-div">
          		<img src={move2} className="img" alt="move2" />
          	</div>
          	<div className="txt-div">
          		<div className="txt-header txt-white"> 
            		Move 2
          		</div>
          		<p className="txt txt-white">
            	Voluptas a vel eius voluptatibus natus eius eum dolore. Est nisi impedit dolore unde in unde. Ab repellendus occaecati nobis.

            	Qui amet non error aut repudiandae corporis quibusdam veritatis. Est autem eius delectus eaque omnis nemo magni. Rerum eos maiores officiis in quaerat cum tempora ratione. Nesciunt nihil eum ipsam ad ut mollitia accusamus. Quia hic laborum porro alias. 
            
            	</p>
            </div>
        </div>



      </div>

    );
  }
}

export default App;
