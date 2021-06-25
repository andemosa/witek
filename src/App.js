import React from 'react'
import './App.css';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1024;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <Mobile /> : <Desktop />;

  // return (
  //   <div >
  //     <Index />
  //   </div>
  // );
}

export default App;