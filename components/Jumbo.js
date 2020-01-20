const Jumbo = ({ children, background = 'white' }) => (
  <div>
    {children}
    <style jsx>{`
      width: 100%;
      height: 83vh; //need to fix this
      background: ${background};
      display: flex;
      flex-direction: column;
      justify-content: center;
      //align-items: center;
      position: relative;
      text-align: center;
      font-family: Roboto;
    `}</style>
  </div>
)

export default Jumbo
