import React, {useEffect} from 'react';
import SliderMain from '../components/SliderMain';
import FeatureBox from '../components/FeatureBox';
import CarouselCollection from '../components/CarouselCollection';
import CarouselNew from '../components/CarouselNew';
import AuthorList from '../components/authorList';
import Catgor from '../components/Catgor';
import Footer from '../components/footer';


const Home= () => {

  // useEffect(() => {
  //   if (window.ethereum) {
  //     window.ethereum.on('chainChanged', (acct) => {
  //       console.log(acct, acct === '0x13881', acct === '0x539');
  //       if (acct !== '0x539') {
  //         alert('Wrong network, must be on local testnet.');
  //       }
  //     });
  //     window.ethereum.on('accountsChanged', (acct) => {
  //       localStorage.removeItem('@signer');
  //     });
  //   }
  // }, []);
  return (
  <div>
      <section className="jumbotron breadcumb no-bg h-vh" style={{backgroundImage: `url(${'./img/bg-shape-1.jpg'})`}}>
         <SliderMain/>
      </section>

      <section className='container no-top no-bottom'>
        <FeatureBox/>
      </section>

      {/* <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Hot Collections</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <CarouselCollection/>
          </div>
        </div>
      </section> */}

      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>New Items</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <CarouselNew/>
          </div>
        </div>
      </section>

      {/* <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Top Sellers</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <AuthorList/>
          </div>
        </div>
      </section> */}

      <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Browse by category</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <Catgor/>
      </section>

    <Footer />

  </div>
)};
export default Home;