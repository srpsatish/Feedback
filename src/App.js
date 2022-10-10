import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import FormPreview from './components/form-preview/FormPreview';
import Header from './components/header/Header';
import PageFive from './components/page-five/PageFive';
import PageFour from './components/page-four/PageFour';
import PageOne from './components/page-one/PageOne';
import PageThree from './components/page-three/PageThree';
import PageTwo from './components/page-two/PageTwo';

function App() {
  if (!Boolean(localStorage.getItem('PageData'))) {
    localStorage.setItem('PageData', 1);
  }
  const pageno = localStorage.getItem('PageData');
  const [pageNumber, setPageNumber] = useState(pageno);

  const HandlePageIncrease = () => {
    setPageNumber(pageNumber + 1);
  };

  const HandlePageDecrease = () => {
    setPageNumber(pageNumber - 1);
  };
  useEffect(() => {
    localStorage.setItem('PageData', pageNumber);
  }, [pageNumber]);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Header pageNumber={pageNumber} />
      </div>
      <div
        style={{
          width: '75%',
          margin: '0 auto',
          paddingTop: '22px',
          display: 'flex',
        }}
      >
        {pageNumber === 1 && <PageOne />}
        {pageNumber === 2 && <PageTwo backfn={HandlePageDecrease} />}
        {pageNumber === 3 && <PageThree backfn={HandlePageDecrease} />}
        {pageNumber === 4 && <PageFour backfn={HandlePageDecrease} />}
        {pageNumber === 5 && <PageFive />}
        {pageNumber === 4 || pageNumber === 5 ? <></> : <FormPreview />}
      </div>
      {pageNumber === 5 ? (
        <></>
      ) : pageNumber === 4 ? (
        <Footer onClick={() => HandlePageIncrease()}>Submit</Footer>
      ) : (
        <Footer onClick={() => HandlePageIncrease()}>Next</Footer>
      )}
    </div>
  );
}

export default App;
