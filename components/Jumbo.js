const Jumbo = ({ children, background = 'white' }) => (
  <section>
    {children}
    <style jsx>{`
      width: 100%;
      height: 100vh;
      background: ${background};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      text-align: center;
      font-family: Roboto;
    `}</style>
  </section>
)

export default Jumbo
